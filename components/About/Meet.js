import CardImage from "../layout/CardImage";
import Title from "../layout/Title";

export default function Meet() {
  const cards = [
    "/Photo (1).png",
    "/Photo (2).png",
    "/Photo (3).png",
    "/Photo (4).png",
    "/Photo (5).png",
    "/Photo (7).png",
    "/Photo (8).png",
    "/Photo (9).png",
    "/Photo (6).png",
  ];
  return (
    <div className=" bg-[#E1EBFA] flex flex-col items-center pl-[120px] pr-[138px] pt-[120px] pb-[71px] gap-10">
      <Title title="Social" subtitle="Instagram" />
      <div className="grid grid-cols-3 gap-10">
        {cards.map((card) => (
          <CardImage image={card} />
        ))}
      </div>
    </div>
  );
}
