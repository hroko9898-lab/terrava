import RoutesFilter from "../components/RoutesFilter";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export const metadata = {
  title: "Всички маршрути | Terrava",
  description:
    "Разгледай всички маршрути в Terrava — Рила, Пирин, Родопи, Стара планина, Витоша и Странджа.",
};

export default function RoutesPage() {
  return (
    <main className="min-h-screen bg-[#f3eadb] text-[#3b2416] overflow-x-hidden">
      <section className="px-6 py-8 max-w-7xl mx-auto">
        <SiteNav />

        <div className="mb-10">
          <a
            href="/"
            className="inline-block border border-[#3b2416] px-5 py-3 rounded-full"
          >
            ← Назад
          </a>
        </div>

        <p className="uppercase tracking-[0.3em] text-sm mb-8 text-[#7a5a3a]">
          Terrava • Маршрути
        </p>

        <section className="max-w-5xl mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Всички маршрути
          </h1>

          <p className="text-xl md:text-2xl text-[#6b4b32] leading-relaxed">
            Разгледай маршрутите в Terrava по планини. Всеки маршрут има
            собствена страница с трудност, време, достъп, интересни места и
            съвети за безопасност.
          </p>
        </section>

        <div className="bg-[#eadcc7] border border-[#d6c3aa] rounded-3xl p-6 mb-10">
          <p className="text-2xl font-bold mb-2">18 маршрута в 6 планини.</p>

          <p className="text-[#6b4b32]">
            Избери трудност според подготовката си и намери подходящ маршрут
            за следващия си преход.
          </p>
        </div>

        <RoutesFilter />
      </section>

      <SiteFooter description="Всички маршрути в Terrava — планини, карти и безопасност сред природата." />
    </main>
  );
}
