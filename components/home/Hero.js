import Button from "../layout/Button";
import Header from "../layout/Header";
export default function Hero() {
  return (
    <div className="  z-10 relative bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA] ">
      <img className="absolute -z-20 right-0 top-0 h-full" src="/Figure.svg" />
      <Header />

      <div className="flex  relative justify-between  pt-[60px] pl-[120px] pr-[138px] pb-[120px]">
        <div className="flex py-10 flex-col gap-5 ">
          <div className=" w-2/3">
            <h2 className="text-[64px] text-[#486A6F] font-bold">
              Development company
            </h2>
            <p className="text-[22px] text-[#678C92]">
              Forward-thinking real estate developer, owner and investor with a
              reputation
            </p>
          </div>
          <div className="space-x-4">
            <Button text="Services" />
            <Button
              className="py-4 px-16 bg-[#C6DBFF] text-black rounded-xl"
              text="learn"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[38px] w-4/5">
          <img src="Photos.png" />
        </div>
      </div>
    </div>
  );
}
