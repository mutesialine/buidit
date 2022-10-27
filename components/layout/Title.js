export default function Title(props){
  return (
    <div className="space-y-[10px] text-center">
      <p className="text-[#5BCCDE] text-base " {...props}>{props.title}</p>
      <h2 className="text-[#486A6F] font-bold text-4xl" {...props}>{props.subtitle}</h2>
    </div>
  );
}