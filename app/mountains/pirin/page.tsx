import MountainPage from "../../components/MountainPage";

export default function PirinPage() {
  return (
    <MountainPage
      name="Пирин"
      color="bg-[#6f7d5d]"
      description="Пирин е известен със своите остри върхове, мраморни била и едни от най-красивите преходи в България."
      cards={[
        {
          title: "Върхове",
          text: "Вихрен, Кутело и десетки алпийски маршрути.",
        },
        {
          title: "Езера",
          text: "Ледникови езера и диви високопланински гледки.",
        },
        {
          title: "Хижи",
          text: "Планински хижи и места за почивка сред природата.",
        },
      ]}
      dangers={["Мечки", "Вълци", "Глигани", "Змии"]}
    />
  );
}