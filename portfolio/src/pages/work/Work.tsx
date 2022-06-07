import HeaderPage from "../../components/HeaderPage";

function Work() {
  return (
    <div className="flex flex-col h-screen p-8 pt-16 bg-white lg:py-20 md:px-16 lg:px-22">
      <HeaderPage pageName="work"></HeaderPage>
      <div className="flex flex-col justify-center h-full gap-10">
        <h2 className="self-center">Great things take time...</h2>
        <h2 className="self-center">
          ...so, you'll have to wait a little bit longer ;)
        </h2>
      </div>
    </div>
  );
}

export default Work;
