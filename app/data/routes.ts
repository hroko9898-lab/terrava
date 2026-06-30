export type RouteListItem = {
  title: string;
  difficulty: string;
  time: string;
  link: string;
};

export type RouteGroup = {
  mountain: string;
  routes: RouteListItem[];
};

export const routeGroups: RouteGroup[] = [
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
