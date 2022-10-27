import Card from "../layout/Card";
export default function Innovative() {
  return (
    <div className=" flex flex-col gap-[60px] items-center  pl-[120px] pr-[138px] py-[138px]">
      <h2 className="text-[#486A6F] text-4xl font-bold">
        Innovative Execution
      </h2>
      <div className="flex justify-between">
        <Card icon="/icon.png" title="Featured Listing" />
        <Card icon="/icon.png" title="Available Properties" />
        <Card icon="/icon.png" title="In the News" />
      </div>
    </div>
  );
}
   