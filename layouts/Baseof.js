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
  const { base_url } = config.site;
  const { name, designation, bio } = config.profile;
  const router = useRouter();

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": "Head of Engineering",
    "description": meta_description,
    "url": base_url,
    "sameAs": [
      // Add social media URLs from social.json if available
    ],
    "knowsAbout": [
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
      "occupationLocation": {
        "@type": "Place",
        "name": "United States"
      },
      "skills": [
        "Engineering Leadership",
        "Team Scaling",
        "Technical Excellence",
        "Mentorship",
        "Coaching",
        "Engineering Practices"
      ]
    }
  };

  return (
    <>
      <Head>
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* title */}
        <title>
          {plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        </title>

        {/* canonical url */}
        {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

        {/* noindex robots */}
        {noindex && <meta name="robots" content="noindex,nofollow" />}

        {/* meta-description */}
        <meta
          name="description"
          content={plainify(description ? description : meta_description)}
        />

        {/* author from config.json */}
        <meta name="author" content={meta_author} />

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
        <meta
          property="og:url"
          content={`${base_url}/${router.asPath.replace("/", "")}`}
        />

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
          content={`${base_url}${image ? image : meta_image}`}
        />

        {/* twitter-image */}
        <meta
          name="twitter:image"
          content={`${base_url}${image ? image : meta_image}`}
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

