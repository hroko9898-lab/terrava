export const metadata = {
  title: "Всички маршрути | Terrava",
  description:
    "Разгледай всички маршрути в Terrava — Рила, Пирин, Родопи, Стара планина, Витоша и Странджа.",
};

const routeGroups = [
  {
    mountain: "Рила",
    routes: [
      {
        title: "Седемте рилски езера",
        difficulty: "Средно",
        time: "3–5 часа",
        link: "/mountains/rila/seven-rila-lakes",
      },
      {
        title: "Мусала",
        difficulty: "Трудно",
        time: "6–8 часа",
        link: "/mountains/rila/musala",
      },
      {
        title: "Мальовица",
        difficulty: "Трудно",
        time: "5–7 часа",
        link: "/mountains/rila/malyovitsa",
      },
    ],
  },
  {
    mountain: "Пирин",
    routes: [
      {
        title: "Вихрен",
        difficulty: "Трудно",
        time: "5–7 часа",
        link: "/mountains/pirin/vihren",
      },
      {
        title: "Безбог и Попово езеро",
        difficulty: "Средно",
        time: "4–6 часа",
        link: "/mountains/pirin/bezbog-popovo-ezero",
      },
      {
        title: "Кончето",
        difficulty: "Много трудно",
        time: "7+ часа",
        link: "/mountains/pirin/koncheto",
      },
    ],
  },
  {
    mountain: "Родопи",
    routes: [
      {
        title: "Ягодинска пещера и Орлово око",
        difficulty: "Лесно / Средно",
        time: "2–4 часа",
        link: "/mountains/rodopi/yagodinska-peshtera-orlovo-oko",
      },
      {
        title: "Дяволското гърло",
        difficulty: "Лесно",
        time: "1–2 часа",
        link: "/mountains/rodopi/dyavolskoto-garlo",
      },
      {
        title: "Триградско ждрело",
        difficulty: "Лесно",
        time: "1–3 часа",
        link: "/mountains/rodopi/trigradsko-zhdrelo",
      },
    ],
  },
  {
    mountain: "Стара планина",
    routes: [
      {
        title: "Връх Ботев",
        difficulty: "Трудно",
        time: "7+ часа",
        link: "/mountains/stara-planina/vrah-botev",
      },
      {
        title: "Райското пръскало",
        difficulty: "Средно / Трудно",
        time: "4–6 часа",
        link: "/mountains/stara-planina/rayskoto-praskalo",
      },
      {
        title: "Ком–Емине участък",
        difficulty: "Средно / Трудно",
        time: "Зависи",
        link: "/mountains/stara-planina/kom-emine",
      },
    ],
  },
  {
    mountain: "Витоша",
    routes: [
      {
        title: "Черни връх",
        difficulty: "Лесно / Средно",
        time: "2–4 часа",
        link: "/mountains/vitosha/cherni-vrah",
      },
      {
        title: "Златните мостове",
        difficulty: "Лесно",
        time: "1–3 часа",
        link: "/mountains/vitosha/zlatnite-mostove",
      },
      {
        title: "Камен дел",
        difficulty: "Лесно",
        time: "2–3 часа",
        link: "/mountains/vitosha/kamen-del",
      },
    ],
  },
  {
    mountain: "Странджа",
    routes: [
      {
        title: "Мишкова нива и Голямо Градище",
        difficulty: "Лесно / Средно",
        time: "2–4 часа",
        link: "/mountains/strandzha/mishkova-niva-golyamo-gradishte",
      },
      {
        title: "Бръшлян",
        difficulty: "Лесно",
        time: "1–3 часа",
        link: "/mountains/strandzha/brashlyan",
      },
      {
        title: "Индипасха",
        difficulty: "Лесно / Средно",
        time: "2–4 часа",
        link: "/mountains/strandzha/indipasha",
      },
    ],
  },
];

export default function RoutesPage() {
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
        Terrava • Маршрути
      </p>

      <section className="max-w-5xl mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Всички маршрути
        </h1>

        <p className="text-xl md:text-2xl text-[#6b4b32] leading-relaxed">
          Разгледай маршрутите в Terrava по планини. Всеки маршрут има собствена
          страница с трудност, време, достъп, интересни места и съвети за безопасност.
        </p>
      </section>

      <section className="space-y-14">
        {routeGroups.map((group) => (
          <div key={group.mountain}>
            <h2 className="text-4xl font-bold mb-6">
              {group.mountain}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {group.routes.map((route) => (
                <a
                  key={route.title}
                  href={route.link}
                  className="block bg-[#eadcc7] rounded-3xl p-7 border border-[#d6c3aa] hover:shadow-2xl transition"
                >
                  <span className="inline-block bg-[#3b2416] text-[#f3eadb] px-4 py-2 rounded-full text-sm font-semibold mb-5">
                    {route.difficulty}
                  </span>

                  <h3 className="text-2xl font-bold mb-4">
                    {route.title}
                  </h3>

                  <p className="text-[#6b4b32] mb-6">
                    Време: {route.time}
                  </p>

                  <span className="font-semibold text-[#3b2416]">
                    Виж маршрута →
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer className="mt-40 pt-12 border-t border-[#d6c3aa]">
        <img
          src="/terrava-logo.png"
          alt="Terrava"
          className="h-10 w-auto mb-3"
        />

        <p className="text-[#6b4b32] max-w-md">
          Всички маршрути в Terrava — планини, карти и безопасност сред природата.
        </p>

        <p className="text-sm text-[#7a5a3a] mt-10">
          © 2026 Terrava. Всички права запазени.
        </p>
      </footer>
    </main>
  );
}