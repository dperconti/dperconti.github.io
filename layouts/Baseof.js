import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Atmosphere from "@layouts/components/Atmosphere";
import SiteNav from "@layouts/components/SiteNav";
import Footer from "@partials/Footer";
import Head from "next/head";
import { useRouter } from "next/router";

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
  const { site_url } = config.site;
  const fullBaseUrl =
    site_url ||
    (typeof window !== "undefined"
      ? window.location.origin
      : "https://www.dperconti.com");
  const { name, designation, bio } = config.profile;
  const router = useRouter();
  const canonicalUrl =
    canonical ||
    `${fullBaseUrl}${router.asPath === "/" ? "" : router.asPath}`;

  const jobTitle = designation || "Engineering Leadership";

  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description: meta_description || bio,
    url: fullBaseUrl,
    sameAs: [
      "https://www.linkedin.com/in/dperconti/",
      "https://github.com/dperconti",
    ],
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.site.title,
    url: fullBaseUrl,
    description: meta_description,
    publisher: { "@type": "Person", name, jobTitle },
  };

  return (
    <>
      <Head>
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
        <title>
          {plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        </title>
        <link rel="canonical" href={canonicalUrl} />
        {noindex ? (
          <meta name="robots" content="noindex,nofollow" />
        ) : (
          <meta name="robots" content="index, follow" />
        )}
        <meta
          name="description"
          content={plainify(description ? description : meta_description)}
        />
        <meta name="author" content={meta_author} />
        <meta
          name="keywords"
          content="engineering leadership, platform engineering, payments systems, AI systems, Donato Perconti"
        />
        <meta
          property="og:title"
          content={plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        />
        <meta
          property="og:description"
          content={plainify(description ? description : meta_description)}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta
          name="twitter:title"
          content={plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        />
        <meta
          name="twitter:description"
          content={plainify(description ? description : meta_description)}
        />
        <meta
          property="og:image"
          content={`${fullBaseUrl}${image ? image : meta_image || ""}`}
        />
        <meta
          name="twitter:image"
          content={`${fullBaseUrl}${image ? image : meta_image || ""}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="site-shell">
        <Atmosphere />
        <SiteNav />
        <main className="site-main">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Base;
