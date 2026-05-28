type MountainPageProps = {
  name: string;
  description: string;
  color: string;
  cards: {
    title: string;
    text: string;
  }[];
  dangers: string[];
};

export default function MountainPage({
  name,
  description,
  color,
  cards,
  dangers,
}: MountainPageProps) {
  return (
    <main className="min-h-screen bg-[#f3eadb] text-[#3b2416]">
      <section className={`h-[70vh] ${color} flex items-end`}>
        <div className="p-10 md:p-20">
          <div className="mb-10">
            <a
              href="/"
              className="inline-block border border-white text-white px-5 py-3 rounded-full"
            >
              ← Назад
            </a>
          </div>

          <p className="uppercase tracking-[0.3em] text-sm text-white/80 mb-4">
            България • Планини
          </p>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            {name}
          </h1>

          <p className="text-xl text-white/80 max-w-3xl">
            {description}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Какво ще откриеш тук
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#eadcc7] rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                {card.title}
              </h3>

              <p className="text-[#6b4b32]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>
<section className="max-w-7xl mx-auto px-6 pb-20">
  <h2 className="text-4xl font-bold mb-10">
    Популярни маршрути
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        title: "Лесен маршрут",
        time: "2–3 часа",
        difficulty: "Лесно",
      },
      {
        title: "Панорамен преход",
        time: "4–6 часа",
        difficulty: "Средно",
      },
      {
        title: "Див маршрут",
        time: "6+ часа",
        difficulty: "Трудно",
      },
    ].map((route) => (
      <div
        key={route.title}
        className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]"
      >
        <h3 className="text-2xl font-bold mb-4">
          {route.title}
        </h3>

        <p className="text-[#6b4b32] mb-4">
          Време: {route.time}
        </p>

        <span className="inline-block bg-[#3b2416] text-[#f3eadb] px-4 py-2 rounded-full text-sm font-semibold">
          {route.difficulty}
        </span>
      </div>
    ))}
  </div>
</section>
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold mb-10">
          Внимавай за
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {dangers.map((danger) => (
            <div
              key={danger}
              className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]"
            >
              <h3 className="text-2xl font-bold mb-3">
                {danger}
              </h3>

              <p className="text-[#6b4b32]">
                Възможен риск при преходи в гористи, диви и слабо посещавани райони.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}