import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="bg-[#F7F4EF] text-[#222]">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/studio.png"
          alt="Holly's Hideaway Studio"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />

        <header className="absolute top-0 z-20 w-full px-5 py-6 md:px-12 md:py-8">
          <div className="flex items-start justify-between gap-4">
            <Image
              src="/images/HollysHideaway Logo.png"
              alt="Holly's Hideaway"
              width={420}
              height={100}
              className="w-[230px] md:w-[420px]"
            />

            <nav className="hidden items-center gap-10 text-xs tracking-[0.3em] text-black md:flex">
              <a href="#">HOME</a>
              <a href="#services">SERVICES</a>
              <a href="#gallery">GALLERY</a>
              <a href="#about">ABOUT ME</a>
              <a href="#contact">CONTACT</a>

              <a
                href="#"
                className="rounded-full bg-black px-6 py-4 text-white transition hover:bg-[#2F2F2F]"
              >
                BOOK NOW
              </a>
            </nav>

            <a
              href="#"
              className="mt-1 inline-block rounded-full bg-black px-5 py-3 text-[10px] tracking-[0.25em] text-white md:hidden"
            >
              BOOK
            </a>
          </div>
        </header>

        <div className="relative z-10 flex h-full items-center px-6 pt-28 md:px-12 md:pt-0">
          <div className="max-w-xl">
            <p className="mb-8 text-sm leading-9 tracking-[0.28em] text-black md:text-lg md:leading-10 md:tracking-[0.35em]">
              CALM ONE-TO-ONE
              <br />
              BUILDER GEL & GEL MANICURES.
              <br />
              IN MY PRIVATE HOME STUDIO,
              <br />
              BASED IN CHELSFIELD, ORPINGTON.
            </p>

            <a
              href="#"
              className="inline-block rounded-full bg-black px-8 py-4 text-[11px] tracking-[0.28em] text-white transition hover:bg-[#2F2F2F] md:px-10 md:py-5 md:text-xs md:tracking-[0.35em]"
            >
              BOOK APPOINTMENT
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <FadeIn>
        <section className="bg-[#EFE7DC] px-6 py-10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 text-center md:grid-cols-4">
            <div>
              <div className="mb-4 text-3xl">✦</div>
              <p className="text-xs tracking-[0.3em]">PRIVATE STUDIO</p>
            </div>

            <div>
              <div className="mb-4 text-3xl">♡</div>
              <p className="text-xs tracking-[0.3em]">ONE-TO-ONE CARE</p>
            </div>

            <div>
              <div className="mb-4 text-3xl">✧</div>
              <p className="text-xs tracking-[0.3em]">LUXURY PRODUCTS</p>
            </div>

            <div>
              <div className="mb-4 text-3xl">◌</div>
              <p className="text-xs tracking-[0.3em]">RELAXED APPOINTMENTS</p>
            </div>
          </div>
        </section>
      </FadeIn>

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
                  price: "£40",
                  time: "1 hour 30 mins",
                  text: "A detail-focused, gentle e-file manicure with cuticle work, nail shaping, hot towel, exfoliating scrub and hand massage. Builder gel is then carefully applied for strength. Completed with luxury hand cream, nourishing oil and fragrance spritz.",
                  extras: [
                    "Gel colour overlay · £5",
                    "French tip · £5",
                    "Minimal nail art · £5",
                  ],
                },
                {
                  title: "Builder Gel Rebalance Manicure",
                  price: "£45",
                  time: "1 hour 30 mins",
                  text: "A maintenance treatment designed to restore strength, balance and structure as your natural nails grow. Existing builder gel is gently refined, the shape is rebalanced, and the apex is carefully rebuilt to support the nail’s natural stress points. Length can be adjusted if needed. Followed by a hot towel, exfoliating hand scrub and hand massage, before fresh builder gel is applied to reinforce and perfect the structure. Completed with luxury hand cream, nourishing oil and fragrance spritz.",
                  extras: [
                    "Gel colour overlay · £5",
                    "French tip · £5",
                    "Minimal nail art · £5",
                  ],
                },
                {
                  title: "Gel Manicure",
                  price: "£35",
                  time: "1 hour 15 mins",
                  text: "A detail-focused, gentle e-file manicure with cuticle work, precise shaping, hot towel, exfoliating scrub and hand massage. Completed with luxury hand cream, nourishing oil and fragrance spritz.",
                  extras: ["French tip · £5", "Minimal nail art · £5"],
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="grid gap-6 border-t border-black/10 py-8 md:grid-cols-[1fr_2fr_auto]"
                >
                  <h3 className="text-2xl font-light">{service.title}</h3>

                  <div>
                    <p className="max-w-3xl leading-8 text-[#555]">
                      {service.text}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {service.extras.map((extra) => (
                        <span
                          key={extra}
                          className="rounded-full border border-black/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#666]"
                        >
                          {extra}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-left md:text-right">
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
        <section id="gallery" className="bg-[#EFE7DC] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-10 text-sm uppercase tracking-[0.3em] text-[#8A7F72]">
              Gallery
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="/images/studio.png"
                  alt="Holly's Hideaway Studio"
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
                />
              </div>

              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src="/images/nails.png"
                    alt="Gel manicure"
                    className="h-[320px] w-full object-cover transition duration-700 hover:scale-[1.02]"
                  />
                </div>

                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src="/images/shed.jpg"
                    alt="Holly's Hideaway Exterior"
                    className="h-[320px] w-full object-cover transition duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ABOUT ME */}
      <FadeIn>
        <section id="about" className="bg-[#F7F4EF] px-6 py-20">
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
                  I’m 39 years old, mum to two girls, and after qualifying in
                  builder gel in 2025, I’ve spent the past year practicing
                  everything I’ve learnt whilst continuing to educate myself and
                  refine my skills.
                </p>

                <p>
                  Holly’s Hideaway was created to offer a slower paced,
                  personalised experience in a calm and welcoming private studio
                  setting.
                </p>

                <p>
                  I love creating appointments that feel relaxed, comfortable
                  and detail-focused — with time taken to make every client feel
                  looked after.
                </p>
              </div>

              <a
                href="#"
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
        <section id="contact" className="bg-[#EFE7DC] px-6 py-20">
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
                  Orpington. If you have any questions before booking, feel free
                  to get in touch.
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