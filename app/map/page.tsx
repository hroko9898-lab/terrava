import TerravaMap from "../components/TerravaMap";
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
  Използвай картата, за да разгледаш планините, пешеходните маршрути,
  топографските слоеве и своето местоположение в България.
</p>

     <div className="bg-[#d8c5a8] rounded-[2.5rem] p-6 shadow-xl mb-20">
  <TerravaMap />
</div>
<section className="mt-20">
  <p className="uppercase tracking-[0.3em] text-sm mb-6 text-[#7a5a3a]">
    Функции
  </p>

  <h2 className="text-4xl font-bold mb-10">
    Какво можеш да правиш с картата
  </h2>

  <div className="grid md:grid-cols-4 gap-6">
    <div className="bg-[#eadcc7] rounded-3xl p-7 border border-[#d6c3aa]">
      <h3 className="text-2xl font-bold mb-4">Планински маркери</h3>
      <p className="text-[#6b4b32]">
        Натисни маркер на картата, за да отвориш страницата на съответната планина.
      </p>
    </div>

    <div className="bg-[#eadcc7] rounded-3xl p-7 border border-[#d6c3aa]">
      <h3 className="text-2xl font-bold mb-4">Топографски слой</h3>
      <p className="text-[#6b4b32]">
        Превключи към топографска карта, за да видиш релефа и планинския терен.
      </p>
    </div>

    <div className="bg-[#eadcc7] rounded-3xl p-7 border border-[#d6c3aa]">
      <h3 className="text-2xl font-bold mb-4">Пешеходни маршрути</h3>
      <p className="text-[#6b4b32]">
        Включи слоя с пътеки, за да видиш основните туристически маршрути.
      </p>
    </div>

    <div className="bg-[#eadcc7] rounded-3xl p-7 border border-[#d6c3aa]">
      <h3 className="text-2xl font-bold mb-4">GPS позиция</h3>
      <p className="text-[#6b4b32]">
        Използвай бутона “Покажи къде съм”, за да видиш текущото си местоположение.
      </p>
    </div>
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