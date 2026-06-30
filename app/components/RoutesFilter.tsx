"use client";

import { useState } from "react";
import { routeGroups } from "../data/routes";

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
            <h2 className="text-4xl font-bold mb-6">{group.mountain}</h2>

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

                  <h3 className="text-2xl font-bold mb-4">{route.title}</h3>

                  <p className="text-[#6b4b32] mb-6">Време: {route.time}</p>

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
