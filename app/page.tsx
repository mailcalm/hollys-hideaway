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
          className="bg-[#EFE7DC] px-6 py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl">

            {/* HEADER */}
            <div className="border-b-2 border-black pb-8">
              <div className="flex items-center gap-4">
                <span className="text-lg text-black">✦</span>
                <span className="h-px flex-1 bg-black/20" />
              </div>

              <h2 className="mt-7 text-5xl font-light uppercase leading-[0.95] tracking-[-0.045em] text-[#222] md:text-7xl lg:text-[88px]">
                The Hideaway
                <br />
                Experiences
              </h2>
            </div>

            {/* LITTLE LUXURIES HERO */}
            <div className="mt-8 overflow-hidden rounded-[1.5rem] bg-[#222] text-white">
              <div className="grid md:grid-cols-[0.42fr_1.58fr]">
                <div className="flex items-center border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-7">
                  <h3 className="text-2xl font-light leading-tight md:text-3xl">
                    The little luxuries
                  </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3">
                  {[
                    ["Your manicure", "Nail polish, gel or builder gel"],
                    ["Your design", "Minimal nail art"],
                    ["Your time", "Up to two unhurried hours"],
                    ["Your drink", "A celebratory drink"],
                    ["Finishing touches", "Luxury hand care"],
                    ["Your gift", "Nail aftercare gift bag to take home"],
                  ].map(([label, item]) => (
                    <div
                      key={item}
                      className="border-b border-r border-white/10 p-5 md:p-6"
                    >
                      <p className="text-[9px] uppercase tracking-[0.22em] text-[#9F968E]">
                        {label}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[#F0EAE4]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BRIDAL */}
            <article className="mt-8 rounded-[2rem] border border-black/15 bg-[#F9F6F1] p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-[0.9fr_1.5fr]">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#8A7F72]">
                      Two appointments
                    </p>

                    <h3 className="mt-4 text-4xl font-light leading-tight text-[#222] md:text-5xl">
                      The Bridal Experience
                    </h3>

                    <p className="mt-5 text-3xl font-light text-[#222]">
                      £115
                    </p>
                  </div>

                  <div className="mt-8 hidden items-center gap-3 md:flex">
                    <span className="h-px w-12 bg-black/30" />
                    <span className="text-sm">✦</span>
                  </div>
                </div>

                <div>
                  <p className="text-base leading-8 text-[#5E5750]">
                    A trial manicure followed by your wedding day manicure.
                    There will be plenty of time to work through shape, colour
                    and design at your trial manicure, so your final appointment
                    feels relaxed and completely considered.
                  </p>

                  <div className="mt-7 grid gap-3 border-y border-black/10 py-6 sm:grid-cols-2">
                    {[
                      "Bridal trial manicure",
                      "Wedding day manicure",
                      "Up to two hours per appointment",
                      "Minimal nail art included",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-[#514A44]"
                      >
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-black" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={bridalExperienceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-black px-7 py-4 text-[10px] uppercase tracking-[0.24em] text-white transition hover:bg-[#2F2F2F]"
                    >
                      Book Experience
                    </a>

                    <a
                      href={giftCardsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-black/25 px-7 py-4 text-[10px] uppercase tracking-[0.24em] text-black transition hover:bg-black hover:text-white"
                    >
                      Buy as a Gift
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* NEW MUM + CELEBRATION */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">

              <article className="flex h-full flex-col rounded-[2rem] border border-black/15 bg-[#F9F6F1] p-8">
                <div className="flex items-start justify-between gap-5">
                  <h3 className="max-w-sm text-3xl font-light leading-tight text-[#222]">
                    The New Mum Experience
                  </h3>

                  <p className="whitespace-nowrap text-2xl font-light text-[#222]">
                    £65
                  </p>
                </div>

                <div className="mt-5 h-px w-12 bg-black/30" />

                <p className="mt-6 flex-1 text-base leading-8 text-[#5E5750]">
                  A calm, unhurried couple of hours, especially for new mums.
                  Sit down, switch off and enjoy being looked after.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={newMumExperienceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-black px-6 py-4 text-[10px] uppercase tracking-[0.23em] text-white transition hover:bg-[#2F2F2F]"
                  >
                    Book Experience
                  </a>

                  <a
                    href={giftCardsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/25 px-6 py-4 text-[10px] uppercase tracking-[0.23em] text-black transition hover:bg-black hover:text-white"
                  >
                    Buy as a Gift
                  </a>
                </div>
              </article>

              <article className="flex h-full flex-col rounded-[2rem] border border-black/15 bg-[#F9F6F1] p-8">
                <div className="flex items-start justify-between gap-5">
                  <h3 className="max-w-sm text-3xl font-light leading-tight text-[#222]">
                    The Celebration Experience
                  </h3>

                  <p className="whitespace-nowrap text-2xl font-light text-[#222]">
                    £65
                  </p>
                </div>

                <div className="mt-5 h-px w-12 bg-black/30" />

                <p className="mt-6 flex-1 text-base leading-8 text-[#5E5750]">
                  For birthdays, milestones, achievements, thank yous or simply
                  just because. Beautiful nails and some extra time to relax
                  and enjoy the occasion.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={celebrationExperienceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-black px-6 py-4 text-[10px] uppercase tracking-[0.23em] text-white transition hover:bg-[#2F2F2F]"
                  >
                    Book Experience
                  </a>

                  <a
                    href={giftCardsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/25 px-6 py-4 text-[10px] uppercase tracking-[0.23em] text-black transition hover:bg-black hover:text-white"
                  >
                    Buy as a Gift
                  </a>
                </div>
              </article>
            </div>

            {/* FOLLOW-UP + GIFTING */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-black/10 bg-[#E5D9CD] p-8">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#786C62]">
                  After your Experience
                </p>

                <p className="mt-4 text-4xl font-light text-[#222]">
                  Twenty per cent off
                </p>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#5B544E]">
                  Your next manicure. Use it yourself or give it to someone
                  else. Valid for three months and excludes Hideaway
                  Experiences.
                </p>
              </div>

              <div className="rounded-[2rem] border border-black/10 bg-[#F9F6F1] p-8">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#8A7F72]">
                  Gift vouchers
                </p>

                <h3 className="mt-4 text-3xl font-light leading-tight text-[#222]">
                  Buy an Experience as a gift
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#5B544E]">
                  Buy through Fresha and choose an Experience value or any
                  other gift card amount. A complimentary printed
                  Holly&apos;s Hideaway voucher can be collected from the
                  Hideaway or posted free of charge.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={giftCardsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-black px-6 py-4 text-[10px] uppercase tracking-[0.23em] text-white transition hover:bg-[#2F2F2F]"
                  >
                    Buy a Gift Card
                  </a>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#81766C]">
                    Valid for twelve months
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-[10px] uppercase tracking-[0.18em] text-[#8D8176]">
              Hideaway Experiences are excluded from the fifteen per cent
              new-client offer.
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
