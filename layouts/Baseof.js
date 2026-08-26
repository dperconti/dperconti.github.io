import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Footer from "@partials/Footer";
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

  const jobTitle = designation || "Engineering Manager";

  // Person structured data (JSON-LD)
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": meta_description || bio,
    "url": fullBaseUrl,
    "sameAs": [],
    "knowsAbout": [
      "Engineering Management",
      "Platform Engineering",
      "Payments Systems",
      "AI Systems",
      "RAG Pipelines",
      "Backend Platforms",
      "Cloud Infrastructure",
      "Team Building",
      "Engineering Leadership"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": jobTitle,
      "occupationLocation": { "@type": "Place", "name": "United States" },
      "skills": [
        "Engineering Leadership",
        "Platform Engineering",
        "Payments Systems",
        "AI Systems",
        "Team Scaling",
        "Cloud Infrastructure"
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
    "publisher": { "@type": "Person", "name": name, "jobTitle": jobTitle }
  };

  return (
    <>
      <Head>
        {/* Structured Data (JSON-LD) */}
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

        <meta
          name="keywords"
          content="engineering manager, engineering leadership, platform engineering, payments systems, AI systems, Donato Perconti"
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
        <div className="relative flex flex-col min-h-screen bg-transparent">
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Base;

