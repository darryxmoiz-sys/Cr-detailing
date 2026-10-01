import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ReelEmbed from '@/components/ReelEmbed';
import Sec, { Card, Faq } from '@/components/Sec';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import { PHONE_DISPLAY, TEL, WA, services, whyUs, faqs, featuredReel } from '@/lib/data';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy px-5 py-20 md:py-28">
        <div className="grid-glow pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 animate-drift rounded-full bg-ice/15 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal delay={0.1}><p className="mb-3 font-semibold text-ice">Mallow, Co. Cork &middot; Mobile Valeting</p></Reveal>
          <Reveal delay={0.25}><h1 className="h text-4xl sm:text-5xl md:text-6xl">Your car, <span className="glow-text">showroom shine.</span></h1></Reveal>
          <Reveal delay={0.4}><p className="mx-auto mt-5 max-w-xl text-lg text-white/70">Mini valets, compound &amp; polishing, gloss enhancement and ceramic coating. We come to you.</p></Reveal>
          <Reveal delay={0.55} className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={TEL} className="shine animate-pulseGlow rounded-sm bg-ice px-7 py-4 font-semibold text-navy transition hover:bg-white">Call {PHONE_DISPLAY}</a>
            <a href={WA} className="rounded-sm border border-white/30 px-7 py-4 transition hover:border-ice hover:text-ice">WhatsApp us</a>
          </Reveal>
        </div>
      </section>

      <section className="text-navy" style={{ background: 'linear-gradient(90deg,#3ab6ff,#7fd9ff)' }}>
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-5 text-center text-sm font-semibold md:grid-cols-4 md:text-base">
          {['Mobile, we come to you', 'Cars, vans & SUVs', 'Ceramic coating available', 'Mallow based'].map((t) => <li key={t}>{t}</li>)}
        </ul>
      </section>

      <Sec title="What we offer" intro="From a mini valet to full ceramic protection.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([t, d]) => <Card key={t}><h3 className="h text-lg">{t}</h3><p className="mt-2 text-sm text-white/70">{d}</p></Card>)}
        </div>
        <Link href="/services" className="mt-8 inline-block font-semibold text-ice hover:underline">See all services</Link>
      </Sec>

      <Sec tone="light" title="Why choose CR Detailing">
        <WhyUs items={whyUs} keys={['home', 'shield', 'star', 'calendar']} light />
      </Sec>

      <Sec title="Watch us in action" intro="A recent valet, straight from our Facebook page.">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <ReelEmbed url={featuredReel} large />
          <div>
            <p className="text-white/70">This is the kind of finish every car gets, whether it's a quick mini valet or full compound, polish and ceramic protection.</p>
            <Link href="/gallery" className="mt-5 inline-block shine rounded-sm bg-ice px-6 py-3 font-semibold text-navy transition hover:bg-white">Watch more reels</Link>
          </div>
        </div>
      </Sec>

      <Sec title="What customers say">
        <Testimonials />
      </Sec>

      <Sec tone="light" title="Common questions">
        <Faq items={faqs.slice(0, 4)} light />
      </Sec>
      <CTA />
    </>
  );
}
