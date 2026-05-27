export default function MapPage() {
  return (
    <main className="min-h-screen bg-[#f3eadb] text-[#3b2416] px-6 py-12 md:px-20 md:py-20">
      <div className="mb-10">
        <a
          href="/"
          className="inline-block border border-[#3b2416] px-5 py-3 rounded-full"
        >
          ← Назад
        </a>
      </div>

      <p className="uppercase tracking-[0.3em] text-sm mb-8 text-[#7a5a3a]">
        Terrava • Карта
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mb-8">
        Карта на България
      </h1>

      <p className="text-xl max-w-3xl text-[#6b4b32] mb-12">
        Тук ще добавим интерактивна карта с планини, пътеки,
        хижи, върхове, GPS позиция и топографски слоеве.
      </p>

     <div className="bg-[#d8c5a8] rounded-[2.5rem] p-6 shadow-xl mb-20">
  <iframe
    src="https://www.openstreetmap.org/export/embed.html?bbox=22.34%2C41.23%2C28.61%2C44.22&layer=mapnik&marker=42.7339%2C25.4858"
    className="h-[520px] w-full rounded-[2rem] border-0"
  ></iframe>
</div>
<section className="mt-20 grid md:grid-cols-3 gap-8">
  <div className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]">
    <h2 className="text-2xl font-bold mb-4">
      Планини
    </h2>

    <p className="text-[#6b4b32]">
      Скоро тук ще има маркери за Рила, Пирин, Родопи, Стара планина, Витоша и Странджа.
    </p>
  </div>

  <div className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]">
    <h2 className="text-2xl font-bold mb-4">
      Топографски слоеве
    </h2>

    <p className="text-[#6b4b32]">
      Ще добавим релеф, пътеки, върхове, хижи и терен за по-добра ориентация.
    </p>
  </div>

  <div className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]">
    <h2 className="text-2xl font-bold mb-4">
      GPS позиция
    </h2>

    <p className="text-[#6b4b32]">
      В бъдеща версия ще има бутон “Покажи къде съм” за ориентиране на терен.
    </p>
  </div>
</section>
<footer className="mt-40 pt-12 border-t border-[#d6c3aa]">
  <div className="flex flex-col md:flex-row justify-between gap-6">
    <div>
      <h2 className="text-2xl font-bold mb-3">Terrava Map</h2>
      <p className="text-[#6b4b32] max-w-md">
        Карта за планини, маршрути, терен и GPS ориентация в България.
      </p>
    </div>

    <div className="flex gap-6 text-sm font-medium">
      <a href="/">Начало</a>
      <a href="/safety">Безопасност</a>
      <a href="/about">За нас</a>
    </div>
  </div>
  <p className="text-sm text-[#7a5a3a] mt-10">
  © 2026 Terrava. Всички права запазени.
</p>
</footer>
    </main>
  );
}