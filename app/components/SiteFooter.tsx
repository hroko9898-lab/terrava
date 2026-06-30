type SiteFooterProps = {
  description?: string;
};

export default function SiteFooter({
  description = "Български пътеводител за планини, пътеки, диви места и безопасност сред природата.",
}: SiteFooterProps) {
  return (
    <footer className="px-6 py-12 max-w-7xl mx-auto border-t border-[#d6c3aa]">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div>
          <a href="/">
            <img
              src="/terrava-logo.png"
              alt="Terrava"
              className="h-10 w-auto mb-3"
            />
          </a>
          <p className="text-[#6b4b32] max-w-md">{description}</p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm font-medium">
          <a href="/#mountains" className="hover:text-[#7a5a3a] transition">
            Планини
          </a>
          <a href="/map" className="hover:text-[#7a5a3a] transition">
            Карта
          </a>
          <a href="/routes" className="hover:text-[#7a5a3a] transition">
            Маршрути
          </a>
          <a href="/safety" className="hover:text-[#7a5a3a] transition">
            Безопасност
          </a>
          <a href="/about" className="hover:text-[#7a5a3a] transition">
            За нас
          </a>
        </div>
      </div>

      <p className="text-sm text-[#7a5a3a] mt-10">
        © 2026 Terrava. Всички права запазени.
      </p>
    </footer>
  );
}
