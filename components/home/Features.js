
import Text from "../layout/Text";
export default function Features(){
  return (
    <div className="flex  relative justify-between  pt-[60px] pl-[120px] pr-[138px] pb-[120px]">
      <div className="flex py-10 flex-col gap-5 ">
        <Text />
      </div>
      <div className="flex flex-col gap-[38px] w-4/5">
        <img src="Photos1.png" />
      </div>
    </div>
  );
}