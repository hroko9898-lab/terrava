type SiteNavProps = {
  mountainsHref?: string;
};

const linkClass =
  "bg-[#f3eadb] rounded-2xl px-6 py-4 font-semibold hover:bg-[#3b2416] hover:text-[#f3eadb] transition";

export default function SiteNav({ mountainsHref = "/#mountains" }: SiteNavProps) {
  return (
    <nav className="flex items-center justify-between mb-20 relative z-[9999]">
      <a
        href="/"
        className="bg-[#f3eadb] rounded-2xl px-2 py-1 inline-flex items-center"
      >
        <img src="/terrava-logo.png" alt="Terrava" className="h-9 w-auto" />
      </a>

      <details className="relative">
        <summary className="bg-[#3b2416] text-[#f3eadb] w-[170px] h-[64px] md:w-[260px] md:h-[90px] rounded-full text-lg md:text-2xl font-bold cursor-pointer shadow-xl flex items-center justify-center">
          Меню
        </summary>

        <div className="absolute right-0 mt-5 w-80 bg-[#eadcc7] rounded-3xl p-5 shadow-xl flex flex-col gap-3 z-[9999]">
          <a href={mountainsHref} className={linkClass}>
            Планини
          </a>
          <a href="/map" className={linkClass}>
            Карта
          </a>
          <a href="/routes" className={linkClass}>
            Маршрути
          </a>
          <a href="/safety" className={linkClass}>
            Безопасност
          </a>
          <a href="/about" className={linkClass}>
            За нас
          </a>
        </div>
      </details>
    </nav>
  );
}
