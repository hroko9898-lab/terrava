import MountainPage from "../../components/MountainPage";

export default function StaraPlaninaPage() {
  return (
    <MountainPage
      name="Стара планина"
      color="bg-[#6f7655]"
      description="Стара планина пресича България от запад на изток и предлага върхове, проходи, водопади, хижи и дълги планински маршрути."
      cards={[
        {
          title: "Върхове",
          text: "Ботев, Ком, Мургаш и други емблематични места.",
        },
        {
          title: "Водопади",
          text: "Райското пръскало и красиви горски маршрути.",
        },
        {
          title: "Хижи",
          text: "Хижи и дълги преходи по билото на планината.",
        },
      ]}
      dangers={["Мечки", "Вълци", "Глигани", "Змии"]}
    />
  );
}