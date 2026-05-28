export const metadata = {
  title: "Райското пръскало | Маршрут в Стара планина | Terrava",
  description:
    "Маршрут до Райското пръскало в Стара планина с информация за трудност, време, достъп, гледки и безопасност.",
};

export default function RayskotoPraskaloPage() {
  return (
    <main className="min-h-screen bg-[#f3eadb] text-[#3b2416] px-6 py-12 md:px-20 md:py-20">
      <div className="mb-10">
        <a
          href="/mountains/stara-planina"
          className="inline-block border border-[#3b2416] px-5 py-3 rounded-full"
        >
          ← Назад към Стара планина
        </a>
      </div>

      <p className="uppercase tracking-[0.3em] text-sm mb-8 text-[#7a5a3a]">
        Стара планина • Маршрут
      </p>

      <section className="max-w-5xl mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Райското пръскало
        </h1>

        <p className="text-xl md:text-2xl text-[#6b4b32] leading-relaxed">
          Райското пръскало е един от най-впечатляващите водопади в България.
          Маршрутът предлага красиви гледки, хижа Рай и усещане за истинска
          Стара планина, но не е просто кратка разходка.
        </p>
      </section>

      <section className="grid md:grid-cols-4 gap-6 mb-20">
        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Трудност</h2>
          <p className="text-[#6b4b32]">Средно / Трудно</p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Време</h2>
          <p className="text-[#6b4b32]">4–6 часа</p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Достъп</h2>
          <p className="text-[#6b4b32]">
            С кола до района на Калофер / Паниците
          </p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa]">
          <h2 className="text-xl font-bold mb-2">Подходящо за</h2>
          <p className="text-[#6b4b32]">Туристи с добра подготовка</p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8 mb-20">
        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <h2 className="text-3xl font-bold mb-6">Какво ще видиш</h2>

          <ul className="space-y-4 text-[#6b4b32] text-lg">
            <li>Райското пръскало</li>
            <li>Хижа Рай</li>
            <li>Гледки към старопланински склонове</li>
            <li>Един от най-красивите райони под връх Ботев</li>
          </ul>
        </div>

        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <h2 className="text-3xl font-bold mb-6">Внимавай за</h2>

          <ul className="space-y-4 text-[#6b4b32] text-lg">
            <li>Изкачване и по-сериозно натоварване</li>
            <li>Хлъзгави участъци след дъжд</li>
            <li>Рязка промяна на времето</li>
            <li>Недостатъчно време за връщане при късно тръгване</li>
          </ul>
        </div>
      </section>

      <section className="bg-[#3b2416] text-[#f3eadb] rounded-[2.5rem] p-8 md:p-12 mb-20">
        <h2 className="text-4xl font-bold mb-6">
          Съвет преди тръгване
        </h2>

        <p className="text-lg text-[#e5d3b8] leading-relaxed max-w-4xl">
          Тръгни рано, носи достатъчно вода, удобни обувки и връхна дреха.
          Маршрутът е красив, но има натоварване и не трябва да се подценява,
          особено при лошо време или мокър терен.
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