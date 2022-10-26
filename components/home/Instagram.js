import Title from "../layout/Title";
import Card from "../layout/card";
export default function Instagram() {
  return (
    <div className=" bg-[#E1EBFA] flex flex-col items-center pl-[120px] pr-[138px] pt-[120px] pb-[71px] gap-10">
      <Title title="Social" subtitle="Instagram" />
      <div className="flex flex-col gap-[10px]">
        <div class="flex space-x-[10px]">
          <img src="/gram1.png" />
          <img src="/gram2.png" />
          <img src="/gram3.png" />
        </div>
        <div class="flex space-x-[10px]">
          <img src="/gram4.png" />
          <img src="/gram5.png" />
          <img src="/gram5.png" />
        </div>
      </div>
    </div>
  );
}
