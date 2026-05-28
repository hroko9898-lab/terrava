export const metadata = {
  title: "Ягодинска пещера и Орлово око | Родопи | Terrava",
  description:
    "Маршрут до Ягодинска пещера и Орлово око в Родопите с информация за достъп, трудност, гледки и безопасност.",
};

export default function YagodinskaPeshteraOrlovoOkoPage() {
  return (
    <main className="min-h-screen bg-[#f3eadb] text-[#3b2416] px-6 py-12 md:px-20 md:py-20">
      <div className="mb-10">
        <a
          href="/mountains/rodopi"
          className="inline-block border border-[#3b2416] px-5 py-3 rounded-full"
        >
          ← Назад към Родопи
        </a>
      </div>

      <p className="uppercase tracking-[0.3em] text-sm mb-8 text-[#7a5a3a]">
        Родопи • Маршрут
      </p>

      <section className="max-w-5xl mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Ягодинска пещера и Орлово око
        </h1>

        <p className="text-xl md:text-2xl text-[#6b4b32] leading-relaxed">
          Един от най-популярните маршрути в Родопите, който комбинира пещера,
          панорамна площадка и впечатляващи гледки към Буйновското ждрело.
          Подходящ е за хора, които искат силно преживяване без тежък планински преход.
        </p>
      </section>

      <section className="grid md:grid-cols-4 gap-6 mb-20">
        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Трудност</h2>
          <p className="text-[#6b4b32]">Лесно / Средно</p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Време</h2>
          <p className="text-[#6b4b32]">2–4 часа</p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Достъп</h2>
          <p className="text-[#6b4b32]">С кола до района на Ягодина</p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Подходящо за</h2>
          <p className="text-[#6b4b32]">Разходка, снимки и гледки</p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8 mb-20">
        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <h2 className="text-3xl font-bold mb-6">Какво ще видиш</h2>

          <ul className="space-y-4 text-[#6b4b32] text-lg">
            <li>Ягодинска пещера</li>
            <li>Панорамната площадка Орлово око</li>
            <li>Гледки към Буйновското ждрело</li>
            <li>Родопски пейзажи и скални форми</li>
          </ul>
        </div>

        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <h2 className="text-3xl font-bold mb-6">Внимавай за</h2>

          <ul className="space-y-4 text-[#6b4b32] text-lg">
            <li>Натоварен сезон и много посетители</li>
            <li>Тесни пътища в района</li>
            <li>Височина при панорамната площадка</li>
            <li>Хлъзгави участъци при влажно време</li>
          </ul>
        </div>
      </section>

      <section className="bg-[#3b2416] text-[#f3eadb] rounded-[2.5rem] p-8 md:p-12 mb-20">
        <h2 className="text-4xl font-bold mb-6">
          Съвет преди тръгване
        </h2>

        <p className="text-lg text-[#e5d3b8] leading-relaxed max-w-4xl">
          Провери предварително работното време на пещерата и условията за достъп
          до Орлово око. Ако пътят е натоварен или времето е лошо, планирай повече
          време и не подценявай тесните планински пътища.
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