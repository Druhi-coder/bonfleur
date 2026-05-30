import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Leaf, Flower2, TreePine, Sprout } from "lucide-react";
import { WhatsAppButton, FloatingWhatsApp, whatsappLink } from "@/components/WhatsAppButton";

import logo from "@/assets/logo.jpeg";
import banner from "@/assets/banner.jpeg";
import shop1 from "@/assets/shop-1.jpeg";
import shop2 from "@/assets/shop-2.jpeg";
import shop3 from "@/assets/shop-3.jpeg";
import shop4 from "@/assets/shop-4.jpeg";
import shop5 from "@/assets/shop-5.jpeg";
import shopVideo from "@/assets/shop-video.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bonfleur — The Bonsai & Flower Shop, Udaipur" },
      {
        name: "description",
        content:
          "A large variety of beautiful plants, flowers and bonsai available for order. Visit our shop in Bhopalpura, Udaipur or order on WhatsApp.",
      },
      { property: "og:title", content: "Bonfleur — The Bonsai & Flower Shop" },
      {
        property: "og:description",
        content: "Plants, flowers and bonsai, lovingly grown in Udaipur.",
      },
    ],
  }),
  component: Index,
});

const categories = [
  { icon: Flower2, label: "Flowering Plants", note: "Adenium, Hibiscus, Bignonia & more" },
  { icon: TreePine, label: "Bonsai", note: "Hand-shaped, year-on-year" },
  { icon: Sprout, label: "Succulents", note: "Easy care, beautifully formed" },
  { icon: Leaf, label: "Foliage & Indoor", note: "Greens for every corner" },
];

