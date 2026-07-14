import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const bookingUrl =
  "https://www.fresha.com/book-now/hollys-hideaway-lcdzivqr/all-offer?share=true&pId=3032465";

export default function Home() {
  return (
    <main className="bg-[#F7F4EF] text-[#222]">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <img
          src="/images/studio.png"
          alt="Holly's Hideaway Studio"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/10 md:bg-black/10" />

        {/* extra mobile readability overlay only */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4EF]/70 via-transparent to-black/45 md:hidden" />

        <header className="absolute top-0 z-20 w-full px-5 py-5 md:px-12 md:py-8">
          <div className="flex items-center justify-between gap-4 md:items-start">
            <a href="/">
              <Image
                src="/images/HollysHideaway Logo.png"
                alt="Holly's Hideaway"
                width={420}
                height={100}
                className="mx-auto w-[300px] md:mx-0 md:w-[680px]"
              />
            </a>

            <nav className="hidden items-center gap-10 text-xs tracking-[0.3em] text-black md:flex">
              <a href="#services">SERVICES</a>
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
              BUILDER GEL & GEL MANICURES
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
            <p className="mb-10 text-sm uppercase tracking-[0.3em] text-[#8A7F72]">
              Services
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Builder Gel Manicure",
                  price: "£33",
                  time: "1 hour 30 mins",
                  text: "A detail-focused, gentle e-file manicure with cuticle work and nail shaping. Builder gel is then carefully applied for strength. Completed with luxury hand cream, massage and nourishing oil.",
                  extras: [
                    "Gel Colour Overlay + £5",
                    "French Tip + £5",
                    "Minimal Nail Art + £5",
                  ],
                },
                {
                  title: "Builder Gel Rebalance Manicure",
                  price: "£35",
                  time: "1 hour 30 mins",
                  text: "A maintenance treatment designed to restore strength, balance and structure as your natural nails grow. Existing builder gel is gently refined, the shape is rebalanced, and the apex is carefully rebuilt to support the nail’s natural stress points. Length can be adjusted if needed. Fresh builder gel is applied to reinforce and perfect the structure. Completed with luxury hand cream, massage and nourishing oil.",
                  extras: [
                    "Gel Colour Overlay + £5",
                    "French Tip + £5",
                    "Minimal Nail Art + £5",
                  ],
                },
                {
                  title: "Gel Manicure",
                  price: "£28",
                  time: "1 hour 15 mins",
                  text: "A detail-focused, gentle e-file manicure with cuticle work and nail shaping. Gel polish is then carefully applied for strength. Completed with luxury hand cream, massage and nourishing oil.",
                  extras: [
                    "REMOVAL + £8",
                    "FRENCH TIP + £5",
                    "MINIMAL NAIL ART + £5",
                  ],
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

      {/* GALLERY */}
      <FadeIn>
        <section id="gallery" className="bg-[#F7F4EF] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-10 text-sm uppercase tracking-[0.3em] text-[#8A7F72]">
              Gallery
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                { src: "/images/studio.png", alt: "Holly's Hideaway Studio" },
                { src: "/images/nails.png", alt: "Gel manicure" },
                { src: "/images/Products1.png", alt: "Luxury nail products" },
                { src: "/images/Products2.png", alt: "Builder gel products" },
                { src: "/images/Tools.png", alt: "Manicure tools" },
                { src: "/images/shed.png", alt: "Holly's Hideaway Exterior" },
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
                alt="Holly"
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
