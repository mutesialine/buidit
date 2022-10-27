export default function Button (props) {
  return (
    <button className="bg-[#4397A4] py-2 px-4 rounded-lg   text-white" {...props}>{props.text}</button>
  );      
}
