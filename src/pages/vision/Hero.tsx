const Hero = () => {
  return (
    <div className="flex flex-col justify-center h-screen gap-20 pt-16 bg-black lg:py-20 md:px-16 lg:px-22">
      <h3 className="self-end text-white">vision</h3>
      <div className="flex flex-col justify-center gap-10 lg:flex-row">
        <div className="flex self-center w-1/2 h-auto">
          <img
            src="https://images.pexels.com/photos/12079516/pexels-photo-12079516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="petros"
          />
        </div>
        <h2 className="self-center w-1/2 leading-normal text-white">
          "As technologies come closer and closer to our bodies, we are
          presented with new challenges and opportunities to grasp parts of
          ourselves with and through our physical or digital bodies."
        </h2>
      </div>
    </div>
  );
};

export default Hero;
