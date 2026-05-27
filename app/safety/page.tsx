export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-[#f3eadb] text-[#3b2416] p-10 md:p-20">
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

      <p className="text-xl max-w-3xl text-[#6b4b32] mb-12">
        Тази страница ще събира важни съвети за диви животни,
        лошо време, изгубване, екипировка и поведение в планината.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Мечки",
            text: "Не се приближавай, не храни животното и не бягай панически. Отдръпни се спокойно.",
          },
          {
            title: "Вълци",
            text: "Обикновено избягват хората, но бъди внимателен при самостоятелни преходи в диви райони.",
          },
          {
            title: "Глигани",
            text: "Особено опасни могат да бъдат майките с малки. Не се приближавай и не ги провокирай.",
          },
          {
            title: "Змии",
            text: "Гледай къде стъпваш, носи високи обувки и не пипай змия, дори да изглежда спокойна.",
          },
          {
            title: "Кърлежи",
            text: "След преход провери дрехите и тялото си, особено ако си минавал през висока трева.",
          },
          {
            title: "Лошо време",
            text: "Провери прогнозата преди тръгване и не подценявай мъгла, буря, сняг или силен вятър.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]"
          >
            <h2 className="text-2xl font-bold mb-4">
              {item.title}
            </h2>

            <p className="text-[#6b4b32]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
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