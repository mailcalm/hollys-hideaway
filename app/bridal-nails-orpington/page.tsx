import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bridalJournalPosts } from "@/lib/bridalJournal";

const bridalExperienceUrl =
  "https://www.fresha.com/book-now/hollys-hideaway-lcdzivqr/packages?id=f2a50653-1ea0-4f74-82db-7b4460289cfd&share=true&pId=3032465";

const giftCardsUrl =
  "https://www.fresha.com/book-now/hollys-hideaway-lcdzivqr/gift-cards?share=true&pId=3032465";

const pageUrl = "https://www.hollyshideaway.co.uk/bridal-nails-orpington";

export const metadata: Metadata = {
  title: {
    absolute: "Bridal Nails Orpington | Holly's Hideaway",
  },
  description:
    "Bridal and wedding nails in Chelsfield, Orpington. The Bridal Experience includes a relaxed nail trial and wedding day manicure for £115.",
  alternates: {
    canonical: "/bridal-nails-orpington",
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Bridal Nails Orpington | Holly's Hideaway",
    description:
      "A relaxed bridal nail trial followed by your wedding day manicure at Holly's private nail studio in Chelsfield, Orpington.",
    images: [
      {
        url: "/images/studio.png",
        alt: "Holly's Hideaway private nail studio in Chelsfield, Orpington",
      },
    ],
  },
};

const bridalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "The Bridal Experience",
  serviceType: "Bridal nails and wedding manicure",
  description:
    "A bridal nail trial followed by a wedding day manicure at Holly's Hideaway in Chelsfield, Orpington.",
  url: pageUrl,
  areaServed: [
    {
      "@type": "Place",
      name: "Chelsfield",
    },
    {
      "@type": "Place",
      name: "Orpington",
    },
  ],
  provider: {
    "@type": "NailSalon",
    name: "Holly's Hideaway",
    url: "https://www.hollyshideaway.co.uk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chelsfield",
      addressRegion: "Orpington",
      addressCountry: "GB",
    },
  },
  offers: {
    "@type": "Offer",
    price: "115",
    priceCurrency: "GBP",
    url: bridalExperienceUrl,
    availability: "https://schema.org/InStock",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included in the Bridal Experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Bridal Experience includes a bridal trial manicure and a wedding day manicure, with up to two hours for each appointment. You can choose gel, builder gel or nail polish, with minimal nail art included.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Holly's Hideaway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Holly's Hideaway is a private home nail studio in Chelsfield, Orpington.",
      },
    },
    {
      "@type": "Question",
      name: "How much is the Bridal Experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Bridal Experience is £115 and includes both the bridal trial manicure and wedding day manicure.",
      },
    },
  ],
};

