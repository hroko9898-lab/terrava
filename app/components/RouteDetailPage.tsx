import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";

export type RouteDetail = {
  mountainName: string;
  mountainLink: string;
  title: string;
  intro: string;
  difficulty: string;
  time: string;
  access: string;
  suitableFor: string;
  highlights: string[];
  warnings: string[];
  tip: string;
};

export default function RouteDetailPage({
  mountainName,
  mountainLink,
  title,
  intro,
  difficulty,
  time,
  access,
  suitableFor,
  highlights,
  warnings,
  tip,
}: RouteDetail) {
  return (
    <main className="min-h-screen bg-[#f3eadb] text-[#3b2416] overflow-x-hidden">
      <section className="px-6 py-8 max-w-7xl mx-auto">
        <SiteNav />

        <div className="mb-10">
          <a
            href={mountainLink}
            className="inline-block border border-[#3b2416] px-5 py-3 rounded-full"
          >
            ← Назад към {mountainName}
          </a>
        </div>

        <p className="uppercase tracking-[0.3em] text-sm mb-8 text-[#7a5a3a]">
          {mountainName} • Маршрут
        </p>

        <section className="max-w-5xl mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">{title}</h1>

          <p className="text-xl md:text-2xl text-[#6b4b32] leading-relaxed">
            {intro}
          </p>
        </section>

        <section className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
            <h2 className="text-xl font-bold mb-2">Трудност</h2>
            <p className="text-[#6b4b32]">{difficulty}</p>
          </div>

          <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
            <h2 className="text-xl font-bold mb-2">Време</h2>
            <p className="text-[#6b4b32]">{time}</p>
          </div>

          <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
            <h2 className="text-xl font-bold mb-2">Достъп</h2>
            <p className="text-[#6b4b32]">{access}</p>
          </div>

          <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
            <h2 className="text-xl font-bold mb-2">Подходящо за</h2>
            <p className="text-[#6b4b32]">{suitableFor}</p>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
            <h2 className="text-3xl font-bold mb-6">Какво ще видиш</h2>

            <ul className="space-y-4 text-[#6b4b32] text-lg">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
            <h2 className="text-3xl font-bold mb-6">Внимавай за</h2>

            <ul className="space-y-4 text-[#6b4b32] text-lg">
              {warnings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#3b2416] text-[#f3eadb] rounded-[2.5rem] p-8 md:p-12 mb-20">
          <h2 className="text-4xl font-bold mb-6">Съвет преди тръгване</h2>

          <p className="text-lg text-[#e5d3b8] leading-relaxed max-w-4xl">
            {tip}
          </p>
        </section>
      </section>

      <SiteFooter description="Маршрути, карти и безопасност сред природата в България." />
    </main>
  );
}
