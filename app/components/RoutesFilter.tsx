"use client";

import { useState } from "react";

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

const filters = ["Всички", "Лесно", "Средно", "Трудно", "Много трудно"];

export default function RoutesFilter() {
  const [activeFilter, setActiveFilter] = useState("Всички");

  const filteredGroups = routeGroups
    .map((group) => ({
      ...group,
      routes:
        activeFilter === "Всички"
          ? group.routes
          : group.routes.filter((route) =>
              route.difficulty.includes(activeFilter)
            ),
    }))
    .filter((group) => group.routes.length > 0);

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-14">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-3 rounded-full font-semibold transition ${
              activeFilter === filter
                ? "bg-[#3b2416] text-[#f3eadb]"
                : "bg-[#eadcc7] text-[#3b2416] border border-[#d6c3aa]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <section className="space-y-14">
        {filteredGroups.map((group) => (
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
    </>
  );
}