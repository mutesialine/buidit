import Text from "../layout/Text";
import Header from "../layout/Header";
export default function Company() {
  return (
    <div className="  relative bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA] ">
      <Header />
      <div className="flex  relative justify-between  pt-[60px] pl-[120px] pr-[138px] pb-[120px]">
        <div className="flex flex-col gap-[38px] w-4/5">
          <img src="Photos1.png" />
        </div>
        <div className="flex py-10 flex-col gap-5 ">
          <Text />
        </div>
      </div>
    </div>
  );
}
