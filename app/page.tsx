import HomeLeafDecor from "./components/HomeLeafDecor";
import SiteFooter from "./components/SiteFooter";
import SiteNav from "./components/SiteNav";
import TerravaMap from "./components/TerravaMap";

const mountains = [
  {
    name: "Рила",
    slug: "rila",
    image: "/mountains/rila.jpg",
    tag: "Висока планина",
  },
  {
    name: "Пирин",
    slug: "pirin",
    image: "/mountains/pirin.jpg",
    tag: "Алпийски върхове",
  },
  {
    name: "Родопи",
    slug: "rodopi",
    image: "/mountains/rodopi.jpg",
    tag: "Пещери и легенди",
  },
  {
    name: "Стара планина",
    slug: "stara-planina",
    image: "/mountains/stara-planina.jpg",
    tag: "Дълги маршрути",
  },
  {
    name: "Витоша",
    slug: "vitosha",
    image: "/mountains/vitosha.jpg",
    tag: "Близо до София",
  },
  {
    name: "Странджа",
    slug: "strandzha",
    image: "/mountains/strandzha.jpg",
    tag: "Диви гори",
  },
];

export default function Home() {
  return (
    <main className="home-page relative min-h-screen bg-[#f3eadb] text-[#3b2416] overflow-x-hidden">
      <HomeLeafDecor />
      <div className="relative z-[1]">
      <section className="px-6 py-8 max-w-7xl mx-auto">
        <SiteNav mountainsHref="#mountains" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm mb-6 text-[#7a5a3a]">
              Планини • Пътеки • Диви места
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-none mb-8">
              Открий дивата България.
            </h2>

            <p className="text-xl text-[#6b4b32] max-w-xl mb-10 leading-relaxed">
              Terrava е дигитален пътеводител за планини, горски пътеки,
              скрити места, интерактивни карти и съвети за безопасност сред
              природата.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#mountains"
                className="bg-[#3b2416] text-[#f3eadb] px-7 py-4 rounded-full font-semibold text-center"
              >
                Разгледай планините
              </a>

              <a
                href="/routes"
                className="bg-[#7a5a3a] text-[#f3eadb] px-7 py-4 rounded-full font-semibold text-center"
              >
                Виж всички маршрути
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

                <h3 className="text-3xl font-bold">Интерактивна карта</h3>
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
            <h3 className="text-2xl font-bold mb-4">1. Избери планина</h3>

            <p className="text-[#6b4b32]">
              Разгледай планините в България и избери район за преход.
            </p>
          </div>

          <div className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]">
            <h3 className="text-2xl font-bold mb-4">2. Провери риска</h3>

            <p className="text-[#6b4b32]">
              Виж за какви животни, терен и условия трябва да внимаваш.
            </p>
          </div>

          <div className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]">
            <h3 className="text-2xl font-bold mb-4">3. Следвай картата</h3>

            <p className="text-[#6b4b32]">
              Използвай интерактивната карта с топографски слоеве, пътеки и
              GPS позиция за по-добра ориентация.
            </p>
          </div>
        </div>
      </section>

      <section id="mountains" className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Планини в България</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {mountains.map((mountain) => (
            <a
              key={mountain.name}
              href={`/mountains/${mountain.slug}`}
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
                    {mountain.tag}
                  </span>

                  <h3 className="text-3xl font-bold">{mountain.name}</h3>
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
            Terrava събира полезна информация за райони, в които е възможно да
            има мечки, вълци, глигани, змии и други рискове при преход — заедно
            с практични съвети преди тръгване.
          </p>

          <a
            href="/safety"
            className="inline-block bg-[#f3eadb] text-[#3b2416] px-7 py-4 rounded-full font-semibold"
          >
            Научи повече
          </a>
        </div>
      </section>

      <SiteFooter />
      </div>
    </main>
  );
}
