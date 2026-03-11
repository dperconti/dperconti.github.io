/**
 * Shared pool of 600+ unique blog topic titles for dperconti.github.io.
 * Used by generate-blogs.js and dedupe-blog-titles.js to avoid duplicate titles.
 */
const stems = [
  'Engineering Leadership', 'System Design', 'Code Review', 'Team Management',
  'Stakeholder Communication', 'Technical Debt', 'Scaling Teams', 'Remote Work',
  'Career Development', 'Mentoring', 'Incident Response', 'API Design',
  'Payment Systems', 'Fintech', 'DevOps Practices', 'Documentation',
  'Agile Methodologies', 'Performance Reviews', 'Security Practices',
  'Architecture Decisions', 'Tool Selection', 'Innovation', 'Budget Planning',
  'Process Improvement', 'Hiring Engineers', 'Code Quality', 'Monitoring',
  'Deployment Pipelines', 'Communication', 'Product Development',
  'Project Management', 'Technical Strategy', 'Observability',
  'Stakeholder Management', 'Building Teams', 'Sustainable Pace',
  'Work-Life Balance', 'TypeScript Patterns', 'Python in Production',
  'Testing Strategies', 'System Design for Payments', 'Engineering Culture',
]
const suffixes = [
  'Best Practices', 'Lessons Learned', 'Practical Guide', 'Principles',
  'Considerations', 'Tips', 'Patterns', 'Strategies', 'Framework',
  'Approach', 'Methods', 'Insights', 'Challenges', 'Decisions',
  'Effective Techniques', 'Essential Guide', 'Critical Tips',
  'Successful Patterns', 'Proven Lessons', 'Modern Practices',
  'Advanced Principles', 'Strategic Approach', 'Innovative Methods',
  'Scalable Strategies', 'Sustainable Lessons', 'Important Insights',
]

const topicTitles = []
stems.forEach((s) => {
  suffixes.forEach((x) => {
    topicTitles.push(`${s}: ${x}`)
  })
})

const extra = [
  'Engineering Leadership in Remote Teams', 'TypeScript Patterns for Financial Systems',
  'Building Sustainable Engineering Cultures', 'Payment System Design Principles',
  'Mentoring Junior Engineers', 'Technical Debt and When to Pay It Down',
  'Scaling Teams Without Losing Quality', 'Work-Life Balance in Startups',
  'API Design for Fintech', 'Running Effective Code Reviews',
  'Incident Response Best Practices', 'Career Development for Engineers',
  'Python in Production at Scale', 'Stakeholder Communication', 'System Design for Payments',
  'Evolving Engineering Leadership', 'Designing Engineering Leadership',
  'Implementing Engineering Leadership', 'Leading Innovation', 'Leading Career Development',
  'Building Scaling Teams', 'Architecting Documentation', 'Architecting Communication',
  'Architecting Incident Response', 'Implementing Incident Response', 'Implementing Code Quality',
  'Transforming Remote Work', 'Evolving Remote Work', 'Evolving Mentoring',
  'Delivering Agile Methodologies', 'Creating Agile Methodologies', 'Scaling Documentation',
  'Optimizing Project Management', 'Optimizing Hiring Engineers', 'Optimizing Monitoring & Observability',
  'Improving Budget Planning', 'Designing Process Improvement', 'Designing Budget Planning',
  'Developing Innovation', 'Building Career Development', 'Leading Hiring Engineers',
  'Maintaining Communication', 'Maintaining Incident Response', 'Maintaining Security Practices',
  'Managing Architecture Decisions', 'Key Innovation Patterns', 'Best Stakeholder Management',
  'Successful Stakeholder Management', 'Critical Product Development', 'Critical Team Management',
  'Essential System Design', 'Proven Team Management', 'Proven Agile Methodologies',
  'Proven Code Review', 'Proven Project Management', 'Practical Incident Response',
  'Practical Deployment Pipelines', 'Innovative DevOps Practices', 'Innovative Monitoring',
  'Innovative Career Development', 'Innovative Performance Reviews', 'Innovative Agile Methodologies',
  'Essential Agile Methodologies', 'Essential Tool Selection', 'Essential Monitoring',
  'Essential Code Quality', 'Strategic Security Practices', 'Strategic Budget Planning',
  'Strategic Technical Strategy', 'Strategic Performance Reviews', 'Strategic Stakeholder Management',
  'Critical Technical Strategy', 'Critical Code Quality', 'Critical Hiring Engineers',
  'Advanced Innovation', 'Advanced Tool Selection', 'Modern Innovation', 'Modern Deployment Pipelines',
  'Modern Code Review', 'Testing Strategies Proven', 'Testing Strategies Scalable',
  'Deployment Pipelines Effective', 'Deployment Pipelines Best', 'Deployment Pipelines Innovative',
  'Documentation Strategic', 'Documentation Innovative', 'Documentation Important',
  'Documentation Scalable', 'Communication Effective', 'Communication Best',
  'Communication Sustainable', 'Security Practices Best', 'Security Practices Innovative',
  'Security Practices Successful', 'Team Management Essential', 'Team Management Sustainable',
  'Team Management Successful', 'Team Management Critical', 'Tool Selection Essential',
  'Tool Selection Innovative', 'Tool Selection Scalable', 'Tool Selection Advanced',
  'Code Review Sustainable', 'Code Review Modern', 'Scalable Documentation',
  'Technical Debt Proven', 'Budget Planning Successful', 'Process Improvement Optimizing',
  'Remote Work Practical', 'Stakeholder Management Important', 'Stakeholder Management Innovative',
  'Career Development Strategic', 'Career Development Effective', 'Career Development Building',
  'Engineering Leadership Successful', 'Engineering Leadership Advanced', 'Engineering Leadership Implementing',
  'System Design Critical', 'Architecture Decisions Sustainable', 'DevOps Practices Advanced',
  'DevOps Practices Important', 'Hiring Engineers Critical', 'Hiring Engineers Innovative',
  'Innovation Patterns Successful', 'Innovation Approach Best', 'Product Development Critical',
]
extra.forEach((t) => {
  if (!topicTitles.includes(t)) topicTitles.push(t)
})

module.exports = { topicTitles }
