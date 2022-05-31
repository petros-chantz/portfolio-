function Home() {
  return (
    <div className="h-screen p-3 bg-black">
      <div className="flex flex-col items-center justify-center gap-2 mb-16 md:gap-6 h-5/6">
        <h1 className="home">petros chantzopoulos</h1>
        <div className="flex flex-row gap-5 md:gap-12 lg:gap-36">
          <h5 className="home">creative technologist</h5>
          <h5 className="home">design researcher</h5>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-6 md:gap-8 lg:gap-22 xl:gap-24">
        <h4 className="home">about</h4>
        <h4 className="home">work</h4>
        <h4 className="home">vision</h4>
        <h4 className="home">writing</h4>
      </div>
    </div>
  );
}

export default Home;