export default function BridalNailsOrpingtonPage() {
  return (
    <main className="bg-[#F7F4EF] text-[#222]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bridalServiceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className="border-b border-black/10 bg-[#EFE7DC] px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
          <Link href="/">
            <Image
              src="/images/HollysHideaway Logo.png"
              alt="Holly's Hideaway nail studio"
              width={420}
              height={100}
              className="w-[230px] md:w-[360px]"
            />
          </Link>

          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.25em] text-[#655E57] transition hover:text-black"
          >
            Back home
          </Link>
        </div>
      </header>

      <section className="bg-[#EFE7DC] px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#8A7F72]">
            Bridal & wedding nails · Chelsfield, Orpington
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.045em] md:text-7xl">
                Bridal nails in
                <br />
                Orpington
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5C554F]">
                A relaxed bridal nail trial followed by your wedding day
                manicure, with plenty of time to work through shape, colour and
                design before the big day.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#222] p-8 text-white">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#BEB4AA]">
                The Bridal Experience
              </p>

              <p className="mt-4 text-5xl font-light">£115</p>

              <p className="mt-4 text-sm leading-7 text-[#E8E1DA]">
                Two appointments. One calm, considered plan for your wedding
                nails.
              </p>

              <a
                href={bridalExperienceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block rounded-full bg-white px-7 py-4 text-[10px] uppercase tracking-[0.23em] text-black transition hover:bg-[#EFE7DC]"
              >
                Book Bridal Experience
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7F72]">
                How it works
              </p>

              <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
                Trial first.
                <br />
                Wedding nails second.
              </h2>
            </div>

            <div className="space-y-10">
              <article className="border-t border-black/15 pt-6">
                <div className="flex gap-5">
                  <span className="text-sm text-[#B08D57]">01</span>

                  <div>
                    <h3 className="text-2xl font-light">
                      Your bridal nail trial
                    </h3>

                    <p className="mt-4 max-w-2xl leading-8 text-[#5C554F]">
                      This is where we work through nail shape, colour and
                      design together. Bring inspiration, wedding details or
                      ideas you have saved and we can use the appointment to
                      settle on a look that feels right for you.
                    </p>
                  </div>
                </div>
              </article>

              <article className="border-t border-black/15 pt-6">
                <div className="flex gap-5">
                  <span className="text-sm text-[#B08D57]">02</span>

                  <div>
                    <h3 className="text-2xl font-light">
                      Your wedding day manicure
                    </h3>

                    <p className="mt-4 max-w-2xl leading-8 text-[#5C554F]">
                      When you return for the final appointment, the decisions
                      have already been made. The result is a calm, unhurried
                      manicure without having to decide everything at the last
                      minute.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#222] px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#BEB4AA]">
                Includes:
              </p>

              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                The full Bridal Experience
              </h2>
            </div>

            <div className="grid gap-x-8 sm:grid-cols-2">
              {[
                "Bridal trial manicure",
                "Wedding day manicure",
                "Gel, builder gel or nail polish",
                "Minimal nail art",
                "Up to two hours per appointment",
                "Celebratory drink",
                "Luxury hand care",
                "Nail aftercare gift bag to take home",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-t border-white/15 py-5 text-sm leading-6 text-[#EFE8E0]"
                >
                  <span className="shrink-0 text-[#C8A56A]">✦</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EFE7DC] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7F72]">
                Bridal nails in Chelsfield
              </p>

              <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
                A private, one-to-one appointment
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#5C554F]">
              <p>
                Holly&apos;s Hideaway is a private home nail studio in
                Chelsfield, Orpington, offering calm one-to-one appointments
                away from a busy salon environment.
              </p>

              <p>
                The Bridal Experience is designed for brides who want extra
                time to plan their wedding nails properly, whether you prefer
                natural-looking builder gel, a gel manicure, nail polish or a
                simple minimal design.
              </p>

              <p>
                Clients visit from Chelsfield, Orpington and the surrounding
                local area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7F72]">
              Bridal Journal
            </p>

            <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
              Wedding nails, real brides & useful advice
            </h2>

            <p className="mt-5 leading-8 text-[#5C554F]">
              This is where Holly will share bridal nail ideas, real wedding
              manicures, trial-to-wedding-day stories and useful advice for
              planning your nails before the big day.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {bridalJournalPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-[2rem] border border-black/10 bg-[#F9F6F1] p-8"
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8A7F72]">
                  {post.category}
                </p>

                <h3 className="mt-4 text-3xl font-light leading-tight">
                  {post.title}
                </h3>

                <p className="mt-5 flex-1 leading-7 text-[#5C554F]">
                  {post.description}
                </p>

                <div className="mt-7 flex items-center justify-between gap-4 border-t border-black/10 pt-5">
                  <span className="text-xs text-[#777]">{post.readTime}</span>

                  <Link
                    href={`/bridal-journal/${post.slug}`}
                    className="text-[10px] uppercase tracking-[0.22em] underline underline-offset-4"
                  >
                    Read journal
                  </Link>
                </div>
              </article>
            ))}

            <div className="rounded-[2rem] border border-dashed border-black/20 p-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8A7F72]">
                Coming next
              </p>

              <h3 className="mt-4 text-3xl font-light">
                Real bridal nail stories
              </h3>

              <p className="mt-5 leading-7 text-[#5C554F]">
                As Holly works with brides, their manicures and photographs can
                be added here as individual journal posts, creating a growing
                gallery of real wedding nail inspiration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E5D9CD] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#786C62]">
            Ready to plan your wedding nails?
          </p>

          <h2 className="mt-4 text-4xl font-light md:text-5xl">
            Book The Bridal Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#5C554F]">
            A bridal trial and wedding day manicure for £115 at Holly&apos;s
            Hideaway in Chelsfield, Orpington.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={bridalExperienceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-8 py-4 text-[10px] uppercase tracking-[0.23em] text-white transition hover:bg-[#2F2F2F]"
            >
              Book Bridal Experience
            </a>

            <a
              href={giftCardsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/25 px-8 py-4 text-[10px] uppercase tracking-[0.23em] text-black transition hover:bg-black hover:text-white"
            >
              Buy as a Gift
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7F72]">
            Bridal nails FAQ
          </p>

          <h2 className="mt-4 text-4xl font-light">A few useful questions</h2>

          <div className="mt-8">
            {[
              [
                "What is included in the Bridal Experience?",
                "A bridal trial manicure and wedding day manicure, with up to two hours for each appointment. Choose gel, builder gel or nail polish, with minimal nail art included.",
              ],
              [
                "How much is the Bridal Experience?",
                "The complete Bridal Experience is £115 for both appointments.",
              ],
              [
                "Where is Holly's Hideaway?",
                "Holly's Hideaway is a private home nail studio in Chelsfield, Orpington.",
              ],
              [
                "Can I bring bridal nail inspiration to my trial?",
                "Absolutely. Bring saved photographs, colours and any wedding details that may help us work through your shape, colour and design together.",
              ],
              [
                "Can I buy the Bridal Experience as a gift?",
                "Yes. It can be purchased through Fresha as a gift, and a complimentary printed Holly's Hideaway voucher can be collected from the Hideaway or posted free of charge.",
              ],
            ].map(([question, answer]) => (
              <div key={question} className="border-t border-black/15 py-6">
                <h3 className="text-xl font-light">{question}</h3>
                <p className="mt-3 leading-7 text-[#5C554F]">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#F7F4EF] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs text-[#777] md:flex-row md:items-center md:justify-between">
          <p>Holly&apos;s Hideaway · Chelsfield, Orpington</p>

          <Link href="/" className="underline underline-offset-4">
            Back to Holly&apos;s Hideaway
          </Link>
        </div>
      </footer>
    </main>
  );
}
