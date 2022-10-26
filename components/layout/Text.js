export default function Text({title ,subtitle ,Description}){
  return (
    <div className=" flex flex-col  space-y-5 w-[540px]">
      <p className="text-[#5BCCDE] text-base">About us</p>
      <h2 className="text-[#486A6F] font-bold text-4xl">
        Owner and investor with a reputation
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem,
        vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros
        vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim
        magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit
        molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices
        in, congue sed ex.
      </p>
    </div>
  );
}
