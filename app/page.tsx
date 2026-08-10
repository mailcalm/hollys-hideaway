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
          className="bg-[#F4EEE7] px-6 py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl">

            {/* INTRO */}
            <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr] md:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.42em] text-[#C45A32]">
                  The Hideaway Experiences
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#C45A32]" />
                  <span className="h-px w-16 bg-[#292623]/25" />
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-light leading-[1.03] tracking-[-0.04em] text-[#292623] md:text-6xl">
                  Not your usual
                  <br />
                  nail appointment.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#665E56]">
                  More time. More little luxuries. Everything included.
                  Three special ways to disappear into the Hideaway for a while.
                </p>
              </div>
            </div>

            {/* STATEMENT STRIP */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 bg-[#C45A32] px-6 py-4 text-[#FFF9F3] md:px-8">
              <p className="text-[10px] uppercase tracking-[0.32em]">
                One-to-one
              </p>
              <span className="hidden text-white/50 sm:inline">✦</span>
              <p className="text-[10px] uppercase tracking-[0.32em]">
                Up to two hours
              </p>
              <span className="hidden text-white/50 sm:inline">✦</span>
              <p className="text-[10px] uppercase tracking-[0.32em]">
                No add-ons
              </p>
              <span className="hidden text-white/50 sm:inline">✦</span>
              <p className="text-[10px] uppercase tracking-[0.32em]">
                A little escape
              </p>
            </div>

            {/* EXPERIENCE 01 - BRIDAL */}
            <article className="relative mt-5 overflow-hidden bg-[#292623] text-[#F8F3ED]">
              <div className="absolute -right-5 -top-16 select-none text-[180px] font-light leading-none tracking-[-0.08em] text-white/[0.035] md:text-[250px]">
                01
              </div>

              <div className="relative grid gap-8 p-8 md:grid-cols-[0.62fr_1.38fr] md:p-10">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#E18766]">
                      Experience 01
                    </p>

                    <p className="mt-5 text-4xl font-light">£115</p>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-[#B9ADA3]">
                      Two appointments
                    </p>
                  </div>

                  <p className="mt-8 hidden text-[9px] uppercase tracking-[0.3em] text-[#8F8379] md:block">
                    Bridal trial / Wedding day
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.34em] text-[#E18766]">
                    The headline act
                  </p>

                  <h3 className="mt-3 text-4xl font-light leading-tight tracking-[-0.03em] md:text-5xl">
                    The Bridal Experience
                  </h3>

                  <p className="mt-5 max-w-2xl leading-7 text-[#D6CDC5]">
                    A full bridal trial followed by your final wedding-day
                    manicure. Time to work through shape, colour and design
                    properly, so the final appointment feels beautifully easy.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-y border-white/10 py-5 text-[10px] uppercase tracking-[0.18em] text-[#C8BBB0]">
                    <span>Full trial</span>
                    <span>Wedding-day manicure</span>
                    <span>Up to 2 hours each</span>
                    <span>Design included</span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={bridalExperienceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#C45A32] px-6 py-3.5 text-[9px] uppercase tracking-[0.25em] text-white transition hover:bg-[#A94A28]"
                    >
                      Book Bridal Experience
                    </a>

                    <a
                      href={giftCardsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/25 px-6 py-3.5 text-[9px] uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-[#292623]"
                    >
                      Buy as a Gift
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* EXPERIENCE 02 */}
            <article className="relative mt-3 overflow-hidden border border-[#292623]/15 bg-[#FFFDF9]">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[#C45A32]" />

              <div className="grid gap-7 p-8 pl-9 md:grid-cols-[0.62fr_1.38fr] md:p-9 md:pl-10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#C45A32]">
                    Experience 02
                  </p>

                  <div className="mt-4 flex items-end gap-4">
                    <p className="text-3xl font-light text-[#292623]">£65</p>
                    <p className="pb-1 text-[9px] uppercase tracking-[0.23em] text-[#958679]">
                      Up to 2 hours
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.3em] text-[#927B68]">
                        For a new mum
                      </p>

                      <h3 className="mt-2 text-3xl font-light tracking-[-0.025em] text-[#292623] md:text-4xl">
                        The New Mum Experience
                      </h3>
                    </div>

                    <span className="text-5xl font-light leading-none text-[#C45A32]/15">
                      02
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl leading-7 text-[#625A53]">
                    Two hours where nobody needs anything from you. Sit down,
                    switch off and enjoy being looked after for a change.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={newMumExperienceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#292623] px-6 py-3.5 text-[9px] uppercase tracking-[0.24em] text-white"
                    >
                      Book Experience
                    </a>

                    <a
                      href={giftCardsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#292623]/20 px-6 py-3.5 text-[9px] uppercase tracking-[0.24em] text-[#292623]"
                    >
                      Buy as a Gift
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* EXPERIENCE 03 */}
            <article className="relative mt-3 overflow-hidden border border-[#292623]/15 bg-[#E8DED3]">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[#292623]" />

              <div className="grid gap-7 p-8 pl-9 md:grid-cols-[0.62fr_1.38fr] md:p-9 md:pl-10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#8A7562]">
                    Experience 03
                  </p>

                  <div className="mt-4 flex items-end gap-4">
                    <p className="text-3xl font-light text-[#292623]">£65</p>
                    <p className="pb-1 text-[9px] uppercase tracking-[0.23em] text-[#8B7B6D]">
                      Up to 2 hours
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.3em] text-[#8B7664]">
                        For all the good things
                      </p>

                      <h3 className="mt-2 text-3xl font-light tracking-[-0.025em] text-[#292623] md:text-4xl">
                        The Celebration Experience
                      </h3>
                    </div>

                    <span className="text-5xl font-light leading-none text-white/50">
                      03
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl leading-7 text-[#5D554E]">
                    Birthdays, milestones, achievements, new chapters,
                    thank-yous — or simply because. Beautiful nails and a
                    couple of hours to enjoy yourself properly.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={celebrationExperienceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#292623] px-6 py-3.5 text-[9px] uppercase tracking-[0.24em] text-white"
                    >
                      Book Experience
                    </a>

                    <a
                      href={giftCardsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#292623]/20 px-6 py-3.5 text-[9px] uppercase tracking-[0.24em] text-[#292623]"
                    >
                      Buy as a Gift
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* WHAT'S INCLUDED */}
            <div className="mt-10 grid gap-8 border-y border-[#292623]/15 py-9 md:grid-cols-[0.55fr_1.45fr]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.36em] text-[#C45A32]">
                  The full set
                </p>

                <h3 className="mt-3 text-3xl font-light leading-tight text-[#292623]">
                  All in.
                  <br />
                  Every time.
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-6 text-[#71675E]">
                  Nothing awkward to add on when you arrive.
                </p>
              </div>

              <div className="grid gap-x-7 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ["01", "Nail polish, gel or builder gel"],
                  ["02", "French tip or minimal nail art"],
                  ["03", "Up to two unhurried hours"],
                  ["04", "A celebratory drink"],
                  ["05", "Chanel hand & cuticle finishing touches"],
                  ["06", "Gift bag with hand mask, oil & dried flowers"],
                ].map(([number, item]) => (
                  <div
                    key={item}
                    className="border-t border-[#292623]/10 pt-3"
                  >
                    <p className="text-[8px] tracking-[0.2em] text-[#C45A32]">
                      {number}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#514A44]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FINAL STRIP */}
            <div className="mt-5 grid md:grid-cols-[0.8fr_1.2fr]">
              <div className="bg-[#292623] p-7 text-[#F8F3ED] md:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.32em] text-[#E18766]">
                      Encore
                    </p>

                    <p className="mt-3 text-4xl font-light">20% off</p>
                  </div>

                  <span className="text-4xl text-[#C45A32]">✦</span>
                </div>

                <p className="mt-4 max-w-sm text-sm leading-6 text-[#CCC2BA]">
                  Off a future standard manicure. Keep it or give it to
                  someone else.
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#8F8379]">
                  Valid 3 months · Experiences excluded
                </p>
              </div>

              <div className="border border-l-0 border-[#292623]/15 bg-[#FFFDF9] p-7 md:p-8">
                <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.32em] text-[#C45A32]">
                      Gift a Hideaway Experience
                    </p>

                    <h3 className="mt-3 text-2xl font-light leading-tight text-[#292623]">
                      Give them something
                      <br />
                      lovely to look forward to.
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#655D55]">
                      Buy an Experience or choose any gift-card value through
                      Fresha. Printed vouchers can be collected or posted free
                      of charge.
                    </p>
                  </div>

                  <div>
                    <a
                      href={giftCardsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full bg-[#C45A32] px-6 py-3.5 text-[9px] uppercase tracking-[0.24em] text-white transition hover:bg-[#A94A28]"
                    >
                      Buy a Gift Card
                    </a>

                    <p className="mt-3 text-center text-[8px] uppercase tracking-[0.2em] text-[#9B8B7D]">
                      Valid 12 months
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-[9px] uppercase tracking-[0.2em] text-[#95877B]">
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
