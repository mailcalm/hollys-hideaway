import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const bookingUrl =
  "https://www.fresha.com/book-now/hollys-hideaway-lcdzivqr/all-offer?share=true&pId=3032465";

const celebrationExperienceUrl =
  "https://www.fresha.com/book-now/hollys-hideaway-lcdzivqr/services?lid=3134216&eid=5463215&oiid=sv%3A28764017&share=true&pId=3032465";

const newMumExperienceUrl =
  "https://www.fresha.com/book-now/hollys-hideaway-lcdzivqr/services?lid=3134216&eid=5463215&oiid=sv%3A28764035&share=true&pId=3032465";

const bridalExperienceUrl =
  "https://www.fresha.com/book-now/hollys-hideaway-lcdzivqr/packages?id=f2a50653-1ea0-4f74-82db-7b4460289cfd&share=true&pId=3032465";

const giftCardsUrl =
  "https://www.fresha.com/book-now/hollys-hideaway-lcdzivqr/gift-cards?share=true&pId=3032465";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: "Holly's Hideaway",
  url: "https://www.hollyshideaway.co.uk",
  description:
    "Calm one-to-one builder gel, gel and nail polish manicures from a private home nail studio in Chelsfield, Orpington.",
  image: "https://www.hollyshideaway.co.uk/images/studio.png",
  logo: "https://www.hollyshideaway.co.uk/images/HollysHideaway%20Logo.png",
  email: "hollyshideawaynails@gmail.com",
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chelsfield",
    addressRegion: "Orpington",
    addressCountry: "GB",
  },
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
  sameAs: ["https://www.instagram.com/hollys_hideaway_/"],
  potentialAction: {
    "@type": "ReserveAction",
    target: bookingUrl,
    name: "Book a nail appointment",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Manicure services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Builder Gel Manicure",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Builder Gel Infill Manicure",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gel Manicure",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nail Polish Manicure",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="bg-[#F7F4EF] text-[#222]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* TOP BANNER */}
      <div className="sticky top-0 z-50 border-b border-black/10 bg-[#EFE7DC]">
        <div className="mx-auto flex items-center justify-center gap-3 px-4 py-3 text-center">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#B08D57]" />

          <p className="text-[9px] uppercase tracking-[0.22em] text-black md:text-xs md:tracking-[0.3em]">
            15% OFF APPOINTMENTS FOR NEW CLIENTS
          </p>
        </div>
      </div>

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <img
          src="/images/studio.png"
          alt="Private nail studio at Holly's Hideaway in Chelsfield"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/10 md:bg-black/10" />

        {/* extra mobile readability overlay only */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4EF]/70 via-transparent to-black/45 md:hidden" />

        <header className="absolute top-0 z-20 w-full px-5 py-5 md:px-12 md:py-8">
          <div className="flex items-center justify-between gap-4 md:items-start">
            <Link href="/">
              <Image
                src="/images/HollysHideaway Logo.png"
                alt="Holly's Hideaway nail studio"
                width={420}
                height={100}
                className="mx-auto w-[300px] md:mx-0 md:w-[680px]"
              />
            </Link>

            <nav className="hidden items-center gap-10 text-xs tracking-[0.3em] text-black md:flex">
              <a href="#services">SERVICES</a>
              <a href="#experiences">EXPERIENCES</a>
              <a href="#gallery">GALLERY</a>
              <a href="#about">ABOUT ME</a>
              <a href="#contact">CONTACT</a>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-black px-6 py-4 text-white transition hover:bg-[#2F2F2F]"
              >
                BOOK NOW
              </a>
            </nav>

            <div className="w-[72px] md:hidden" />
          </div>
        </header>

        <div className="relative z-10 flex h-full items-start px-6 pt-[22vh] md:items-center md:px-12 md:pt-0">
          <div className="max-w-xl rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-[1px] md:bg-transparent md:p-0 md:backdrop-blur-0">
            <p className="mb-6 text-[13px] leading-8 tracking-[0.24em] text-black md:mb-8 md:text-lg md:leading-10 md:tracking-[0.35em]">
              CALM ONE-TO-ONE
              <br />
              BUILDER GEL, GEL &
              <br />
              NAIL POLISH MANICURES
              <br />
              IN MY PRIVATE HOME STUDIO
              <br />
              BASED IN CHELSFIELD, ORPINGTON.
            </p>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-black px-7 py-4 text-[10px] tracking-[0.25em] text-white transition hover:bg-[#2F2F2F] md:px-10 md:py-5 md:text-xs md:tracking-[0.35em]"
            >
              BOOK APPOINTMENT
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <FadeIn>
        <section id="services" className="bg-[#F7F4EF] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <h1 className="text-2xl font-light leading-tight md:text-3xl">
                Nail appointments in Chelsfield, Orpington
              </h1>

              <p className="mt-4 text-base leading-7 text-[#555]">
                Enjoy calm, one-to-one builder gel, gel and nail polish
                manicures from my private home studio.
              </p>
            </div>

            <p className="mb-10 text-sm uppercase tracking-[0.3em] text-[#8A7F72]">
              Services
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Builder Gel Manicure",
                  price: "£33",
                  time: "1 hour 30 mins",
                  text: "A gentle manicure with cuticle work and nail shaping. Builder gel from The Gel Bottle, Glossify or Westmoreland Cosmetics is then applied for strength. Completed with luxury hand cream, massage and nourishing oil, using products from Navy Professional.",
                  extras: [
                    "Gel Colour Overlay + £5",
                    "French Tip + £5",
                    "Minimal Nail Art + £5",
                  ],
                },
                {
                  title: "Builder Gel Infill Manicure",
                  price: "£35",
                  time: "1 hour 30 mins",
                  text: "A maintenance treatment designed to restore strength, balance and structure as your natural nails grow. Existing builder gel is gently refined, the shape is rebalanced, and the apex is carefully rebuilt to support the nail’s natural stress points. Length can be adjusted if needed. Fresh builder gel from The Gel Bottle, Glossify or Westmoreland Cosmetics is applied to reinforce and perfect the structure. Completed with luxury hand cream, massage and nourishing oil, using products from Navy Professional.",
                  extras: [
                    "Gel Colour Overlay + £5",
                    "French Tip + £5",
                    "Minimal Nail Art + £5",
                  ],
                },
                {
                  title: "Gel Manicure",
                  price: "£30",
                  time: "1 hour 15 mins",
                  text: "A gentle manicure with cuticle work & nail shaping. Gel polish from The Gel Bottle, Glossify or Westmoreland Cosmetics is carefully applied for strength. Completed with luxury hand cream, massage and nourishing oil, using products from Navy Professional.",
                  extras: [
                    "REMOVAL + £8",
                    "FRENCH TIP + £5",
                    "MINIMAL NAIL ART + £5",
                  ],
                },
                {
                  title: "Nail Polish Manicure",
                  price: "£26",
                  time: "1 hour",
                  text: "A gentle manicure with cuticle work and nail shaping. Using Peacci polish by The Gel Bottle, a 2-in-1 base coat and nail polish are carefully applied, followed by a top coat for a long lasting, high-shine, gel like finish. Completed with luxury hand cream, massage and nourishing oil, using products from Navy Professional.",
                  extras: [],
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="grid gap-6 border-t border-black/10 py-8 md:grid-cols-[1fr_2fr_auto]"
                >
                  <h3 className="text-2xl font-light">{service.title}</h3>

                  <div className="flex flex-col">
                    <p className="max-w-3xl leading-8 text-[#555]">
                      {service.text}
                    </p>

                    <div className="mt-6 block md:hidden">
                      <p className="text-xl">{service.price}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#777]">
                        {service.time}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {service.extras.map((extra) => (
                        <span
                          key={extra}
                          className="rounded-full border border-black/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#666]"
                        >
                          WITH {extra}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden text-left md:block md:text-right">
                    <p className="text-xl">{service.price}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#777]">
                      {service.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* HIDEAWAY EXPERIENCES */}
      <FadeIn>
        <section
          id="experiences"
          className="relative overflow-hidden bg-[#F6F0E9] px-6 py-24 md:py-32"
        >
          <div className="relative mx-auto max-w-6xl">

            {/* INTRO */}
            <div className="grid gap-10 md:grid-cols-[0.65fr_1.35fr] md:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.42em] text-[#9A816A]">
                  The Hideaway Experiences
                </p>

                <div className="mt-5 h-px w-20 bg-[#A68E75]/45" />
              </div>

              <div>
                <h2 className="text-5xl font-light leading-[0.98] tracking-[-0.04em] text-[#292623] md:text-7xl lg:text-[88px]">
                  More than
                  <br />
                  beautiful nails.
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6A6159]">
                  Thoughtful, unhurried manicure experiences with all the
                  little extras already included. Created for celebrations,
                  gifts and those moments when you just need something that
                  feels a bit special.
                </p>
              </div>
            </div>

            {/* BRIDAL */}
            <article className="relative mt-20 overflow-hidden border-y border-[#2A2724]/15 py-14 md:py-20">
              <div className="pointer-events-none absolute -right-4 -top-16 select-none text-[150px] font-light leading-none tracking-[-0.08em] text-[#D9CAB9]/55 md:text-[260px]">
                I DO
              </div>

              <div className="relative grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.36em] text-[#9D836B]">
                    01 · Bridal
                  </p>

                  <p className="mt-6 text-4xl font-light tracking-[-0.03em] text-[#292623] md:text-5xl">
                    £115
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[#89796B]">
                    Two full appointments
                  </p>
                </div>

                <div>
                  <h3 className="max-w-3xl text-5xl font-light leading-[1.02] tracking-[-0.04em] text-[#292623] md:text-7xl">
                    The Bridal
                    <br />
                    Experience
                  </h3>

                  <p className="mt-8 max-w-2xl text-lg leading-9 text-[#625A52]">
                    Your wedding nails, properly considered. Begin with a full
                    bridal trial where there&apos;s time to explore shape,
                    colour and design, then return for your final wedding-day
                    manicure knowing everything is already taken care of.
                  </p>

                  <div className="mt-10 grid gap-x-10 gap-y-5 border-t border-[#292623]/10 pt-8 sm:grid-cols-2">
                    {[
                      "Full bridal trial manicure",
                      "Final wedding-day manicure",
                      "Up to two hours each",
                      "French tip or minimal nail art included",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 border-b border-[#292623]/8 pb-5"
                      >
                        <span className="pt-1 text-[9px] tracking-[0.2em] text-[#A08A73]">
                          0{index + 1}
                        </span>

                        <p className="text-sm leading-6 text-[#4F4842]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <a
                      href={bridalExperienceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#292623] px-8 py-4 text-[10px] uppercase tracking-[0.27em] text-white transition hover:bg-[#49413B]"
                    >
                      Book Bridal Experience
                    </a>

                    <a
                      href={giftCardsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#292623]/25 px-8 py-4 text-[10px] uppercase tracking-[0.27em] text-[#292623] transition hover:bg-[#292623] hover:text-white"
                    >
                      Buy as a Gift
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* NEW MUM */}
            <article className="relative mt-20 overflow-hidden bg-[#DDD0C3] px-8 py-12 md:px-14 md:py-16">
              <div className="pointer-events-none absolute -bottom-12 -right-6 select-none text-[140px] font-light leading-none tracking-[-0.08em] text-white/25 md:text-[220px]">
                YOU
              </div>

              <div className="relative grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.36em] text-[#806C5A]">
                    02 · A little time for you
                  </p>

                  <h3 className="mt-6 max-w-xl text-5xl font-light leading-[1.02] tracking-[-0.04em] text-[#292623] md:text-6xl">
                    The New Mum
                    <br />
                    Experience
                  </h3>

                  <p className="mt-7 max-w-xl text-lg leading-8 text-[#5B534C]">
                    A calm, unhurried escape created especially for new mums.
                    A couple of hours where nothing is needed from you except
                    to sit back, switch off and enjoy being looked after.
                  </p>
                </div>

                <div className="md:text-right">
                  <p className="text-4xl font-light text-[#292623]">£65</p>

                  <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#756657]">
                    Up to two hours · all inclusive
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3 md:justify-end">
                    <a
                      href={newMumExperienceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#292623] px-7 py-4 text-[10px] uppercase tracking-[0.24em] text-white transition hover:bg-[#49413B]"
                    >
                      Book Experience
                    </a>

                    <a
                      href={giftCardsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#292623]/25 px-7 py-4 text-[10px] uppercase tracking-[0.24em] text-[#292623]"
                    >
                      Buy as a Gift
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* CELEBRATION */}
            <article className="relative mt-8 overflow-hidden bg-[#292623] px-8 py-12 text-[#F8F3ED] md:px-14 md:py-16">
              <div className="pointer-events-none absolute -right-5 -top-12 select-none text-[120px] font-light leading-none tracking-[-0.08em] text-white/[0.06] md:text-[210px]">
                YES
              </div>

              <div className="relative grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-end">
                <div>
                  <p className="text-4xl font-light">£65</p>

                  <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#BBA997]">
                    Up to two hours · all inclusive
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.36em] text-[#C7B29D]">
                    03 · For all the good things
                  </p>

                  <h3 className="mt-6 text-5xl font-light leading-[1.02] tracking-[-0.04em] md:text-6xl">
                    The Celebration
                    <br />
                    Experience
                  </h3>

                  <p className="mt-7 max-w-2xl text-lg leading-8 text-[#D4CBC2]">
                    Birthdays. Milestones. New chapters. Achievements.
                    Thank-yous. Or absolutely no reason at all. A beautifully
                    indulgent manicure with time to enjoy it properly.
                  </p>

                  <div className="mt-9 flex flex-wrap gap-3">
                    <a
                      href={celebrationExperienceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#F8F3ED] px-7 py-4 text-[10px] uppercase tracking-[0.24em] text-[#292623] transition hover:bg-white"
                    >
                      Book Experience
                    </a>

                    <a
                      href={giftCardsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/25 px-7 py-4 text-[10px] uppercase tracking-[0.24em] text-white"
                    >
                      Buy as a Gift
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* INCLUDED */}
            <div className="mt-24 grid gap-12 md:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.38em] text-[#9A816A]">
                  Included in every experience
                </p>

                <h3 className="mt-6 text-4xl font-light leading-tight tracking-[-0.03em] text-[#292623] md:text-5xl">
                  No add-ons.
                  <br />
                  No rushing.
                  <br />
                  Just enjoy it.
                </h3>
              </div>

              <div className="divide-y divide-[#292623]/10 border-y border-[#292623]/10">
                {[
                  [
                    "01",
                    "The manicure",
                    "Your choice of nail polish, gel or builder gel.",
                  ],
                  [
                    "02",
                    "The design",
                    "French tip or minimal nail art is already included.",
                  ],
                  [
                    "03",
                    "The time",
                    "Up to two unhurried hours for each appointment.",
                  ],
                  [
                    "04",
                    "The drink",
                    "A celebratory drink while you relax.",
                  ],
                  [
                    "05",
                    "The finishing touches",
                    "Chanel hand cream and cuticle oil used during your treatment.",
                  ],
                  [
                    "06",
                    "The gift bag",
                    "Hand mask, cuticle oil and a mini dried-flower bouquet to take home.",
                  ],
                ].map(([number, title, copy]) => (
                  <div
                    key={title}
                    className="grid gap-3 py-6 sm:grid-cols-[55px_180px_1fr] sm:items-start"
                  >
                    <p className="text-[9px] tracking-[0.22em] text-[#A08B76]">
                      {number}
                    </p>

                    <p className="text-xs uppercase tracking-[0.22em] text-[#71665C]">
                      {title}
                    </p>

                    <p className="leading-7 text-[#514A44]">{copy}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 20% CARD */}
            <div className="mt-20 grid overflow-hidden border border-[#292623]/10 bg-[#FFFDF9] md:grid-cols-[0.32fr_1fr]">
              <div className="flex items-center justify-center bg-[#C5A98B] px-6 py-10">
                <p className="text-6xl font-light tracking-[-0.05em] text-[#FFFDF9] md:text-7xl">
                  20%
                </p>
              </div>

              <div className="p-8 md:p-10">
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#947C65]">
                  One more little thing
                </p>

                <p className="mt-5 max-w-3xl text-2xl font-light leading-10 text-[#292623] md:text-3xl">
                  Every Experience includes 20% off a future standard manicure.
                  Keep it for yourself or pass it on to someone else.
                </p>

                <p className="mt-4 text-sm text-[#796E64]">
                  Valid for 3 months. Excludes Hideaway Experiences.
                </p>
              </div>
            </div>

            {/* GIFTING */}
            <div className="mt-20 border-t border-[#292623]/15 pt-16">
              <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#9A816A]">
                    Gift a Hideaway Experience
                  </p>

                  <h3 className="mt-6 max-w-3xl text-5xl font-light leading-[1.02] tracking-[-0.04em] text-[#292623] md:text-7xl">
                    Something lovely
                    <br />
                    to look forward to.
                  </h3>
                </div>

                <div>
                  <p className="text-base leading-8 text-[#655D55]">
                    Choose a Hideaway Experience or any gift-card value through
                    Fresha. A complimentary printed Holly&apos;s Hideaway
                    voucher can be collected or posted free of charge.
                  </p>

                  <p className="mt-4 text-sm text-[#83766B]">
                    Gift cards are valid for 12 months from purchase.
                  </p>

                  <a
                    href={giftCardsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-block rounded-full bg-[#292623] px-8 py-4 text-[10px] uppercase tracking-[0.27em] text-white transition hover:bg-[#49413B]"
                  >
                    Buy a Gift Card
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-12 text-center text-xs leading-6 text-[#8A7E73]">
              Hideaway Experiences are excluded from the 15% new-client offer.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* GALLERY */}
      <FadeIn>
        <section id="gallery" className="bg-[#F7F4EF] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-10 text-sm uppercase tracking-[0.3em] text-[#8A7F72]">
              Gallery
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                { src: "/images/studio.png", alt: "Private nail studio at Holly's Hideaway in Chelsfield" },
                { src: "/images/nails.png", alt: "Gel manicure completed at Holly's Hideaway" },
                { src: "/images/Products1.png", alt: "Professional manicure products used at Holly's Hideaway" },
                { src: "/images/Products2.png", alt: "Builder gel products used for manicure appointments" },
                { src: "/images/Tools.png", alt: "Professional manicure tools prepared for an appointment" },
                { src: "/images/shed.png", alt: "Exterior of Holly's Hideaway private nail studio" },
              ].map((image) => (
                <div
                  key={image.src}
                  className="aspect-[4/5] overflow-hidden rounded-[2rem]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ABOUT ME */}
      <FadeIn>
        <section id="about" className="bg-[#EFE7DC] px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/images/Holly.png"
                alt="Holly, nail technician at Holly's Hideaway"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#8A7F72]">
                About Me
              </p>

              <h2 className="mb-8 text-4xl font-light leading-tight md:text-5xl">
                Hi, I’m Holly.
              </h2>

              <div className="space-y-6 text-lg leading-8 text-[#555]">
                <p>
                  I’m a mum of two little girls, and after qualifying as a nail technician in 2025, I’ve been practicing and refining my skills while investing in further education to provide the highest standard of manicure treatments possible.
                </p>

                <p>
                  My aim is to offer more than just beautiful nails. Every appointment is designed to feel relaxed, luxurious and personal. A peaceful escape from busy everyday life where you can feel comfortable, cared for and completely at ease.
                </p>

                <p>
                  I’m passionate about natural nail health, attention to detail and creating a welcoming experience for every client who walks through the door. I want you to leave feeling refreshed, confident and looked after.
                </p>

                <p>
                  I look forward to welcoming you to the Hideaway!
                </p>
              </div>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-black px-8 py-4 text-xs tracking-[0.3em] text-white transition hover:bg-[#2F2F2F]"
              >
                BOOK APPOINTMENT
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CONTACT */}
      <FadeIn>
        <section id="contact" className="bg-[#F7F4EF] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#8A7F72]">
              Contact
            </p>

            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-8 text-4xl font-light leading-tight md:text-5xl">
                  Questions, bookings or appointment enquiries.
                </h2>

                <p className="max-w-xl text-lg leading-8 text-[#555]">
                  Holly’s Hideaway is a private home studio based in Chelsfield,
                  Orpington. If you have any questions before booking, please get in touch.
                </p>
              </div>

              <div className="space-y-8 text-lg leading-8 text-[#555]">
                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#8A7F72]">
                    Location
                  </p>
                  <p>Chelsfield, Orpington</p>
                </div>

                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#8A7F72]">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/hollys_hideaway_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:opacity-60"
                  >
                    @hollys_hideaway_
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#8A7F72]">
                    Email
                  </p>
                  <a
                    href="mailto:hollyshideawaynails@gmail.com"
                    className="transition hover:opacity-60"
                  >
                    hollyshideawaynails@gmail.com
                  </a>
                </div>

                <a
                  href="mailto:hollyshideawaynails@gmail.com"
                  className="inline-block rounded-full border border-black px-8 py-4 text-xs tracking-[0.3em] text-black transition hover:bg-black hover:text-white"
                >
                  SEND AN ENQUIRY
                </a>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
