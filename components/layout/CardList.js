export default function CardList(){
  return (
    <div className=" flex flex-col  space-y-5 w-[540px]">
      <p className="text-[#5BCCDE] text-base">Service</p>
      <h2 className="text-[#486A6F] font-bold text-4xl">Featured Listing</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem,
        vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros
        vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim
        magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit
        molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices
        in, congue sed ex.
      </p>
      <div className=" flex gap-2">
        <div className="space-y-4  px-12 py-4 flex flex-col bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA] ">
          <h2 className="  font-semibold">Name</h2>
          <p>Statistics</p>
        </div>
        <div className="space-y-4  px-12 py-4 flex flex-col bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA] ">
          <h2 className="  font-semibold">Name</h2>
          <p>Statistics</p>
        </div>
      </div>
    </div>
  );
}