import HomeLeafDecor from "../components/HomeLeafDecor";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

const mountains = [
  {
    name: "Рила",
    slug: "rila",
    image: "/mountains/rila.jpg",
    tag: "Висока планина",
    text: "Мусала, Седемте рилски езера, Мальовица и високи била.",
  },
  {
    name: "Пирин",
    slug: "pirin",
    image: "/mountains/pirin.jpg",
    tag: "Алпийски върхове",
    text: "Вихрен, Кончето, ледникови езера и сурови гранитни ридове.",
  },
  {
    name: "Родопи",
    slug: "rodopi",
    image: "/mountains/rodopi.jpg",
    tag: "Пещери и легенди",
    text: "Ждрела, панорамни площадки, вековни гори и скрити села.",
  },
  {
    name: "Стара планина",
    slug: "stara-planina",
    image: "/mountains/stara-planina.jpg",
    tag: "Дълги маршрути",
    text: "Ком–Емине, връх Ботев, Райското пръскало и дълги била.",
  },
  {
    name: "Витоша",
    slug: "vitosha",
    image: "/mountains/vitosha.jpg",
    tag: "Близо до София",
    text: "Черни връх, Златните мостове и лесен достъп за еднодневен преход.",
  },
  {
    name: "Странджа",
    slug: "strandzha",
    image: "/mountains/strandzha.jpg",
    tag: "Диви гори",
    text: "Тихи пътеки, реки, древни светилища и близост до морето.",
  },
];

export const metadata = {
  title: "Планини в България | Terrava",
  description:
    "Разгледай планини в България, маршрути, върхове, хижи и важна информация за безопасност.",
};

export default function MountainsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f3eadb] text-[#3b2416]">
      <HomeLeafDecor />

      <div className="relative z-[1]">
        <section className="mx-auto max-w-7xl px-6 py-8">
          <SiteNav mountainsHref="/mountains" />

          <div className="mb-14 max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#7a5a3a]">
              Избери планина
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-none md:text-7xl">
              Планини в България.
            </h1>

            <p className="text-lg leading-relaxed text-[#6b4b32] md:text-xl">
              Избери район и разгледай маршрути, върхове, хижи, диви места и
              важна информация за безопасността преди преход.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mountains.map((mountain) => (
              <a
                key={mountain.slug}
                href={`/mountains/${mountain.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-[#d6c3aa] bg-[#eadcc7] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <img
                  src={mountain.image}
                  alt={mountain.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-7">
                  <span className="mb-4 inline-block rounded-full bg-[#3b2416] px-4 py-2 text-sm font-semibold text-[#f3eadb]">
                    {mountain.tag}
                  </span>

                  <h2 className="mb-3 text-3xl font-bold">
                    {mountain.name}
                  </h2>

                  <p className="leading-relaxed text-[#6b4b32]">
                    {mountain.text}
                  </p>

                  <span className="mt-6 inline-block font-semibold text-[#3b2416]">
                    Разгледай планината →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}