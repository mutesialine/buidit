import CardList from "../layout/CardList";
export default function Listing() {
  return (
    <div className="flex relative gap-10 pt-[60px] pl-[120px] pr-[138px] pb-[120px]">
      <div className="flex flex-col gap-[38px] w-4/5">
        <img src="gram2.png" />
      </div>
      <CardList />
    </div>
  );
}
