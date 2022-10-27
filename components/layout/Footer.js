import Link from "next/link";
export default function Footer() {
  return (
    <div className=" flex justify-between text-[#F4F7FF]  bg-[#486A6F] pl-[120px] pr-[138px] pt-[83px] pb-[133px] ">
      <div className=" flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h2>Buildit</h2>
          <p>Development company, 2022 </p>
        </div>
        <div>Site design – hj⏰ Alarm</div>
      </div>
      <div className="flex flex-col gap-2">
        <Link href="/Services">service 1</Link>
        <Link href="/Services">service 2</Link>
        <Link href="/Services">service 3</Link>
        <Link href="/Services">service 4</Link>
      </div>
      <div className="flex flex-col gap-2   ">
        <Link href="/About">About</Link>
        <Link href="/Services">services</Link>
        <Link href="/Project">Project</Link >
        <Link href="Contact">Contact</Link>
      </div>
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <p>Get in touch</p>
          <p>60 Manor Station St. Fairport,<br/> NY 14450s</p>
        </div>
        <div>708-790-0000 sales<br/>@buildit.site</div>
      </div>
    </div>
  );
}
