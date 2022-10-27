export default function CardImage({image}){
  return (
    <div>
      <img className="" src={image} />
      <div className="space-y-2 px-2 py-4   bg-blue-200 rounded-b-xl">
        <h3 className="font-bold text-base text-[#486A6F]">Name Surname</h3>
        <p className="text-[#486A6F]">Worker</p>
      </div>
    </div>
  );
}