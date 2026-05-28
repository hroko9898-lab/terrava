export const metadata = {
  title: "Безбог и Попово езеро | Маршрут в Пирин | Terrava",
  description:
    "Маршрут до Безбог и Попово езеро в Пирин с информация за трудност, време, достъп, гледки и безопасност.",
};

export default function BezbogPopovoEzeroPage() {
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
          Безбог и Попово езеро
        </h1>

        <p className="text-xl md:text-2xl text-[#6b4b32] leading-relaxed">
          Един от най-красивите и по-достъпни маршрути в Пирин. Комбинира лифт,
          езера, открити гледки и високопланинска атмосфера без да е толкова
          екстремен като Вихрен или Кончето.
        </p>
      </section>

      <section className="grid md:grid-cols-4 gap-6 mb-20">
        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Трудност</h2>
          <p className="text-[#6b4b32]">Средно</p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Време</h2>
          <p className="text-[#6b4b32]">4–6 часа</p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Достъп</h2>
          <p className="text-[#6b4b32]">
            С кола до хижа Гоце Делчев, после с лифт към Безбог
          </p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Подходящо за</h2>
          <p className="text-[#6b4b32]">Туристи с нормална подготовка</p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8 mb-20">
        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <h2 className="text-3xl font-bold mb-6">
            Какво ще видиш
          </h2>

          <ul className="space-y-4 text-[#6b4b32] text-lg">
            <li>Безбожко езеро и района около хижа Безбог</li>
            <li>Попово езеро — едно от най-известните езера в Пирин</li>
            <li>Високопланински пейзажи и открити панорами</li>
            <li>По-достъпен маршрут в сравнение с най-тежките пирински преходи</li>
          </ul>
        </div>

        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <h2 className="text-3xl font-bold mb-6">
            Внимавай за
          </h2>

          <ul className="space-y-4 text-[#6b4b32] text-lg">
            <li>Рязка промяна на времето</li>
            <li>Силен вятър по откритите места</li>
            <li>Каменист терен около езерата</li>
            <li>Да не тръгваш късно, особено ако ще се връщаш с лифт</li>
          </ul>
        </div>
      </section>

      <section className="bg-[#3b2416] text-[#f3eadb] rounded-[2.5rem] p-8 md:p-12 mb-20">
        <h2 className="text-4xl font-bold mb-6">
          Съвет преди тръгване
        </h2>

        <p className="text-lg text-[#e5d3b8] leading-relaxed max-w-4xl">
          Провери работното време на лифта, прогнозата и условията в района.
          Носи вода, храна, връхна дреха и удобни обувки. Маршрутът е по-достъпен,
          но все пак е високопланински и не трябва да се подценява.
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