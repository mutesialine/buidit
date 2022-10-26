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
        <p>service 1</p>
        <p>service 2</p>
        <p>service 3</p>
        <p>service 4</p>
      </div>
      <div className="flex flex-col gap-2   ">
        <p>About us</p>
        <p>services</p>
        <p>Project</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <p>Get in touch</p>
          <p>60 Manor Station St. Fairport,<br/> NY 14450s</p>
        </div>
        <p>708-790-0000 sales<br/>@buildit.site</p>
      </div>
    </div>
  );
}
