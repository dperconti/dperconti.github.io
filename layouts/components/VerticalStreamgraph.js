import { useEffect, useRef, useMemo, useState } from 'react';
import * as d3 from 'd3';

const VerticalStreamgraph = ({ 
  className = '', 
  width, 
  height, 
  data 
}) => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Color palette matching the image exactly
  const colorPalette = useMemo(() => [
    // Teal/Blue (top-left, central-left)
    { start: '#14B8A6', end: '#06B6D4', mid: '#3B82F6' },
    // Magenta/Purple (center transitions)
    { start: '#EC4899', end: '#A855F7', mid: '#8B5CF6' },
    // Orange (right edges)
    { start: '#F97316', end: '#FB923C', mid: '#F59E0B' },
    // Additional layers for depth
    { start: '#06B6D4', end: '#3B82F6', mid: '#60A5FA' },
    { start: '#A855F7', end: '#EC4899', mid: '#C084FC' },
    { start: '#FB923C', end: '#F97316', mid: '#FDBA74' },
    { start: '#3B82F6', end: '#8B5CF6', mid: '#6366F1' },
  ], []);

  // Generate demo data if not provided - river-like flow with pooling, narrowing, widening
  const streamData = useMemo(() => {
    if (data) return data;
    
    // Generate time-series-like data points with river-like characteristics
    const numPoints = 220; // More points for smoother flow and more sections
    const numSeries = colorPalette.length;
    const baseData = [];
    
    // Create river sections: pools (wide), channels (narrow), bends (left/right)
    const createRiverSection = (startIdx, endIdx, type) => {
      const section = [];
      for (let i = startIdx; i < endIdx; i++) {
        const progress = (i - startIdx) / (endIdx - startIdx);
        section.push({ index: i, progress, type });
      }
      return section;
    };
    
    // Define river sections with different characteristics - more dramatic variance
    const sections = [
      { start: 0, end: 15, type: 'narrow', width: 0.1 }, // Very narrow start
      { start: 15, end: 35, type: 'pool', width: 0.7 }, // Very wide pool
      { start: 35, end: 50, type: 'channel', width: 0.12 }, // Very narrow channel
      { start: 50, end: 75, type: 'pool', width: 0.75 }, // Massive pool
      { start: 75, end: 95, type: 'bend', width: 0.25 }, // Sharp bend
      { start: 95, end: 110, type: 'narrow', width: 0.15 }, // Narrow constriction
      { start: 110, end: 135, type: 'pool', width: 0.65 }, // Large pool
      { start: 135, end: 150, type: 'bend', width: 0.3 }, // Another bend
      { start: 150, end: 170, type: 'channel', width: 0.18 }, // Narrow channel
      { start: 170, end: 200, type: 'pool', width: 0.6 }, // Final wide pool
      { start: 200, end: 220, type: 'narrow', width: 0.12 }, // Narrow end
    ];
    
    for (let i = 0; i < numPoints; i++) {
      const point = { index: i };
      
      // Find which section this point belongs to
      const section = sections.find(s => i >= s.start && i < s.end) || sections[sections.length - 1];
      const sectionProgress = (i - section.start) / (section.end - section.start);
      
      for (let j = 0; j < numSeries; j++) {
        // Each data point varies independently with heavy randomization
        // Base width from section type, but heavily randomized
        let baseWidth = section.width;
        
        // Section type gives a general range, but each point varies independently
        let sectionMultiplier = 1.0;
        if (section.type === 'pool') {
          // Pools: wide range, each point independent
          sectionMultiplier = 0.5 + Math.random() * 0.8; // 0.5 to 1.3
        } else if (section.type === 'channel') {
          // Channels: narrow range but still varies
          sectionMultiplier = 0.6 + Math.random() * 0.6; // 0.6 to 1.2
        } else if (section.type === 'bend') {
          // Bends: dramatic variation
          sectionMultiplier = 0.4 + Math.random() * 0.9; // 0.4 to 1.3
        } else if (section.type === 'narrow') {
          // Narrow: tight but still varies independently
          sectionMultiplier = 0.5 + Math.random() * 0.7; // 0.5 to 1.2
        }
        
        baseWidth = section.width * sectionMultiplier;
        
        // Each stream at each point has independent random variation
        const independentFlow = (Math.random() - 0.5) * 0.8; // Large independent variation
        
        // Per-series base offset - but each point varies independently around it
        const seriesBaseOffset = (j / numSeries) * 0.3;
        const seriesPointVariation = (Math.random() - 0.5) * 0.4; // Independent per point
        
        // Left/right flow - mostly random with slight tendency
        const leftRightTendency = (Math.random() - 0.5) * 0.6; // Independent random flow
        const leftRightVariation = (Math.random() - 0.5) * 0.4; // Additional independent variation
        
        // Section-specific tendency (subtle, not dominant)
        let sectionTendency = 0;
        if (section.type === 'bend') {
          sectionTendency = (Math.random() - 0.5) * 0.3; // Random but can be dramatic
        } else if (section.type === 'pool') {
          sectionTendency = (Math.random() - 0.5) * 0.2; // Gentler random variation
        } else if (section.type === 'channel') {
          sectionTendency = (Math.random() - 0.5) * 0.25;
        } else if (section.type === 'narrow') {
          sectionTendency = (Math.random() - 0.5) * 0.3;
        }
        
        // Combine all independent variations
        const value = baseWidth + 
                     seriesBaseOffset + 
                     seriesPointVariation + 
                     independentFlow + 
                     leftRightTendency + 
                     leftRightVariation + 
                     sectionTendency;
        
        // Final independent noise
        const finalNoise = (Math.random() - 0.5) * 0.2;
        
        point[`series${j}`] = Math.max(0.02, value + finalNoise);
      }
      
      baseData.push(point);
    }
    
    return baseData;
  }, [data, colorPalette.length]);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const svg = svgRef.current;
    
    // Get dimensions - measure container if dimensions not provided via props
    let containerWidth = width;
    let containerHeight = height;
    
    if (!containerWidth || !containerHeight) {
      // Measure container or use window/document dimensions
      containerWidth = containerWidth || container.clientWidth || (typeof window !== 'undefined' ? window.innerWidth : 1920);
      // Use document height for scrolling, or container height, or viewport height
      if (typeof document !== 'undefined' && !containerHeight) {
        containerHeight = Math.max(
          document.documentElement.scrollHeight,
          document.documentElement.clientHeight,
          container.clientHeight || 0,
          window.innerHeight || 1080
        );
      } else {
        containerHeight = containerHeight || container.clientHeight || (typeof window !== 'undefined' ? window.innerHeight : 1080);
      }
    }
    
    // Skip render if dimensions are invalid
    if (containerWidth <= 0 || containerHeight <= 0) return;
    
    // Clear previous render
    d3.select(svg).selectAll('*').remove();
    
    // Set SVG dimensions
    d3.select(svg)
      .attr('width', containerWidth)
      .attr('height', containerHeight)
      .style('background', '#FAF9F6'); // Light off-white/cream background
    
    // Create margins - smaller horizontal margins to allow more left/right flow
    const margin = { top: 0, right: containerWidth * 0.1, bottom: 0, left: containerWidth * 0.1 };
    const innerWidth = containerWidth - margin.left - margin.right;
    const innerHeight = containerHeight; // Use full height, no vertical margins
    
    // Create main group
    const g = d3.select(svg)
      .append('g')
      .attr('transform', `translate(${margin.left},0)`); // Start at top (y=0)
    
    // Prepare data for stacking
    const keys = Object.keys(streamData[0]).filter(key => key !== 'index');
    
    // Create stack generator with wiggle offset for organic flow
    const stack = d3.stack()
      .keys(keys)
      .offset(d3.stackOffsetWiggle)
      .order(d3.stackOrderNone);
    
    const stackedData = stack(streamData);
    
    // Calculate domain for y scale from stacked data
    const allValues = stackedData.flat(2);
    const yMin = d3.min(allValues);
    const yMax = d3.max(allValues);
    
    // Create scales - for vertical orientation
    // In D3 area: x = horizontal, y = vertical
    // For vertical streamgraph: data index maps to Y (vertical), values map to X (horizontal)
    
    // Y scale maps to height (vertical axis) - this is the "time" dimension
    // Start at top (0) and end at bottom (innerHeight)
    const yScale = d3.scaleLinear()
      .domain([0, streamData.length - 1])
      .range([0, innerHeight]); // Top to bottom: 0 = top, innerHeight = bottom
    
    // X scale maps to width (horizontal axis) - this is the "value" dimension
    // Allow wider range for river-like flow (left and right movement)
    const centerX = innerWidth / 2;
    const maxStreamWidth = innerWidth * 0.7; // Allow up to 70% width for pools
    const minStreamWidth = innerWidth * 0.15; // Minimum 15% for narrow channels
    const xScale = d3.scaleLinear()
      .domain([yMin, yMax])
      .range([centerX - maxStreamWidth / 2, centerX + maxStreamWidth / 2]);
    
    // Create area generator with smooth curves for organic edges
    // For vertical orientation: y is vertical position (data index), x0/x1 are horizontal bounds (values)
    const area = d3.area()
      .x0(d => xScale(d[0])) // Left edge (horizontal)
      .x1(d => xScale(d[1])) // Right edge (horizontal)
      .y((d, i) => yScale(i)) // Vertical position (data index)
      .curve(d3.curveBasis); // Smooth, organic curves
    
    // Create gradient definitions
    const svgSelection = d3.select(svg);
    const defs = svgSelection.append('defs');
    
    // Create gradients for each series
    stackedData.forEach((series, i) => {
      const colorSet = colorPalette[i % colorPalette.length];
      
      // Linear gradient following the vertical flow
      const gradient = defs.append('linearGradient')
        .attr('id', `gradient-${i}`)
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%');
      
      // Create gradient stops with translucency
      gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', colorSet.start)
        .attr('stop-opacity', 0.75);
      
      gradient.append('stop')
        .attr('offset', '50%')
        .attr('stop-color', colorSet.mid)
        .attr('stop-opacity', 0.7);
      
      gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', colorSet.end)
        .attr('stop-opacity', 0.75);
    });
    
    // Create blur filter for soft edges
    const filter = defs.append('filter')
      .attr('id', 'blur')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%');
    
    filter.append('feGaussianBlur')
      .attr('in', 'SourceGraphic')
      .attr('stdDeviation', 2);
    
    // Create highlight gradient for glossy effect (before paths)
    const highlightGradient = defs.append('linearGradient')
      .attr('id', 'gradient-highlight')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');
    
    highlightGradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#FFFFFF')
      .attr('stop-opacity', 0.3);
    
    highlightGradient.append('stop')
      .attr('offset', '50%')
      .attr('stop-color', '#FFFFFF')
      .attr('stop-opacity', 0.1);
    
    highlightGradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#FFFFFF')
      .attr('stop-opacity', 0.2);
    
    // Draw the streamgraph paths
    stackedData.forEach((series, i) => {
      const path = g.append('path')
        .datum(series)
        .attr('fill', `url(#gradient-${i})`)
        .attr('d', area)
        .attr('opacity', 0.85)
        .style('mix-blend-mode', 'multiply'); // Creates color blending effect
      
      // Add subtle highlight overlay for glossy effect
      const highlight = g.append('path')
        .datum(series)
        .attr('fill', 'url(#gradient-highlight)')
        .attr('d', area)
        .attr('opacity', 0.15)
        .style('mix-blend-mode', 'screen');
    });
    
    // Add dark accent lines for depth (internal shadows)
    stackedData.forEach((series, i) => {
      if (i % 2 === 0) { // Add to alternating layers
        const accentPath = g.append('path')
          .datum(series)
          .attr('fill', 'none')
          .attr('stroke', '#1E293B')
          .attr('stroke-width', 0.5)
          .attr('stroke-opacity', 0.2)
          .attr('d', area)
          .style('mix-blend-mode', 'multiply');
      }
    });
    
    // Handle window resize - update dimensions to trigger re-render
    const handleResize = () => {
      if (typeof window === 'undefined') return;
      if (!width && !height && container) {
        const newWidth = container.clientWidth || window.innerWidth;
        const newHeight = container.clientHeight || window.innerHeight;
        setDimensions(prev => {
          // Only update if dimensions actually changed (avoid infinite loops)
          if (prev.width !== newWidth || prev.height !== newHeight) {
            return { width: newWidth, height: newHeight };
          }
          return prev;
        });
      }
    };
    
    // Set initial dimensions if not provided via props
    if (typeof window !== 'undefined' && !width && !height && container) {
      const initialWidth = container.clientWidth || window.innerWidth;
      const initialHeight = container.clientHeight || window.innerHeight;
      if (dimensions.width === 0 || dimensions.height === 0) {
        setDimensions({ width: initialWidth, height: initialHeight });
      }
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [streamData, colorPalette, width, height, dimensions.width, dimensions.height]);

  return (
    <div 
      ref={containerRef}
      className={`vertical-streamgraph ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: width || '100%',
        height: height || '100%',
        minHeight: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <svg ref={svgRef} />
    </div>
  );
};

export default VerticalStreamgraph;
