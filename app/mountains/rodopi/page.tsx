import MountainPage from "../../components/MountainPage";

export default function RodopiPage() {
  return (
    <MountainPage
      name="Родопи"
      color="bg-[#7a6b58]"
      description="Родопите са известни със своите гори, легенди, пещери и спокойни диви пейзажи."
      cards={[
        {
          title: "Пещери",
          text: "Ягодинска пещера, Дяволското гърло и още.",
        },
        {
          title: "Гледки",
          text: "Панорамни места и спокойни горски маршрути.",
        },
        {
          title: "Села",
          text: "Традиционни родопски села и хижи.",
        },
      ]}
      dangers={["Мечки", "Вълци", "Глигани", "Змии"]}
    />
  );
}