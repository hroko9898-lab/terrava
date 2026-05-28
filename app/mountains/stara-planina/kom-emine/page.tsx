export const metadata = {
  title: "Ком–Емине | Маршрут в Стара планина | Terrava",
  description:
    "Ком–Емине участък в Стара планина с информация за трудност, достъп, гледки и безопасност.",
};

export default function KomEminePage() {
  return (
    <main className="min-h-screen bg-[#f3eadb] text-[#3b2416] px-6 py-12 md:px-20 md:py-20">
      <div className="mb-10">
        <a
          href="/mountains/stara-planina"
          className="inline-block border border-[#3b2416] px-5 py-3 rounded-full"
        >
          ← Назад към Стара планина
        </a>
      </div>

      <p className="uppercase tracking-[0.3em] text-sm mb-8 text-[#7a5a3a]">
        Стара планина • Маршрут
      </p>

      <section className="max-w-5xl mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Ком–Емине участък
        </h1>

        <p className="text-xl md:text-2xl text-[#6b4b32] leading-relaxed">
          Ком–Емине е най-известният дълъг планински маршрут в България. Вместо
          да се минава наведнъж, за повечето туристи е по-разумно да се избере
          отделен участък според подготовката, времето и наличните хижи.
        </p>
      </section>

      <section className="grid md:grid-cols-4 gap-6 mb-20">
        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Трудност</h2>
          <p className="text-[#6b4b32]">Средно / Трудно</p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Време</h2>
          <p className="text-[#6b4b32]">Зависи от участъка</p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Достъп</h2>
          <p className="text-[#6b4b32]">
            С кола до избраната начална точка
          </p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Подходящо за</h2>
          <p className="text-[#6b4b32]">Туристи с опит в по-дълги преходи</p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8 mb-20">
        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <h2 className="text-3xl font-bold mb-6">Какво ще видиш</h2>

          <ul className="space-y-4 text-[#6b4b32] text-lg">
            <li>Билни маршрути в Стара планина</li>
            <li>Хижи, проходи и дълги планински гледки</li>
            <li>Разнообразен терен според избрания участък</li>
            <li>Истинско усещане за дълъг планински преход</li>
          </ul>
        </div>

        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <h2 className="text-3xl font-bold mb-6">Внимавай за</h2>

          <ul className="space-y-4 text-[#6b4b32] text-lg">
            <li>Дълги разстояния между точки за почивка</li>
            <li>Променливо време по билото</li>
            <li>Умора при многочасов преход</li>
            <li>Недобра ориентация при мъгла</li>
          </ul>
        </div>
      </section>

      <section className="bg-[#3b2416] text-[#f3eadb] rounded-[2.5rem] p-8 md:p-12 mb-20">
        <h2 className="text-4xl font-bold mb-6">
          Съвет преди тръгване
        </h2>

        <p className="text-lg text-[#e5d3b8] leading-relaxed max-w-4xl">
          Планирай конкретен участък, а не тръгвай без ясен маршрут. Провери
          къде има хижи, вода, пътища за слизане и мобилен обхват. Носи карта,
          GPS, power bank, връхна дреха и достатъчно храна.
        </p>
      </section>

      <footer className="mt-24 pt-12 border-t border-[#d6c3aa]">
        <img
          src="/terrava-logo.png"
          alt="Terrava"
          className="h-10 w-auto mb-3"
        />

        <p className="text-[#6b4b32] max-w-md">
          Маршрути, карти и безопасност сред природата в България.
        </p>

        <p className="text-sm text-[#7a5a3a] mt-10">
          © 2026 Terrava. Всички права запазени.
        </p>
      </footer>
    </main>
  );
}