import Title from "../layout/Title";
export default function Instagram() {
  const images = [
    "/gram1.png",
    "/gram2.png",
    "/gram3.png",
    "/gram4.png",
    "/gram5.png",
    "/gram1.png"
  ];
  return (
    <div className=" bg-[#E1EBFA] flex flex-col items-center pl-[120px] pr-[138px] pt-[120px] pb-[71px] gap-10">
      <Title title="Social" subtitle="Instagram" />
      <div className=" grid grid-cols-3 gap-10">
        {images.map((image) => (
          <img src={image} />
        ))}
      </div>
    </div>
  );
}