function Index() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--color-border)]/60 bg-[var(--color-background)]/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Bonfleur logo" className="h-10 w-10 rounded-full object-cover" />
            <div className="leading-tight">
              <div className="font-serif text-lg tracking-[0.2em] text-[var(--color-leaf-deep)]">
                BONFLEUR
              </div>
              <div className="script -mt-0.5 text-[10px] text-[var(--color-muted-foreground)]">
                the bonsai & flower shop
              </div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#collection" className="hover:text-[var(--color-blossom)] transition-colors">Collection</a>
            <a href="#story" className="hover:text-[var(--color-blossom)] transition-colors">Our Story</a>
            <a href="#visit" className="hover:text-[var(--color-blossom)] transition-colors">Visit</a>
          </nav>
          <WhatsAppButton variant="outline" className="hidden sm:inline-flex">Order</WhatsAppButton>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--color-cream)] via-[var(--color-background)] to-[var(--color-background)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12">
          <div className="md:col-span-6 animate-float-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1 text-xs tracking-[0.18em] text-[var(--color-muted-foreground)] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blossom)]" />
              Udaipur · Since 2019
            </div>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-[var(--color-leaf-deep)] md:text-7xl">
              A quiet corner,
              <br />
              <span className="script text-[var(--color-blossom)]">grown with care.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--color-muted-foreground)] md:text-lg">
              Bonfleur is a small bonsai and flower shop in Bhopalpura, Udaipur — a
              large variety of beautiful plants, flowers and bonsai, available for
              order and home delivery within the city.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton>Order on WhatsApp</WhatsAppButton>
              <a
                href="#collection"
                className="text-sm tracking-wide text-[var(--color-leaf-deep)] underline-offset-4 hover:underline"
              >
                Browse the collection →
              </a>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative overflow-hidden rounded-2xl bg-[var(--color-cream)] shadow-[0_30px_80px_-30px_oklch(0.3_0.07_150/0.4)]">
              <img
                src={banner}
                alt="Pink adenium desert rose in bloom — Bonfleur"
                className="block h-auto w-full"
                width={1179}
                height={430}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-y border-[var(--color-border)]/60 bg-[var(--color-cream)]/60 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-5 md:grid-cols-4">
          {categories.map(({ icon: Icon, label, note }) => (
            <div key={label} className="flex items-start gap-3">
              <Icon className="mt-1 h-5 w-5 shrink-0 text-[var(--color-blossom)]" />
              <div>
                <div className="font-serif text-lg text-[var(--color-leaf-deep)]">{label}</div>
                <div className="text-xs text-[var(--color-muted-foreground)]">{note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTION — editorial zigzag */}
      <section id="collection" className="mx-auto max-w-6xl px-5 py-24 md:py-36">
        <div className="mx-auto mb-20 max-w-2xl text-center md:mb-28">
          <div className="script text-sm text-[var(--color-blossom)]">our shop</div>
          <h2 className="mt-3 font-serif text-4xl leading-[1.1] text-[var(--color-leaf-deep)] md:text-6xl">
            Real plants, from a real little rooftop nursery.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[var(--color-muted-foreground)]">
            Every plant on this page lives at our shop in Udaipur. Message us on
            WhatsApp and we'll send fresh photos and prices of what's in season.
          </p>
        </div>

        {/* Row 1 — image left, copy right */}
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
          <figure className="md:col-span-7">
            <div className="overflow-hidden rounded-sm">
              <img src={shop1} alt="Rows of potted plants at Bonfleur" className="h-[420px] w-full object-cover md:h-[560px]" loading="lazy" />
            </div>
          </figure>
          <div className="md:col-span-5">
            <div className="script text-sm text-[var(--color-blossom)]">the collection</div>
            <h3 className="mt-2 font-serif text-3xl text-[var(--color-leaf-deep)] md:text-4xl">A row of friends.</h3>
            <p className="mt-5 leading-relaxed text-[var(--color-muted-foreground)]">
              Flowering plants, foliage, succulents and small bonsai — kept on open
              shelves so each one gets light, air and a little attention every day.
            </p>
          </div>
        </div>

        {/* Row 2 — copy left, image right */}
        <div className="mt-24 grid items-center gap-10 md:mt-36 md:grid-cols-12 md:gap-16">
          <div className="order-2 md:order-1 md:col-span-5">
            <div className="script text-sm text-[var(--color-blossom)]">the rooftop</div>
            <h3 className="mt-2 font-serif text-3xl text-[var(--color-leaf-deep)] md:text-4xl">A quiet rooftop in Udaipur.</h3>
            <p className="mt-5 leading-relaxed text-[var(--color-muted-foreground)]">
              Bonfleur lives on an open rooftop in Bhopalpura. Mornings here are
              soft and green — come up, take your time, and pick a plant that
              feels like yours.
            </p>
          </div>
          <figure className="order-1 md:order-2 md:col-span-7">
            <div className="overflow-hidden rounded-sm">
              <img src={shop3} alt="Balcony rooftop with potted plants in Udaipur" className="h-[420px] w-full object-cover md:h-[560px]" loading="lazy" />
            </div>
          </figure>
        </div>

        {/* Row 3 — full-width live video band */}
        <div className="mt-24 md:mt-36">
          <figure className="relative overflow-hidden rounded-sm bg-[var(--color-leaf-deep)]">
            <video
              src={shopVideo}
              autoPlay
              muted
              loop
              playsInline
              className="h-[420px] w-full object-cover md:h-[600px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <figcaption className="absolute bottom-8 left-8 right-8 text-[var(--color-cream)] md:bottom-12 md:left-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cream)]/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-leaf-deep)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blossom)]" /> Live · the shop
              </div>
              <div className="mt-4 font-serif text-3xl md:text-5xl">A walk through the shop.</div>
            </figcaption>
          </figure>
        </div>

        {/* Row 4 — quiet two-up */}
        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
          <figure className="overflow-hidden rounded-sm">
            <img src={shop4} alt="Foliage and flowering plants" className="h-[320px] w-full object-cover md:h-[420px]" loading="lazy" />
          </figure>
          <figure className="overflow-hidden rounded-sm">
            <img src={shop5} alt="Open rooftop shop area" className="h-[320px] w-full object-cover md:h-[420px]" loading="lazy" />
          </figure>
        </div>

        {/* Pull-quote */}
        <figure className="mx-auto mt-24 max-w-3xl text-center md:mt-32">
          <div className="script text-[var(--color-blossom)]">#backtotheroots</div>
          <blockquote className="mt-4 font-serif text-3xl leading-[1.25] text-[var(--color-leaf-deep)] md:text-5xl">
            "Be proud of your wings, and humble to your roots."
          </blockquote>
          <figcaption className="mt-5 text-xs uppercase tracking-[0.25em] text-[var(--color-muted-foreground)]">
            — a note from Bonfleur
          </figcaption>
        </figure>
      </section>


      {/* STORY */}
      <section id="story" className="bg-[var(--color-leaf-deep)] py-20 text-[var(--color-cream)] md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center">
          <img
            src={logo}
            alt="Bonfleur — the bonsai and flower shop"
            className="mx-auto w-56 rounded-full bg-[var(--color-cream)] p-6 md:w-72"
          />
          <div>
            <div className="script text-sm opacity-80">our story</div>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">
              A bonsai & flower shop, run with love.
            </h2>
            <p className="mt-5 text-base leading-relaxed opacity-90">
              Bonfleur began as a small balcony garden in Udaipur and slowly grew
              into a little shop. We keep a large variety of flowering plants,
              bonsai, succulents and indoor greens — most of them shaped and
              cared for by hand, right here.
            </p>
            <p className="mt-3 text-base leading-relaxed opacity-90">
              Drop by, or send us a message on WhatsApp — we'll happily send
              pictures of what's blooming this week.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <WhatsAppButton variant="solid" className="!bg-[var(--color-cream)] !text-[var(--color-leaf-deep)] hover:!bg-[var(--color-blossom)] hover:!text-[var(--color-cream)]">
                Message us
              </WhatsAppButton>
              <a
                href="tel:+919460826353"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-cream)]/40 px-6 py-3 text-sm hover:bg-[var(--color-cream)]/10"
              >
                <Phone className="h-4 w-4" /> 094608 26353
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <div className="script text-sm text-[var(--color-blossom)]">visit</div>
            <h2 className="mt-1 font-serif text-4xl text-[var(--color-leaf-deep)] md:text-5xl">
              Come say hello.
            </h2>
            <p className="mt-4 max-w-md text-[var(--color-muted-foreground)]">
              We're on the main road in Bhopalpura, just near Shastri Circle.
              Pop in any time we're open, or place an order and we'll deliver
              within Udaipur.
            </p>

            <dl className="mt-8 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--color-blossom)]" />
                <div>
                  <dt className="font-serif text-base text-[var(--color-leaf-deep)]">Address</dt>
                  <dd className="text-[var(--color-muted-foreground)]">
                    24, Bhopalpura, Main Road, Near Shastri Circle,<br />
                    Udaipur, Rajasthan
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[var(--color-blossom)]" />
                <div>
                  <dt className="font-serif text-base text-[var(--color-leaf-deep)]">Phone</dt>
                  <dd>
                    <a href="tel:+919460826353" className="text-[var(--color-muted-foreground)] hover:text-[var(--color-blossom)]">
                      094608 26353
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[var(--color-blossom)]" />
                <div>
                  <dt className="font-serif text-base text-[var(--color-leaf-deep)]">Email</dt>
                  <dd>
                    <a href="mailto:bonfleurshop@gmail.com" className="text-[var(--color-muted-foreground)] hover:text-[var(--color-blossom)]">
                      bonfleurshop@gmail.com
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-[var(--color-blossom)]" />
                <div>
                  <dt className="font-serif text-base text-[var(--color-leaf-deep)]">Hours</dt>
                  <dd className="text-[var(--color-muted-foreground)]">Please call or message before visiting</dd>
                </div>
              </div>
            </dl>

            <div className="mt-10">
              <WhatsAppButton message="Hi Bonfleur! I'd like to visit / place an order.">
                Order or visit
              </WhatsAppButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-sm">
            <iframe
              title="Bonfleur location in Udaipur"
              src="https://www.google.com/maps?q=24+Bhopalpura+Main+Road+Near+Shastri+Circle+Udaipur+Rajasthan&output=embed"
              className="h-[420px] w-full md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--color-border)] bg-[var(--color-cream)]/60 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-xs text-[var(--color-muted-foreground)] sm:flex-row">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-7 w-7 rounded-full object-cover" />
            <span className="font-serif tracking-[0.2em] text-[var(--color-leaf-deep)]">BONFLEUR</span>
            <span className="script">· the bonsai & flower shop</span>
          </div>
          <div>© {new Date().getFullYear()} Bonfleur, Udaipur. Made with care.</div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}
