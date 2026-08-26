import { useEffect } from "react";
import { useRouter } from "next/router";
import Base from "@layouts/Baseof";
import Link from "next/link";

export default function BlogPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/writing/");
  }, [router]);

  return (
    <Base
      title="Writing"
      meta_title="Writing — Donato Perconti"
      description="Writing and notes."
      noindex={true}
    >
      <div className="site-frame">
        <p className="site-lede">
          Moved to <Link href="/writing/">/writing</Link>.
        </p>
      </div>
    </Base>
  );
}
