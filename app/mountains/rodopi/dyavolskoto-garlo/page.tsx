export const metadata = {
  title: "Дяволското гърло | Родопи | Terrava",
  description:
    "Маршрут и посещение на Дяволското гърло в Родопите с информация за достъп, трудност, гледки и безопасност.",
};

export default function DyavolskotoGarloPage() {
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
          Дяволското гърло
        </h1>

        <p className="text-xl md:text-2xl text-[#6b4b32] leading-relaxed">
          Дяволското гърло е едно от най-впечатляващите места в Родопите.
          Подходящо е за по-лека разходка и посещение, но вътре в пещерата
          трябва да се внимава за стълби, влажни участъци и по-ниски температури.
        </p>
      </section>

      <section className="grid md:grid-cols-4 gap-6 mb-20">
        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Трудност</h2>
          <p className="text-[#6b4b32]">Лесно</p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Време</h2>
          <p className="text-[#6b4b32]">1–2 часа</p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Достъп</h2>
          <p className="text-[#6b4b32]">С кола до района на Триград</p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Подходящо за</h2>
          <p className="text-[#6b4b32]">Кратка разходка и посещение</p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8 mb-20">
        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <h2 className="text-3xl font-bold mb-6">Какво ще видиш</h2>

          <ul className="space-y-4 text-[#6b4b32] text-lg">
            <li>Пещерата Дяволското гърло</li>
            <li>Впечатляваща подземна зала</li>
            <li>Района на Триград</li>
            <li>Близост до Триградското ждрело</li>
          </ul>
        </div>

        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <h2 className="text-3xl font-bold mb-6">Внимавай за</h2>

          <ul className="space-y-4 text-[#6b4b32] text-lg">
            <li>Влажни и хлъзгави участъци</li>
            <li>Стълби в пещерата</li>
            <li>По-ниска температура вътре</li>
            <li>Много посетители през активния сезон</li>
          </ul>
        </div>
      </section>

      <section className="bg-[#3b2416] text-[#f3eadb] rounded-[2.5rem] p-8 md:p-12 mb-20">
        <h2 className="text-4xl font-bold mb-6">
          Съвет преди тръгване
        </h2>

        <p className="text-lg text-[#e5d3b8] leading-relaxed max-w-4xl">
          Вземи удобни обувки и връхна дреха, защото в пещерите често е по-хладно
          и влажно. Провери работното време предварително, особено извън активния
          туристически сезон.
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