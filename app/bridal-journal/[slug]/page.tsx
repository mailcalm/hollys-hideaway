import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  bridalJournalPosts,
  getBridalJournalPost,
} from "@/lib/bridalJournal";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return bridalJournalPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBridalJournalPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: {
      absolute: `${post.title} | Holly's Hideaway`,
    },
    description: post.description,
    alternates: {
      canonical: `/bridal-journal/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `https://www.hollyshideaway.co.uk/bridal-journal/${post.slug}`,
    },
  };
}

export default async function BridalJournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBridalJournalPost(slug);

  if (!post) {
    notFound();
  }

  const articleUrl = `https://www.hollyshideaway.co.uk/bridal-journal/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.published,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Person",
      name: "Holly",
    },
    publisher: {
      "@type": "Organization",
      name: "Holly's Hideaway",
      url: "https://www.hollyshideaway.co.uk",
    },
  };

  return (
    <main className="min-h-screen bg-[#F7F4EF] text-[#222]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className="border-b border-black/10 bg-[#EFE7DC] px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
          <Link href="/">
            <Image
              src="/images/HollysHideaway Logo.png"
              alt="Holly's Hideaway nail studio"
              width={420}
              height={100}
              className="w-[220px] md:w-[340px]"
            />
          </Link>

          <Link
            href="/bridal-nails-orpington"
            className="text-[10px] uppercase tracking-[0.22em]"
          >
            Bridal nails
          </Link>
        </div>
      </header>

      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7F72]">
            {post.category} · {post.readTime}
          </p>

          <h1 className="mt-6 text-5xl font-light leading-[1.02] tracking-[-0.04em] md:text-6xl">
            {post.title}
          </h1>

          <p className="mt-8 text-xl leading-9 text-[#5C554F]">{post.intro}</p>

          {post.images.length > 0 && (
            <div className="mt-10 space-y-6">
              {post.images.map((image) => (
                <figure key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={900}
                    className="h-auto w-full rounded-[2rem] object-cover"
                  />

                  {image.caption && (
                    <figcaption className="mt-3 text-sm text-[#777]">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          <div className="mt-12 space-y-12">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-light">{section.heading}</h2>

                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-[#5C554F]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] bg-[#EFE7DC] p-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#8A7F72]">
              Planning your wedding nails?
            </p>

            <h2 className="mt-4 text-3xl font-light">
              The Bridal Experience
            </h2>

            <p className="mt-4 leading-7 text-[#5C554F]">
              Discover Holly&apos;s bridal nail trial and wedding day manicure
              at her private nail studio in Chelsfield, Orpington.
            </p>

            <Link
              href="/bridal-nails-orpington"
              className="mt-6 inline-block rounded-full bg-black px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-white"
            >
              View Bridal Experience
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
