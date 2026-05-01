import config from "@config/config.json";
import social from "@config/social.json";
import Base from "@layouts/Baseof";
import Social from "@layouts/components/Social";
import Link from "next/link";
import AnimatedSection from "@components/AnimatedSection";
import BackgroundBlobs from "@layouts/components/BackgroundBlobs";
import ProjectCard from "@layouts/components/ProjectCard";
import { getSinglePage } from "@lib/contentParser";

const Home = ({ featuredProjects = [] }) => {
  const { name, designation, bio } = config.profile;

  return (
    <Base
      title={`${name} - Engineering Manager | Product & Platform`}
      meta_title={`${name} - Engineering Manager | Portfolio`}
      description="Engineering Manager focused on shipping product, building reliable systems, and leading teams through clear execution and strong technical foundations."
    >
      {/* Ultra-subtle background blobs */}
      <BackgroundBlobs />
      
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container relative z-10">
          <div className="row">
            <div className="mx-auto lg:col-10 xl:col-9 text-center">
              <AnimatedSection direction="up" delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-secondary font-semibold mb-6 text-clean-bold overflow-visible">
                  {name}
                </h1>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.2}>
                <p className="text-lg md:text-xl lg:text-2xl font-secondary font-normal mb-8 max-w-3xl mx-auto text-clean leading-relaxed">
                  I build and lead teams that ship high-quality product with strong architecture, reliability, and fast iteration.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    href="/work" 
                    className="px-6 py-3 text-base font-secondary font-medium hover:opacity-80 transition-opacity"
                  >
                    View Work
                  </Link>
                  <Link 
                    href="/contact" 
                    className="px-6 py-3 text-base font-secondary font-medium opacity-80 hover:opacity-100 transition-opacity"
                  >
                    Get In Touch
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <AnimatedSection direction="up" delay={0.1}>
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-base md:text-lg font-secondary font-normal text-[#5D4037] text-clean leading-relaxed mb-6">
                    {bio.split('\n\n')[0]}
                  </p>
                  <div className="mt-8">
                    <Social source={social} className="profile-social-icons justify-center" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <AnimatedSection direction="up" delay={0.1}>
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-secondary font-semibold mb-4 text-[#5D4037] text-clean-bold">
                    Featured projects
                  </h2>
                  <p className="text-base md:text-lg font-secondary font-normal text-[#8D6E63] max-w-2xl mx-auto text-clean">
                    A few case studies showing how I think, what I shipped, and how I build systems that scale.
                  </p>
                </div>
              </AnimatedSection>

              <div className="row">
                {featuredProjects.map((project, i) => (
                  <ProjectCard
                    className="col-12 mb-6 md:col-4"
                    key={`featured-${i}`}
                    project={project}
                  />
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/work"
                  className="px-6 py-3 text-base font-secondary font-medium opacity-80 hover:opacity-100 transition-opacity"
                >
                  See all work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <AnimatedSection direction="up" delay={0.1}>
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-secondary font-semibold mb-4 text-[#5D4037] text-clean-bold">
                    Products and teams
                  </h2>
                  <p className="text-base md:text-lg font-secondary font-normal text-[#8D6E63] max-w-2xl mx-auto text-clean">
                    A selection of products I’ve built and companies I’ve worked with.
                  </p>
                </div>
              </AnimatedSection>

              <div className="flex flex-wrap justify-center gap-3">
                <a className="btn" href="https://withlight.ai/" target="_blank" rel="noreferrer">
                  With Light
                </a>
                <a className="btn" href="https://www.trunkmatch.com/" target="_blank" rel="noreferrer">
                  TrunkMatch
                </a>
                <a className="btn" href="https://withaevum.com/" target="_blank" rel="noreferrer">
                  Aevum
                </a>
                <a className="btn" href="https://www.meetdeb.com/" target="_blank" rel="noreferrer">
                  Deb
                </a>
                <a className="btn" href="https://www.mendbloom.com/" target="_blank" rel="noreferrer">
                  Mendbloom
                </a>
                <a className="btn" href="https://www.altum.education/" target="_blank" rel="noreferrer">
                  Altum
                </a>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3 opacity-90">
                <a className="btn" href="https://www.pangea.io/" target="_blank" rel="noreferrer">
                  Pangea
                </a>
                <a className="btn" href="https://www.stablesea.com/" target="_blank" rel="noreferrer">
                  Stable Sea
                </a>
                <a className="btn" href="https://spoonly.care/" target="_blank" rel="noreferrer">
                  Spoonly
                </a>
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/work#companies"
                  className="px-6 py-3 text-base font-secondary font-medium opacity-80 hover:opacity-100 transition-opacity"
                >
                  See companies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <AnimatedSection direction="up" delay={0.1}>
                  <div className="text-center">
                    <h3 className="text-xl font-secondary font-semibold mb-3 text-[#5D4037] text-clean-bold">
                      Execution & Delivery
                    </h3>
                    <p className="text-sm md:text-base font-secondary font-normal text-[#8D6E63] text-clean leading-relaxed">
                      Roadmaps that move, releases that land, and clarity that keeps teams aligned.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.2}>
                  <div className="text-center">
                    <h3 className="text-xl font-secondary font-semibold mb-3 text-[#5D4037] text-clean-bold">
                      Team Leadership
                    </h3>
                    <p className="text-sm md:text-base font-secondary font-normal text-[#8D6E63] text-clean leading-relaxed">
                      Hiring, coaching, and creating an environment where engineers do their best work.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.3}>
                  <div className="text-center">
                    <h3 className="text-xl font-secondary font-semibold mb-3 text-[#5D4037] text-clean-bold">
                      Architecture & Reliability
                    </h3>
                    <p className="text-sm md:text-base font-secondary font-normal text-[#8D6E63] text-clean leading-relaxed">
                      Systems designed for maintainability, observability, and dependable performance.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <AnimatedSection direction="up" delay={0.1}>
                <div className="max-w-3xl mx-auto space-y-6">
                  <p className="text-base md:text-lg font-secondary font-normal text-[#5D4037] text-clean leading-relaxed">
                    I believe in <strong className="font-semibold text-[#5D4037]">minimalist engineering organization</strong>—systems that are simple, effective, and purpose-driven. Complexity is the enemy of scale.
                  </p>
                  <p className="text-base md:text-lg font-secondary font-normal text-[#5D4037] text-clean leading-relaxed">
                    <strong className="font-semibold text-[#5D4037]">Mentorship and coaching</strong> are fundamental to building teams that operate independently. I invest deeply in developing people, not just managing them.
                  </p>
                  <p className="text-base md:text-lg font-secondary font-normal text-[#5D4037] text-clean leading-relaxed">
                    <strong className="font-semibold text-[#5D4037]">Technical excellence</strong> comes from consistent practices. I focus on building systems that enable teams to deliver quality work sustainably.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-8 text-center">
              <AnimatedSection direction="up" delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-secondary font-semibold mb-4 text-[#5D4037] text-clean-bold">
                  Want to chat?
                </h2>
                <p className="text-base md:text-lg font-secondary font-normal text-[#8D6E63] mb-8 max-w-2xl mx-auto text-clean">
                  I’m actively interviewing. If you’re hiring an Engineering Manager, I’d love to connect.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="px-6 py-3 text-base font-secondary font-medium text-[#5D4037] hover:opacity-80 transition-opacity"
                  >
                    Get In Touch
                  </Link>
                  <Link 
                    href="/work" 
                    className="px-6 py-3 text-base font-secondary font-medium text-[#8D6E63] hover:text-[#5D4037] transition-colors"
                  >
                    View Work
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;

export const getStaticProps = async () => {
  const projects = getSinglePage("content/projects");
  const featuredProjects = projects.filter((p) => p.frontmatter?.featured);
  return {
    props: {
      featuredProjects: featuredProjects.slice(0, 6),
    },
  };
};

