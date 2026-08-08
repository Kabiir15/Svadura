import Reveal from "@/components/Reveal";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-32 pb-24">
      <div className="container-lux max-w-3xl">
        <Reveal>
          <p className="eyebrow text-gold mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl mb-3">{title}</h1>
          <p className="text-sm text-espresso/40 mb-12">Last updated: {updated}</p>
          <div className="prose-lux space-y-6 text-espresso/70 leading-relaxed">{children}</div>
        </Reveal>
      </div>
    </div>
  );
}
