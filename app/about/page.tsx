export default function AboutPage() {
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
        Terrava • За нас
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mb-8">
        За Terrava
      </h1>

      <p className="text-xl max-w-3xl text-[#6b4b32] mb-12">
        Terrava е проект за откриване на планини, горски пътеки,
        диви места и полезна информация за безопасност сред природата в България.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]">
          <h2 className="text-2xl font-bold mb-4">
            Карти
          </h2>

          <p className="text-[#6b4b32]">
            Целта е да има топографски карти, маршрути и GPS ориентация.
          </p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]">
          <h2 className="text-2xl font-bold mb-4">
            Планини
          </h2>

          <p className="text-[#6b4b32]">
            Всяка планина ще има отделна страница с маршрути, хижи и рискове.
          </p>
        </div>

        <div className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]">
          <h2 className="text-2xl font-bold mb-4">
            Безопасност
          </h2>

          <p className="text-[#6b4b32]">
            Terrava ще помага на хората да се подготвят по-добре преди преход.
          </p>
        </div>
      </div>
      <footer className="mt-40 pt-12 border-t border-[#d6c3aa]">
  <div className="flex flex-col md:flex-row justify-between gap-6">
    <div>
      <h2 className="text-2xl font-bold mb-3">Terrava</h2>
      <p className="text-[#6b4b32] max-w-md">
        Проект за планини, пътеки, карти и безопасност сред природата в България.
      </p>
    </div>

    <div className="flex gap-6 text-sm font-medium">
      <a href="/">Начало</a>
      <a href="/map">Карта</a>
      <a href="/safety">Безопасност</a>
    </div>
  </div>

  <p className="text-sm text-[#7a5a3a] mt-10">
    © 2026 Terrava. Всички права запазени.
  </p>
</footer>
    </main>
  );
}