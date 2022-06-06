function Vision() {
  return (
    <>
      <div className="flex flex-col h-screen p-8 pt-12 bg-white">
        <div className="flex flex-row justify-between gap-5 pb-5">
          <p>arrow</p>
          <h3>vision</h3>
        </div>
        <div className="flex flex-col gap-12 pt-8 lg:flex-row h-4/5">
          <h2 className="">
            ‘As our computers come closer and closer to our bodies, we are
            presented with new challenges and opportunities to grasp parts of
            ourselves <span className="vision">with</span> and{" "}
            <span className="vision">throught</span> our bodies - physical or
            digital.’
          </h2>
          <div className="bg-gray-400 h-5/6"></div>
        </div>
      </div>
      <div className="flex flex-col h-screen p-8 bg-white">
        <div className="flex flex-col gap-4 lg:flex-row">
          <h2 className="vision">The body is not an object</h2>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Vision;
