import AboutContact from "./AboutContact";
import AboutContent from "./AboutContent";
const profile = require("./profile.jpg");

const About = () => {
  return (
    <div className="flex flex-col p-5 pt-10 mt-10 bg-white xl:p-20 md:mt-20 md:p-10">
      <h3 className="self-end">about</h3>
      <div className="flex flex-col gap-10 px-20 lg:pt-20 justify-items-center md:flex-row"></div>
    </div>
  );
};

export default About;

{
  /* <div className="flex flex-col p-8 mt-20 bg-white lg:py-20 md:px-16 lg:px-22 xl:px-32">
<h3 className="self-end">about</h3>
</div> */
}

{
  /* <div className="flex w-full md:w-1/3 justify-items-center">
          <img
            src={profile}
            alt="petros"
            className=" drop-shadow-2xl rounded-xl"
          />
        </div>
        <p className="leading-8 lg:w-1/3">
          I am a Creative Technologist and Design Researcher, interested in the
          connection between the physical and digital world. I research,
          explore, prototype and develop new modalities of interactions using
          research through design and experience prototyping methodologies. I
          love translating (often) abstract and ambiguous user needs and wishes
          into straightforward interaction requirements for tech teams. My work
          is multidisciplinary and diverse as are the projects, topics and teams
          I work in.
        </p> */
}
