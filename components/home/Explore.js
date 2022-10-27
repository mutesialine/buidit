import Text from "../layout/Text";
import Button from "../layout/Button";
import Logo from "../layout/Logo";
export default function Explore () {
  return (
    <div className="  bg-[#E1EBFA] flex flex-col justify-between pt-[83px]  space-y-20">
      <Logo />
      <div className="flex justify-between  items-center gap-[40px] pl-[120px] pr-[138px]  pb-[71px]">
        <div>
          <img src="/image2.png" href="" />
        </div>
        <div className="  flex flex-col space-y-8  ">
          <Text
            title="About us"
            subtitle="Owner and investor with a reputation"
          />
          <Button text="Explore" />
        </div>
      </div>
    </div>
  );
}
