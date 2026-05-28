export const metadata = {
  title: "Кончето | Маршрут в Пирин | Terrava",
  description:
    "Маршрут до Кончето в Пирин с информация за трудност, достъп, гледки и безопасност.",
};

export default function KonchetoPage() {
  return (
    <main className="min-h-screen bg-[#f3eadb] text-[#3b2416] px-6 py-12 md:px-20 md:py-20">
      <div className="mb-10">
        <a
          href="/mountains/pirin"
          className="inline-block border border-[#3b2416] px-5 py-3 rounded-full"
        >
          ← Назад към Пирин
        </a>
      </div>

      <p className="uppercase tracking-[0.3em] text-sm mb-8 text-[#7a5a3a]">
        Пирин • Маршрут
      </p>

      <section className="max-w-5xl mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Кончето
        </h1>

        <p className="text-xl md:text-2xl text-[#6b4b32] leading-relaxed">
          Кончето е един от най-драматичните и известни ръбове в Пирин.
          Това не е маршрут за начинаещи — изисква опит, стабилна подготовка,
          добра ориентация и подходящи условия.
        </p>
      </section>

      <section className="grid md:grid-cols-4 gap-6 mb-20">
        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Трудност</h2>
          <p className="text-[#6b4b32]">Много трудно</p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Време</h2>
          <p className="text-[#6b4b32]">7+ часа</p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Достъп</h2>
          <p className="text-[#6b4b32]">
            С кола само до начална точка, после дълъг планински преход
          </p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Подходящо за</h2>
          <p className="text-[#6b4b32]">Опитни туристи</p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8 mb-20">
        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <h2 className="text-3xl font-bold mb-6">
            Какво ще видиш
          </h2>

          <ul className="space-y-4 text-[#6b4b32] text-lg">
            <li>Един от най-известните ръбове в Пирин</li>
            <li>Драматични гледки към мраморното било</li>
            <li>Високопланински терен и открити участъци</li>
            <li>Силно алпийско усещане и панорами</li>
          </ul>
        </div>

        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <h2 className="text-3xl font-bold mb-6">
            Внимавай за
          </h2>

          <ul className="space-y-4 text-[#6b4b32] text-lg">
            <li>Открити и тесни участъци</li>
            <li>Страх от височини</li>
            <li>Силен вятър и мъгла</li>
            <li>Грешна преценка на времето и умора</li>
          </ul>
        </div>
      </section>

      <section className="bg-[#3b2416] text-[#f3eadb] rounded-[2.5rem] p-8 md:p-12 mb-20">
        <h2 className="text-4xl font-bold mb-6">
          Съвет преди тръгване
        </h2>

        <p className="text-lg text-[#e5d3b8] leading-relaxed max-w-4xl">
          Не тръгвай към Кончето без опит и добра подготовка. Провери прогнозата,
          избягвай мъгла, буря и силен вятър, и не подценявай откритите участъци.
          Ако не си сигурен, избери по-лек маршрут в Пирин.
        </p>
      </section>

      <footer className="mt-24 pt-12 border-t border-[#d6c3aa]">
        <img
          src="/terrava-logo.png"
          alt="Terrava"
          className="h-10 w-auto mb-3"
        />

        <p className="text-[#6b4b32] max-w-md">
          Маршрути, карти и безопасност сред природата в България.
        </p>

        <p className="text-sm text-[#7a5a3a] mt-10">
          © 2026 Terrava. Всички права запазени.
        </p>
      </footer>
    </main>
  );
}