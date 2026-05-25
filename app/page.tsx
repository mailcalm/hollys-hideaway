"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const bookingUrl =
  "https://app.squareup.com/appointments/buyer/widget/poecqakuzxegtm/LFCVWV3S5QHEH";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="bg-[#F7F4EF] text-[#222]">

  {/* TOP BANNER */}
<div className="sticky top-0 z-50 border-b border-black/10 bg-[#EFE7DC]">
  <div className="mx-auto flex items-center justify-center gap-3 px-4 py-3 text-center">
    <div className="h-2 w-2 animate-pulse rounded-full bg-[#B08D57]" />

    <p className="text-[9px] uppercase tracking-[0.22em] text-black md:text-xs md:tracking-[0.3em]">
      June Model Call • Builder Gel & Gel Manicures £15
    </p>
  </div>
</div>
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
          className="w-[260px] md:w-[680px]"
        />
      </a>

      <nav className="hidden items-center gap-10 text-xs tracking-[0.3em] text-black md:flex">
        <a href="#services">SERVICES</a>
        <a href="#gallery">GALLERY</a>
        <a href="#about">ABOUT ME</a>
        <a href="#contact">CONTACT</a>

        <button
          type="button"
          onClick={() => setBookingOpen(true)}
          className="rounded-full bg-black px-6 py-4 text-white transition hover:bg-[#2F2F2F]"
        >
          BOOK NOW
        </button>
      </nav>

      <button
        type="button"
        onClick={() => setBookingOpen(true)}
        className="rounded-full bg-black px-6 py-4 text-[10px] tracking-[0.25em] text-white md:hidden"
      >
        BOOK
      </button>
    </div>
  </header>

  <div className="relative z-10 flex h-full items-center px-6 pt-36 md:px-12 md:pt-0">
  <div className="max-w-xl">
      <p className="mb-6 text-[13px] leading-8 tracking-[0.24em] text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.65)] md:mb-8 md:text-lg md:leading-10 md:tracking-[0.35em]">
        CALM ONE-TO-ONE
        <br />
        BUILDER GEL & GEL MANICURES
        <br />
        IN MY PRIVATE HOME STUDIO
        <br />
        BASED IN CHELSFIELD, ORPINGTON.
      </p>

      <button
        type="button"
        onClick={() => setBookingOpen(true)}
        className="inline-block rounded-full bg-black px-7 py-4 text-[10px] tracking-[0.25em] text-white transition hover:bg-[#2F2F2F] md:px-10 md:py-5 md:text-xs md:tracking-[0.35em]"
      >
        BOOK APPOINTMENT
      </button>
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
                  I’m 39 years old, mum to two girls, and after qualifying as a nail technician in 2025, I’ve dedicated my time to practice, refining my skills and investing in further education to provide the highest standard of manicure treatments possible.
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

              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="mt-10 inline-block rounded-full bg-black px-8 py-4 text-xs tracking-[0.3em] text-white transition hover:bg-[#2F2F2F]"
              >
                BOOK APPOINTMENT
              </button>
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

      {/* BOOKING MODAL */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 px-4 py-4 backdrop-blur-sm md:px-8 md:py-8">
          <div className="mx-auto flex h-full max-w-5xl flex-col overflow-hidden rounded-[2rem] bg-[#F7F4EF] shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 md:px-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7F72]">
                  Holly’s Hideaway
                </p>
                <h3 className="mt-1 text-xl font-light">Book Appointment</h3>
              </div>

              <button
                type="button"
                onClick={() => setBookingOpen(false)}
                className="rounded-full border border-black/10 px-5 py-3 text-xs tracking-[0.2em] transition hover:bg-black hover:text-white"
              >
                CLOSE
              </button>
            </div>

            <div className="flex-1 bg-white p-2 md:p-4">
              <iframe
                src={bookingUrl}
                title="Holly's Hideaway booking"
                className="h-full min-h-[720px] w-full rounded-[1.5rem] border-0 bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}