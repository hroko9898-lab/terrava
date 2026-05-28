export const metadata = {
  title: "За Terrava | Планини, карти и маршрути в България",
  description:
    "Научи повече за Terrava — дигитален пътеводител за планини, маршрути, карти, GPS ориентация и безопасност сред природата в България.",
};

export default function AboutPage() {
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
        Terrava • За проекта
      </p>

      <section className="max-w-5xl mb-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Откривай България по-умно, по-красиво и по-безопасно.
        </h1>

        <p className="text-xl md:text-2xl text-[#6b4b32] leading-relaxed">
          Terrava е дигитален пътеводител за планините, пътеките и дивите места
          в България. Създадена е за хора, които не искат просто да изберат
          маршрут, а да разберат къде отиват — какъв е теренът, колко е труден
          преходът, какво могат да видят и за какво трябва да внимават.
        </p>
      </section>

      <section className="grid lg:grid-cols-3 gap-6 mb-20">
        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <p className="uppercase tracking-[0.25em] text-xs mb-5 text-[#7a5a3a]">
            01
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Маршрути
          </h2>

          <p className="text-[#6b4b32] leading-relaxed">
            Разглеждай планински маршрути с информация за време, трудност,
            достъп с кола, начални точки и интересни места по пътя.
          </p>
        </div>

        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <p className="uppercase tracking-[0.25em] text-xs mb-5 text-[#7a5a3a]">
            02
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Карти
          </h2>

          <p className="text-[#6b4b32] leading-relaxed">
            Използвай интерактивна карта с планински маркери, топографски слой,
            пешеходни маршрути и GPS позиция за по-добра ориентация.
          </p>
        </div>

        <div className="bg-[#eadcc7] rounded-[2rem] p-8 border border-[#d6c3aa]">
          <p className="uppercase tracking-[0.25em] text-xs mb-5 text-[#7a5a3a]">
            03
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Безопасност
          </h2>

          <p className="text-[#6b4b32] leading-relaxed">
            Получавай практични съвети за подготовка, екипировка, диви животни,
            лошо време, GPS локация и действия при спешен случай.
          </p>
        </div>
      </section>

      <section className="bg-[#3b2416] text-[#f3eadb] rounded-[2.5rem] p-8 md:p-14 mb-20">
        <p className="uppercase tracking-[0.3em] text-sm mb-6 text-[#e5d3b8]">
          За кого е Terrava
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          За всеки, който иска да излезе навън подготвен.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-[#e5d3b8] text-lg leading-relaxed">
          <p>
            Terrava е за начинаещи туристи, които търсят лесен маршрут, за хора
            с опит, които искат нова идея за преход, и за всеки, който обича
            планините, горите, гледките и спокойствието извън града.
          </p>

          <p>
            Целта не е само да покажем красиви места, а да помогнем на хората
            да вземат по-добри решения — кога да тръгнат, какво да носят, какъв
            риск има и дали маршрутът е подходящ за тях.
          </p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8 mb-20">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm mb-6 text-[#7a5a3a]">
            Какво ще намериш
          </p>

          <h2 className="text-4xl font-bold mb-8">
            Всичко важно преди прехода — събрано на едно място.
          </h2>

          <p className="text-lg text-[#6b4b32] leading-relaxed">
            В Terrava всяка планина има отделна страница с описание, популярни
            маршрути, трудност, време, достъп, интересни места и рискове. Така
            можеш бързо да прецениш дали даден преход е подходящ за теб.
          </p>
        </div>

        <div className="grid gap-4">
          {[
            "Планини и природни райони",
            "Популярни маршрути",
            "Интерактивна карта",
            "GPS позиция",
            "Топографски слоеве",
            "Съвети за безопасност",
          ].map((item) => (
            <div
              key={item}
              className="bg-[#eadcc7] rounded-2xl px-6 py-5 border border-[#d6c3aa] font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#eadcc7] rounded-[2.5rem] p-8 md:p-14 border border-[#d6c3aa] mb-20">
        <p className="uppercase tracking-[0.3em] text-sm mb-6 text-[#7a5a3a]">
          Важно
        </p>

        <h2 className="text-4xl font-bold mb-6">
          Terrava помага, но не заменя личната подготовка.
        </h2>

        <p className="text-lg text-[#6b4b32] leading-relaxed max-w-4xl">
          Информацията в сайта е помощна и трябва винаги да се съобразява с
          актуалните условия, прогнозата за времето, физическата подготовка и
          официалните предупреждения. Преди преход проверявай маршрута, носи
          подходяща екипировка и при реална опасност звъни на 112.
        </p>
      </section>

      <section className="mb-20">
        <p className="uppercase tracking-[0.3em] text-sm mb-6 text-[#7a5a3a]">
          Развитие
        </p>

        <h2 className="text-4xl font-bold mb-10">
          Проектът ще расте стъпка по стъпка.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]">
            <h3 className="text-2xl font-bold mb-4">
              Повече маршрути
            </h3>
            <p className="text-[#6b4b32]">
              Ще добавяме още пътеки, върхове, хижи, водопади, пещери и
              скрити места в различни части на България.
            </p>
          </div>

          <div className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]">
            <h3 className="text-2xl font-bold mb-4">
              По-точни карти
            </h3>
            <p className="text-[#6b4b32]">
              Целта е картата да стане още по-полезна с повече маркери,
              пътеки, слоеве и информация за терена.
            </p>
          </div>

          <div className="bg-[#eadcc7] rounded-3xl p-8 border border-[#d6c3aa]">
            <h3 className="text-2xl font-bold mb-4">
              Практични функции
            </h3>
            <p className="text-[#6b4b32]">
              В бъдеще Terrava може да включва филтри по трудност, GPX файлове,
              любими маршрути и отделни страници за всяка пътека.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-40 pt-12 border-t border-[#d6c3aa]">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <img
  src="/terrava-logo.png"
  alt="Terrava"
  className="h-10 w-auto mb-3"
/>
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