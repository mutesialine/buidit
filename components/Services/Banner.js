import Text from "../layout/Text";
import Header from "../layout/Header";
export default function Banner(){
  return (
    <div className="  z-10 relative bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA] ">
      <Header/>
      <div className="flex  relative justify-center text-center  pt-[60px] pl-[120px] pr-[138px] pb-[120px]">
        <Text />
      </div>
    </div>
  );
}