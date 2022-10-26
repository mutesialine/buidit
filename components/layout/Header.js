 import Button from "./Button";
import Link from "next/link"
export default function Header () {
  return (
    <div className="flex items-center  w-full justify-between pt-[65px]  pl-[120px] pr-[138px] ">
      <div className="flex items-center gap-2">
        <di className="p-6 rounded-3xl bg-[#486A6F]"></di>
        <h2 className="font-bold text-2xl text-[#486A6F]">Buildit</h2>
      </div>
      <div>
        <ul className=" flex justify-between text-base space-x-[50px] text-[#678C92]">
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="">Services</Link>
          </li>
          <li>
            <Link href="">Projects</Link>
          </li>
          <li>
            <Link href="">Contacts</Link>
          </li>
        </ul>
      </div>
      <div>
        <Button text="Need a projects" />
      </div>
    </div>
  );
}
