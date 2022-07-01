import Arrow from "../../components/Arrow";
import PageName from "../../components/PageName";
import WorkData from "./Work-data";
const projectPhoto = require("./work.jpeg");

const WorkFinal = () => {
  return (
    <>
      <div className="sticky flex justify-start p-5 -mt-20 lg:px-10 top-10">
        <Arrow color="white" />
      </div>
      <div className="flex flex-col bg-black">
        <div className="flex justify-end p-5 lg:px-20 lg:pb-20">
          <PageName name={"work"} color={"text-white"} />
        </div>
        <div className="flex flex-col gap-32 pt-10 pb-32 pl-16 pr-5 lg:pr-56 lg:pl-60">
          {WorkData.map((project) => (
            <div className="flex flex-row gap-12 group" key={project.index}>
              <div className="flex">
                <img
                  src={projectPhoto}
                  alt="petros"
                  className="rounded-lg group-hover:drop-shadow-3xl-white"
                />
              </div>
              <div className="flex flex-col justify-between w-2/3 gap-20">
                <h6 className="text-white">{project.title}</h6>
                <a href="http://" className="text-white group-hover:underline">
                  <h6 className="font-light text-white opacity-70 hover:opacity-100">
                    Read More
                  </h6>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkFinal;
