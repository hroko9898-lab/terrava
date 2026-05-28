export default function SafetyPage() {
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
        Terrava • Безопасност
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mb-8">
        Безопасност в природата
      </h1>

      <p className="text-xl max-w-4xl text-[#6b4b32] mb-14">
        Преди всеки преход провери времето, избери маршрут според подготовката си,
        кажи на близък къде отиваш и носи основна екипировка. При реална опасност
        в България подай сигнал на 112 и дай възможно най-точна локация.
      </p>

      <section className="bg-[#3b2416] text-[#f3eadb] rounded-[2.5rem] p-8 md:p-12 mb-20">
        <p className="uppercase tracking-[0.3em] text-sm mb-5 text-[#e5d3b8]">
          Спешно
        </p>

        <h2 className="text-4xl font-bold mb-6">
          Ако има инцидент
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#4b2e1d] rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-3">1. Запази спокойствие</h3>
            <p className="text-[#e5d3b8]">
              Спри, прецени ситуацията и не рискувай допълнително движение, ако теренът е опасен.
            </p>
          </div>

          <div className="bg-[#4b2e1d] rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-3">2. Обади се на 112</h3>
            <p className="text-[#e5d3b8]">
              Кажи какво се е случило, колко души сте, има ли пострадал и къде се намирате.
            </p>
          </div>

          <div className="bg-[#4b2e1d] rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-3">3. Изпрати локация</h3>
            <p className="text-[#e5d3b8]">
              Използвай GPS координати, карта или приложение, за да дадеш възможно най-точно местоположение.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <p className="uppercase tracking-[0.3em] text-sm mb-6 text-[#7a5a3a]">
          Подготовка
        </p>

        <h2 className="text-4xl font-bold mb-10">
          Преди да тръгнеш
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Провери прогнозата",
              text: "Не тръгвай при буря, силен вятър, мъгла или риск от рязко влошаване на времето.",
            },
            {
              title: "Избери реалистичен маршрут",
              text: "Съобрази маршрута с опита, физическата подготовка и светлата част на деня.",
            },
            {
              title: "Кажи на някого къде отиваш",
              text: "Остави информация за маршрута, началната точка и кога очакваш да се върнеш.",
            },
            {
              title: "Не разчитай само на телефона",
              text: "Носи зареден телефон, power bank, но имай и офлайн карта или ясен план за ориентация.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-[#6b4b32]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <p className="uppercase tracking-[0.3em] text-sm mb-6 text-[#7a5a3a]">
          Екипировка
        </p>

        <h2 className="text-4xl font-bold mb-10">
          Какво да носиш
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Вода",
            "Храна",
            "Челник",
            "Power bank",
            "Връхна дреха",
            "Аптечка",
            "Карта / GPS",
            "Удобни обувки",
          ].map((item) => (
            <div
              key={item}
              className="bg-[#eadcc7] rounded-3xl p-6 border border-[#d6c3aa] text-center font-bold"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <p className="uppercase tracking-[0.3em] text-sm mb-6 text-[#7a5a3a]">
          Диви животни
        </p>

        <h2 className="text-4xl font-bold mb-10">
          Как да реагираш
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Мечка",
              text: "Не се приближавай, не я храни и не я заграждай. Отдръпни се спокойно и остави път за оттегляне.",
            },
            {
              title: "Вълк",
              text: "Обикновено избягва хората. Запази спокойствие, не тичай и се движи уверено към безопасна посока.",
            },
            {
              title: "Глиган",
              text: "Не се приближавай, особено ако има малки. Дай му пространство и не го провокирай.",
            },
            {
              title: "Змия",
              text: "Гледай къде стъпваш, носи стабилни обувки и не пипай змия, дори да изглежда спокойна.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-[#6b4b32]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <p className="uppercase tracking-[0.3em] text-sm mb-6 text-[#7a5a3a]">
          Кърлежи и насекоми
        </p>

        <h2 className="text-4xl font-bold mb-10">
          След прехода също внимавай
        </h2>

        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">Стой по пътеката</h3>
              <p className="text-[#6b4b32]">
                Избягвай висока трева, гъсти храсти и места с много листна маса.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Провери тялото си</h3>
              <p className="text-[#6b4b32]">
                След разходка огледай дрехите, обувките и тялото си, особено след горски маршрути.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Следи симптоми</h3>
              <p className="text-[#6b4b32]">
                При обрив, температура или неразположение след ухапване потърси лекар.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-40 pt-12 border-t border-[#d6c3aa]">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-3">Terrava Safety</h2>
            <p className="text-[#6b4b32] max-w-md">
              Съвети за безопасност, диви животни, време и подготовка преди преход.
            </p>
          </div>

          <div className="flex gap-6 text-sm font-medium">
            <a href="/">Начало</a>
            <a href="/map">Карта</a>
            <a href="/about">За нас</a>
          </div>
        </div>

        <p className="text-sm text-[#7a5a3a] mt-10">
          © 2026 Terrava. Всички права запазени.
        </p>
      </footer>
    </main>
  );
}