 import Button from "./Button";
import Link from "next/link"
export default function Header () {
  return (
    <div className="flex items-center  w-full justify-between pt-[65px]  pl-[120px] pr-[138px] ">
      <Link href="/">
        <div className="flex items-center gap-2 ">
          <div className="p-6 rounded-3xl bg-[#486A6F]"></div>
          <h2 className="font-bold text-2xl text-[#486A6F] hover:underline">
            Buildit
          </h2>
        </div>
      </Link>
      <div>
        <ul className=" flex justify-between text-base space-x-[50px] text-[#678C92]">
          <li className="hover:underline">
            <Link href="/About">About</Link>
          </li>
          <li className="hover:underline">
            <Link href="/Services">Services</Link>
          </li>
          <li className="hover:underline">
            <Link href="/Project">Projects</Link>
          </li>
          <li className="hover:underline">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <Button text="Need a projects" />
      </div>
    </div>
  );
}
