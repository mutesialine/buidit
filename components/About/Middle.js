import Logo from "../layout/Logo";
import Title from "../layout/Title";

export default function Middle(){
return (
  <div className=" flex flex-col items-center pl-[120px] pr-[138px] py-[120px]  space-y-[142px]">
    <Title title="Statistics" subtitle="Development in numbers" />
    <div className=" space-y-12" >
      <img src="/Card.png" alt="" />
      <Logo />
    </div>
  </div>
);
}