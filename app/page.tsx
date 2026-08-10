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
          className="relative overflow-hidden bg-[#F4EEE7] px-6 py-24 md:py-32"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-[#E8D8C8]/60 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-[#EADFD2]/70 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            {/* INTRO */}
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#9B8876]">
                The Hideaway Experiences
              </p>

              <h2 className="mt-7 text-5xl font-light leading-[1.02] text-[#2C2926] md:text-7xl">
                Beautiful nails.
                <br />
                Little luxuries.
                <br />
                A little escape.
              </h2>

              <div className="mx-auto mt-8 h-px w-24 bg-[#A99279]/50" />

              <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#6B625A] md:text-lg">
                Thoughtful, unhurried manicure experiences created for the
                moments that deserve something a little more special.
              </p>
            </div>

            {/* BRIDAL HERO CARD */}
            <article className="relative mt-16 overflow-hidden rounded-[2.75rem] border border-[#B9A48E]/25 bg-[#FFFDF9] p-8 shadow-[0_30px_80px_rgba(74,58,44,0.08)] md:p-12 lg:p-14">
              <div className="absolute right-[-70px] top-[-70px] h-56 w-56 rounded-full border border-[#B8A087]/20" />
              <div className="absolute right-[-25px] top-[-25px] h-36 w-36 rounded-full border border-[#B8A087]/20" />
              <div className="absolute bottom-[-60px] left-[-40px] h-40 w-40 rounded-full bg-[#EFE4D8]/70 blur-2xl" />

              <div className="relative">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <div className="inline-flex rounded-full border border-[#B09A83]/30 bg-[#F8F0E8] px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-[#8F7A66]">
                      The premium experience
                    </div>

                    <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#A18A73]">
                      For your wedding
                    </p>

                    <h3 className="mt-4 text-4xl font-light leading-tight text-[#2C2926] md:text-6xl">
                      The Bridal
                      <br />
                      Experience
                    </h3>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#9F8D7B]">
                      Two appointments
                    </p>
                    <p className="mt-2 text-4xl font-light text-[#2C2926]">
                      £115
                    </p>
                  </div>
                </div>

                <div className="mt-10 grid gap-10 border-t border-[#2C2926]/10 pt-10 md:grid-cols-[1.1fr_0.9fr]">
                  <p className="max-w-xl text-lg leading-9 text-[#625A52]">
                    Two beautifully unhurried appointments designed to make
                    your wedding nails feel completely considered — from your
                    full bridal trial through to your final wedding-day
                    manicure.
                  </p>

                  <div className="space-y-5 text-sm text-[#4E4842]">
                    {[
                      "Full bridal trial manicure",
                      "Final wedding-day manicure",
                      "Up to two hours per appointment",
                      "French tip or minimal nail art included",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-4 border-b border-[#2C2926]/8 pb-4 last:border-b-0"
                      >
                        <span className="text-[10px] tracking-[0.2em] text-[#A48D76]">
                          0{index + 1}
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={bridalExperienceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#2C2926] px-8 py-4 text-[10px] uppercase tracking-[0.26em] text-white transition hover:bg-[#47413C]"
                  >
                    Book Bridal Experience
                  </a>

                  <a
                    href={giftCardsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#2C2926]/20 px-8 py-4 text-[10px] uppercase tracking-[0.26em] text-[#2C2926] transition hover:border-[#2C2926]"
                  >
                    Buy as a Gift
                  </a>
                </div>
              </div>
            </article>

            {/* TWO EXPERIENCES */}
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <article className="relative overflow-hidden rounded-[2.5rem] border border-[#BCA995]/25 bg-[#E9DED3] p-8 md:p-10">
                <div className="absolute right-[-45px] top-[-55px] text-[180px] font-light leading-none text-white/25">
                  01
                </div>

                <div className="relative">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#907B66]">
                    A little time for you
                  </p>

                  <div className="mt-5 flex items-start justify-between gap-5">
                    <h3 className="max-w-sm text-4xl font-light leading-tight text-[#2D2926]">
                      The New Mum Experience
                    </h3>

                    <p className="text-2xl font-light text-[#2D2926]">£65</p>
                  </div>

                  <p className="mt-8 text-base leading-8 text-[#645C54]">
                    A calm, unhurried escape created especially for new mums.
                    A little invitation to pause, switch off and enjoy
                    something that is completely for you.
                  </p>

                  <div className="mt-10 border-t border-[#2D2926]/10 pt-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#8D7967]">
                      Up to 2 hours · All-inclusive manicure
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={newMumExperienceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#2C2926] px-6 py-4 text-[10px] uppercase tracking-[0.23em] text-white transition hover:bg-[#47413C]"
                    >
                      Book Experience
                    </a>

                    <a
                      href={giftCardsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#2C2926]/20 px-6 py-4 text-[10px] uppercase tracking-[0.23em] text-[#2C2926] transition hover:border-[#2C2926]"
                    >
                      Buy as a Gift
                    </a>
                  </div>
                </div>
              </article>

              <article className="relative overflow-hidden rounded-[2.5rem] border border-[#BCA995]/25 bg-[#F0E7DE] p-8 md:p-10">
                <div className="absolute right-[-45px] top-[-55px] text-[180px] font-light leading-none text-white/30">
                  02
                </div>

                <div className="relative">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#907B66]">
                    For all the good things
                  </p>

                  <div className="mt-5 flex items-start justify-between gap-5">
                    <h3 className="max-w-sm text-4xl font-light leading-tight text-[#2D2926]">
                      The Celebration Experience
                    </h3>

                    <p className="text-2xl font-light text-[#2D2926]">£65</p>
                  </div>

                  <p className="mt-8 text-base leading-8 text-[#645C54]">
                    For birthdays, milestones, achievements, thank-yous or
                    simply because. A beautifully indulgent manicure and a
                    little time away from the everyday.
                  </p>

                  <div className="mt-10 border-t border-[#2D2926]/10 pt-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#8D7967]">
                      Up to 2 hours · All-inclusive manicure
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={celebrationExperienceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#2C2926] px-6 py-4 text-[10px] uppercase tracking-[0.23em] text-white transition hover:bg-[#47413C]"
                    >
                      Book Experience
                    </a>

                    <a
                      href={giftCardsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#2C2926]/20 px-6 py-4 text-[10px] uppercase tracking-[0.23em] text-[#2C2926] transition hover:border-[#2C2926]"
                    >
                      Buy as a Gift
                    </a>
                  </div>
                </div>
              </article>
            </div>

            {/* INCLUSIONS */}
            <div className="mt-20">
              <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#9A8774]">
                    Every experience includes
                  </p>

                  <h3 className="mt-5 text-4xl font-light leading-tight text-[#2C2926]">
                    The little things
                    <br />
                    make it special.
                  </h3>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  {[
                    [
                      "01",
                      "Your manicure",
                      "Choose nail polish, gel or builder gel.",
                    ],
                    [
                      "02",
                      "Your design",
                      "French tip or minimal nail art is included.",
                    ],
                    [
                      "03",
                      "Your time",
                      "Up to two unhurried hours per appointment.",
                    ],
                    [
                      "04",
                      "Your drink",
                      "A celebratory drink while you switch off.",
                    ],
                    [
                      "05",
                      "The finishing touch",
                      "Chanel hand cream and cuticle oil used during the treatment.",
                    ],
                    [
                      "06",
                      "A little something home",
                      "Hand mask, cuticle oil and a mini dried-flower bouquet.",
                    ],
                  ].map(([number, title, copy]) => (
                    <div
                      key={title}
                      className="border-t border-[#2C2926]/10 pt-5"
                    >
                      <div className="flex gap-4">
                        <span className="text-[10px] tracking-[0.22em] text-[#A18C77]">
                          {number}
                        </span>

                        <div>
                          <p className="text-xs uppercase tracking-[0.23em] text-[#74695F]">
                            {title}
                          </p>

                          <p className="mt-3 leading-7 text-[#544D46]">
                            {copy}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FOLLOW-UP TREAT */}
            <div className="mt-16 rounded-[2.25rem] border border-[#B7A18A]/20 bg-[#FFFDF9]/80 px-8 py-10 text-center backdrop-blur-sm md:px-12">
              <p className="text-[10px] uppercase tracking-[0.34em] text-[#9A8774]">
                And one more little thing
              </p>

              <p className="mx-auto mt-5 max-w-3xl text-2xl font-light leading-10 text-[#2C2926] md:text-3xl">
                Every Hideaway Experience includes 20% off a future standard
                manicure — to use yourself or pass on to someone else.
              </p>

              <p className="mt-4 text-sm text-[#776C62]">
                Valid for 3 months. Excludes Hideaway Experiences.
              </p>
            </div>

            {/* GIFTING */}
            <div className="relative mt-16 overflow-hidden rounded-[2.75rem] bg-[#2E2A27] px-8 py-14 text-[#F8F3ED] md:px-14 md:py-16">
              <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -right-4 -top-8 h-40 w-40 rounded-full border border-white/10" />
              <div className="absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-[#B99D81]/10 blur-3xl" />

              <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
                <div className="max-w-3xl">
                  <p className="text-[10px] uppercase tracking-[0.36em] text-[#CDBBAA]">
                    Gift a Hideaway Experience
                  </p>

                  <h3 className="mt-5 text-4xl font-light leading-tight md:text-5xl">
                    Something lovely
                    <br />
                    to look forward to.
                  </h3>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#D8CEC5]">
                    Choose a Hideaway Experience or any gift-card value through
                    Fresha. A complimentary printed Holly&apos;s Hideaway
                    voucher can be collected or posted free of charge.
                  </p>

                  <p className="mt-4 text-sm text-[#AFA39A]">
                    Gift cards are valid for 12 months from purchase.
                  </p>
                </div>

                <a
                  href={giftCardsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-[#F8F3ED] px-8 py-4 text-center text-[10px] uppercase tracking-[0.27em] text-[#2E2A27] transition hover:bg-white"
                >
                  Buy a Gift Card
                </a>
              </div>
            </div>

            <p className="mt-8 text-center text-xs leading-6 text-[#887C71]">
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
