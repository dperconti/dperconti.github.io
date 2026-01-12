import config from "@config/config.json";
import social from "@config/social.json";
import Base from "@layouts/Baseof";
import Social from "@layouts/components/Social";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import AnimatedSection from "@components/AnimatedSection";
import ParallaxSection from "@components/ParallaxSection";
import BackgroundBlobs from "@layouts/components/BackgroundBlobs";

const Home = () => {
  const { name, designation, bio } = config.profile;

  return (
    <Base
      title={`${name} - Head of Engineering | Engineering Leader`}
      meta_title={`${name} - Head of Engineering for Series A Startups | Engineering Leadership`}
      description="Head of Engineering specializing in scaling engineering teams, technical excellence, and minimalist engineering organization. Expert in mentorship, coaching, and engineering practices for Series A startups."
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
                  Head of Engineering
                </h1>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.2}>
                <p className="text-lg md:text-xl lg:text-2xl font-secondary font-normal mb-8 max-w-3xl mx-auto text-clean leading-relaxed">
                  Scaling engineering teams and technical excellence through minimalist organization, mentorship, and thoughtful leadership.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    href="/contact" 
                    className="px-6 py-3 text-base font-secondary font-medium hover:opacity-80 transition-opacity"
                  >
                    Get In Touch
                  </Link>
                  <Link 
                    href="/blog" 
                    className="px-6 py-3 text-base font-secondary font-medium opacity-80 hover:opacity-100 transition-opacity"
                  >
                    Read My Blog
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

      {/* Expertise Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <AnimatedSection direction="up" delay={0.1}>
                  <div className="text-center">
                    <h3 className="text-xl font-secondary font-semibold mb-3 text-[#5D4037] text-clean-bold">
                      Minimalist Engineering
                    </h3>
                    <p className="text-sm md:text-base font-secondary font-normal text-[#8D6E63] text-clean leading-relaxed">
                      Simple, effective organization that eliminates complexity.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.2}>
                  <div className="text-center">
                    <h3 className="text-xl font-secondary font-semibold mb-3 text-[#5D4037] text-clean-bold">
                      Mentorship & Coaching
                    </h3>
                    <p className="text-sm md:text-base font-secondary font-normal text-[#8D6E63] text-clean leading-relaxed">
                      Building high-performing teams through thoughtful leadership.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.3}>
                  <div className="text-center">
                    <h3 className="text-xl font-secondary font-semibold mb-3 text-[#5D4037] text-clean-bold">
                      Scaling & Excellence
                    </h3>
                    <p className="text-sm md:text-base font-secondary font-normal text-[#8D6E63] text-clean leading-relaxed">
                      Technical practices that enable sustainable growth.
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
                  Ready to scale your engineering team?
                </h2>
                <p className="text-base md:text-lg font-secondary font-normal text-[#8D6E63] mb-8 max-w-2xl mx-auto text-clean">
                  Let's discuss how minimalist engineering organization and thoughtful leadership can transform your team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="px-6 py-3 text-base font-secondary font-medium text-[#5D4037] hover:opacity-80 transition-opacity"
                  >
                    Get In Touch
                  </Link>
                  <Link 
                    href="/blog" 
                    className="px-6 py-3 text-base font-secondary font-medium text-[#8D6E63] hover:text-[#5D4037] transition-colors"
                  >
                    Read My Blog
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

// Simplified - no longer fetching posts for homepage
export const getStaticProps = async () => {
  return {
    props: {},
  };
};

