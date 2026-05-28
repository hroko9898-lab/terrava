import TerravaMap from "./components/TerravaMap";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3eadb] text-[#3b2416] overflow-x-hidden">
      <section className="px-6 py-8 max-w-7xl mx-auto">
     <nav className="flex items-center justify-between mb-20 relative z-[9999]">
 <div className="bg-[#f3eadb] rounded-2xl px-2 py-1 inline-flex items-center">
  <img
    src="/terrava-logo.png"
    alt="Terrava"
    className="h-9 w-auto"
  />
</div>

  <details className="relative">
  <summary className="bg-[#3b2416] text-[#f3eadb] w-[170px] h-[64px] md:w-[260px] md:h-[90px] rounded-full text-lg md:text-2xl font-bold cursor-pointer shadow-xl flex items-center justify-center">
  Меню
</summary>

  <div className="absolute right-0 mt-5 w-80 bg-[#eadcc7] rounded-3xl p-5 shadow-xl flex flex-col gap-3 z-[9999]">
    <a href="#mountains" className="bg-[#f3eadb] rounded-2xl px-6 py-4 font-semibold">
      Планини
    </a>

    <a href="/map" className="bg-[#f3eadb] rounded-2xl px-6 py-4 font-semibold">
      Карта
    </a>

    <a href="/safety" className="bg-[#f3eadb] rounded-2xl px-6 py-4 font-semibold">
      Безопасност
    </a>

    <a href="/about" className="bg-[#f3eadb] rounded-2xl px-6 py-4 font-semibold">
      За нас
    </a>
  </div>
</details>
</nav>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm mb-6 text-[#7a5a3a]">
              Планини • Пътеки • Диви места
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-none mb-8">
              Открий дивата България.
            </h2>

            <p className="text-xl text-[#6b4b32] max-w-xl mb-10 leading-relaxed">
              Terrava е бъдещ пътеводител за планини, горски пътеки,
              скрити места, топографски карти и съвети за безопасност сред природата.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#mountains"
                className="bg-[#3b2416] text-[#f3eadb] px-7 py-4 rounded-full font-semibold text-center"
              >
                Разгледай планините
              </a>

              <a
                href="/map"
                className="border border-[#3b2416] px-7 py-4 rounded-full font-semibold text-center"
              >
                Виж картата
              </a>
            </div>
          </div>

<div className="bg-[#d8c5a8] rounded-[2.5rem] p-5 shadow-2xl border border-[#c8b28f]">
  <div className="mb-5 flex flex-col gap-4">
    <div>
      <p className="uppercase tracking-[0.3em] text-xs mb-2 text-[#7a5a3a]">
        Live map
      </p>

      <h3 className="text-3xl font-bold">
        Интерактивна карта
      </h3>
    </div>

    <div className="flex flex-wrap gap-2 text-sm font-semibold">
      <span className="bg-[#f3eadb] px-4 py-2 rounded-full">
        Нормална карта
      </span>

      <span className="bg-[#f3eadb] px-4 py-2 rounded-full">
        Топографска
      </span>

      <span className="bg-[#f3eadb] px-4 py-2 rounded-full">
        Пътеки
      </span>
    </div>
  </div>

  <TerravaMap />

  <a
    href="/map"
    className="mt-5 block text-center bg-[#3b2416] text-[#f3eadb] px-6 py-4 rounded-full font-semibold"
  >
    Отвори голямата карта
  </a>
</div>
        </div>
      </section>
<section className="px-6 py-20 max-w-7xl mx-auto">
  <p className="uppercase tracking-[0.3em] text-sm mb-6 text-[#7a5a3a]">
    Как работи
  </p>

  <h2 className="text-4xl md:text-5xl font-bold mb-12">
    Планирай прехода си по-умно.
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]">
      <h3 className="text-2xl font-bold mb-4">
        1. Избери планина
      </h3>

      <p className="text-[#6b4b32]">
        Разгледай планините в България и избери район за преход.
      </p>
    </div>

    <div className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]">
      <h3 className="text-2xl font-bold mb-4">
        2. Провери риска
      </h3>

      <p className="text-[#6b4b32]">
        Виж за какви животни, терен и условия трябва да внимаваш.
      </p>
    </div>

    <div className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]">
      <h3 className="text-2xl font-bold mb-4">
        3. Следвай картата
      </h3>

      <p className="text-[#6b4b32]">
        Скоро ще добавим карта, GPS и топографски слоеве за по-добра ориентация.
      </p>
    </div>
  </div>
