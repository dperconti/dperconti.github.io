import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
import { TaxonomySlugProvider } from "context/state";
import Head from "next/head";
import { useRouter } from "next/router";
// Backgrounds removed for clean minimal design

const Base = ({
  title,
  meta_title,
  description,
  image,
  noindex,
  canonical,
  children,
}) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url, site_url } = config.site;
  const fullBaseUrl = site_url || (typeof window !== "undefined" ? window.location.origin : "https://dperconti.github.io");
  const { name, designation, bio } = config.profile;
  const router = useRouter();
  const canonicalUrl = canonical || `${fullBaseUrl}${router.asPath === "/" ? "" : router.asPath}`;

  // Person structured data (JSON-LD) for Head of Engineering SEO
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": "Head of Engineering",
    "description": meta_description,
    "url": fullBaseUrl,
    "sameAs": [],
    "knowsAbout": [
      "Head of Engineering",
      "Engineering Leadership",
      "Scaling Engineering Teams",
      "Technical Excellence",
      "Engineering Practices",
      "Mentorship",
      "Coaching",
      "Minimalist Engineering Organization",
      "Series A Startups",
      "Team Building",
      "Technical Strategy"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Head of Engineering",
      "occupationLocation": { "@type": "Place", "name": "United States" },
      "skills": [
        "Engineering Leadership",
        "Head of Engineering",
        "Team Scaling",
        "Technical Excellence",
        "Mentorship",
        "Coaching",
        "Engineering Practices"
      ]
    }
  };

  // WebSite structured data for sitelinks search
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": config.site.title,
    "url": fullBaseUrl,
    "description": meta_description,
    "publisher": { "@type": "Person", "name": name, "jobTitle": "Head of Engineering" }
  };

  return (
    <>
      <Head>
        {/* Structured Data (JSON-LD) for Head of Engineering SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        {/* title */}
        <title>
          {plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        </title>

        {/* canonical url */}
        <link rel="canonical" href={canonicalUrl} />

        {/* noindex robots */}
        {noindex ? (
          <meta name="robots" content="noindex,nofollow" />
        ) : (
          <meta name="robots" content="index, follow" />
        )}

        {/* meta-description */}
        <meta
          name="description"
          content={plainify(description ? description : meta_description)}
        />

        {/* author from config.json */}
        <meta name="author" content={meta_author} />

        {/* keywords for Head of Engineering */}
        <meta
          name="keywords"
          content="head of engineering, HoE, engineering leadership, scaling engineering teams, technical excellence, Donato Perconti, engineering leader, VP engineering, director of engineering"
        />

        {/* og-title */}
        <meta
          property="og:title"
          content={plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        />

        {/* og-description */}
        <meta
          property="og:description"
          content={plainify(description ? description : meta_description)}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />

        {/* twitter-title */}
        <meta
          name="twitter:title"
          content={plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        />

        {/* twitter-description */}
        <meta
          name="twitter:description"
          content={plainify(description ? description : meta_description)}
        />

        {/* og-image */}
        <meta
          property="og:image"
          content={`${fullBaseUrl}${image ? image : meta_image || ""}`}
        />

        {/* twitter-image */}
        <meta
          name="twitter:image"
          content={`${fullBaseUrl}${image ? image : meta_image || ""}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="relative w-full min-h-screen bg-transparent">
        {/* Content */}
        <div className="relative flex flex-col min-h-screen bg-transparent">
          <TaxonomySlugProvider>
            <Header />
          </TaxonomySlugProvider>

          {/* main site */}
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Base;

