import { PHONE_DISPLAY, TEL, WA } from '@/lib/data';
export default function CTA() {
  return (
    <section className="relative overflow-hidden px-5 py-16 text-center text-white" style={{ background: 'linear-gradient(120deg, #0c2a52, #123a6b 50%, #0c2a52)' }}>
      <div className="grid-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="h text-3xl md:text-4xl">Book today and give your car <span className="glow-text">the care it deserves.</span></h2>
        <p className="mt-3 text-white/80">Flexible slots. We come to you.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={TEL} className="shine rounded-sm bg-ice px-7 py-4 font-semibold text-navy transition hover:bg-white">Call {PHONE_DISPLAY}</a>
          <a href={WA} className="rounded-sm border border-white/40 px-7 py-4 font-semibold transition hover:border-ice hover:text-ice">WhatsApp us</a>
        </div>
      </div>
    </section>
  );
}