</section>
      <section id="mountains" className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Планини в България</h2>
<div className="grid md:grid-cols-3 gap-6">
  {[
    {
      name: "Рила",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      name: "Пирин",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      name: "Родопи",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    },
    {
      name: "Стара планина",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969",
    },
    {
      name: "Витоша",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      name: "Странджа",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
  ].map((mountain) => (
    
     <a
 href={
  mountain.name === "Рила"
    ? "/mountains/rila"
    : mountain.name === "Пирин"
    ? "/mountains/pirin"
    : mountain.name === "Родопи"
    ? "/mountains/rodopi"
    : mountain.name === "Стара планина"
    ? "/mountains/stara-planina"
    : mountain.name === "Витоша"
    ? "/mountains/vitosha"
    : mountain.name === "Странджа"
    ? "/mountains/strandzha"
    : "#"
}
  key={mountain.name}
className="group overflow-hidden rounded-[2rem] bg-[#eadcc7] border border-[#d6c3aa] shadow-lg hover:shadow-2xl transition duration-300"
>
    
      <img
        src={mountain.image}
        alt={mountain.name}
       className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
      />

     <div className="p-7">
       <div className="mb-4">
  <span className="inline-block bg-[#3b2416] text-[#f3eadb] px-4 py-2 rounded-full text-sm font-semibold mb-4">
    {mountain.name === "Рила"
      ? "Висока планина"
      : mountain.name === "Пирин"
      ? "Алпийски върхове"
      : mountain.name === "Родопи"
      ? "Пещери и легенди"
      : mountain.name === "Стара планина"
      ? "Дълги маршрути"
      : mountain.name === "Витоша"
      ? "Близо до София"
      : mountain.name === "Странджа"
      ? "Диви гори"
      : "Планина"}
  </span>

  <h3 className="text-3xl font-bold">
    {mountain.name}
  </h3>
</div>
        <p className="text-[#6b4b32]">
          Маршрути, върхове, хижи и диви места.
        </p>
      </div>
    </a>
  ))}
</div>
      </section>

      <section id="safety" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="bg-[#3b2416] text-[#f3eadb] rounded-[2.5rem] p-10 md:p-16">
          <h2 className="text-4xl font-bold mb-6">Безопасност в природата</h2>

          <p className="text-lg text-[#e5d3b8] max-w-3xl mb-8">
            В бъдещата версия Terrava ще показва полезна информация за райони,
            в които е възможно да има мечки, вълци, глигани, змии и други
            рискове при преход.
          </p>

          <button className="bg-[#f3eadb] text-[#3b2416] px-7 py-4 rounded-full font-semibold">
            Научи повече
          </button>
        </div>
      </section>
      <footer className="px-6 py-12 max-w-7xl mx-auto border-t border-[#d6c3aa]">
  <div className="flex flex-col md:flex-row justify-between gap-6">
    <div>
      <h2 className="text-2xl font-bold mb-3">Terrava</h2>
      <p className="text-[#6b4b32] max-w-md">
        Български пътеводител за планини, пътеки, диви места и безопасност сред природата.
      </p>
    </div>

    <div className="flex gap-6 text-sm font-medium">
      <a href="#mountains">Планини</a>
      <a href="/map">Карта</a>
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