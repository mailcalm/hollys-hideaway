"use client";

import Script from "next/script";
import { useState, useSyncExternalStore } from "react";

const measurementId = "G-YDEGJ48YX4";
const preferenceKey = "hollys-hideaway-analytics";
const preferenceChanged = "analytics-preference-changed";

function subscribe(onChange: () => void) {
  window.addEventListener(preferenceChanged, onChange);
  return () => window.removeEventListener(preferenceChanged, onChange);
}

function getPreference() {
  if (window.location.hostname !== "www.hollyshideaway.co.uk") return "unavailable";

  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${preferenceKey}=`));
  return cookie?.split("=")[1] ?? "unset";
}

export default function AnalyticsConsent() {
  const preference = useSyncExternalStore(subscribe, getPreference, () => "unavailable");
  const [showSettings, setShowSettings] = useState(false);
  if (preference === "unavailable") return null;

  function savePreference(allow: boolean) {
    document.cookie = `${preferenceKey}=${allow ? "allow" : "decline"}; Path=/; Max-Age=15552000; SameSite=Lax; Secure`;
    setShowSettings(false);

    if (!allow && preference === "allow") {
      Object.assign(window, { [`ga-disable-${measurementId}`]: true });
      for (const name of ["_ga", `_ga_${measurementId.slice(2)}`]) {
        document.cookie = `${name}=; Path=/; Max-Age=0; Secure`;
        document.cookie = `${name}=; Domain=hollyshideaway.co.uk; Path=/; Max-Age=0; Secure`;
      }
      window.location.reload();
      return;
    }

    window.dispatchEvent(new Event(preferenceChanged));
  }

  return (
    <>
      {preference === "allow" && (
        <>
          <Script id="hollys-analytics">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${measurementId}', {
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
              document.addEventListener('click', function (event) {
                const link = event.target instanceof Element && event.target.closest('a[href]');
                if (!link) return;
                const url = new URL(link.href);
                if (url.hostname !== 'www.fresha.com') return;
                const bookingPath = '/book-now/hollys-hideaway-lcdzivqr/';
                if (![bookingPath + 'services', bookingPath + 'packages'].includes(url.pathname)) return;
                gtag('event', 'fresha_booking_click');
              });`}
          </Script>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
        </>
      )}
      <footer className="bg-[#F7F4EF] px-6 py-4 text-center text-sm">
        <button type="button" className="underline underline-offset-4" onClick={() => setShowSettings(true)}>
          Cookie settings
        </button>
      </footer>
      {(preference === "unset" || showSettings) && (
        <section
          aria-label="Analytics cookie preferences"
          className="fixed inset-x-4 bottom-4 z-50 max-w-md rounded-xl border border-black/15 bg-[#F7F4EF] p-5 text-sm text-black shadow-lg"
        >
          <p className="font-medium">Analytics cookies</p>
          <p className="mt-2 leading-relaxed">
            With your permission, we use Google Analytics cookies to see how people find the site,
            which pages they view and which links they click, including links to Fresha. You can
            change your choice any time in Cookie settings.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" className="rounded-full border border-black px-4 py-2" onClick={() => savePreference(false)}>
              Decline analytics
            </button>
            <button type="button" className="rounded-full border border-black px-4 py-2" onClick={() => savePreference(true)}>
              Allow analytics
            </button>
          </div>
        </section>
      )}
    </>
  );
}
