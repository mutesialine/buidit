export default function Button (props) {
  return (
    <button className="bg-[#4397A4] py-4 px-16 rounded-lg   text-white" {...props}>{props.text}</button>
  );      
}
