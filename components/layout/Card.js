export default function Card({icon,title}){
  return (
    <div className="space-y-5 w-1/2">
      <img src={icon} alt="" />
      <p className="text-[#486A6F] text-2xl font-bold">{title}</p>
      <p className="text-[#678C92]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}