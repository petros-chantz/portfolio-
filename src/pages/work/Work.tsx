import Arrow from "../../components/Arrow";
import PageName from "../../components/PageName";

const Work = () => {
  return (
    <div className="flex flex-col h-screen bg-black">
      <div className="flex flex-row justify-between p-5 lg:p-20">
        <Arrow />
        <PageName name={"work"} color={"text-white"} />
      </div>
      <div className="flex flex-col justify-center gap-10 pt-32">
        <h3 className="self-center font-light text-white">
          Designing is a time intesive activity,
        </h3>
        <h4 className="self-center font-light text-white">
          ...and so is documentation, unfortunately.
        </h4>
        <h4 className="self-center pt-20 font-light text-white">
          Working on updating this page atm. Stay tuned!
        </h4>
      </div>
    </div>
  );
};

export default Work;
