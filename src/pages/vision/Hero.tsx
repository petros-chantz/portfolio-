import Arrow from "../../components/Arrow";
import PageName from "../../components/PageName";
const visionTest = require("./vision.png");

const Hero = () => {
  return (
    <>
      <div className="sticky flex justify-start p-5 lg:px-10 top-10">
        <Arrow color="black" />
      </div>

      <div className="flex flex-col bg-white">
        <div className="flex justify-end p-5 lg:px-20 lg:pb-20">
          <PageName name={"work"} color={"text-black"} />
        </div>
        <div className="flex flex-col gap-20 pt-10 pb-32 pl-16 pr-5 lg:pr-56 lg:pl-60">
          <h2 className="self-start w-2/3 font-semibold leading-normal text-black ">
            "As technologies come closer and closer to our bodies, we are
            presented with new challenges and opportunities to grasp parts of
            ourselves with and through our physical or digital bodies."
          </h2>
          <div className="self-end w-2/3 pt-20">
            <img
              src={visionTest}
              alt="petros"
              className="drop-shadow-3xl-black rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

{
  /* <div className="flex flex-col justify-center h-screen gap-20 pt-16 bg-white lg:py-20 md:px-16 lg:px-22">
<h3 className="self-end text-black">vision</h3>
<div className="flex flex-col justify-center gap-10 lg:flex-row">
  <div className="flex self-center w-1/2 h-auto">
    <img
      src="https://images.pexels.com/photos/12079516/pexels-photo-12079516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="petros"
    />
  </div>

</div>
</div> */
}
