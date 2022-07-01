import PageName from "../../components/PageName";
const profile = require("./profile.jpg");

const About = () => {
  return (
    <div className="flex flex-col bg-white lg:mt-20">
      <div className="flex flex-row justify-end p-5 lg:p-20">
        <PageName name={"about"} />
      </div>
      <div className="flex flex-col gap-20 pt-10 pb-32 pl-16 pr-5 lg:pr-56 lg:pl-60">
        <div className="w-3/5 md:w-2/4 lg:w-1/3">
          <img
            src={profile}
            alt="petros"
            className=" drop-shadow-2xl rounded-xl"
          />
        </div>
        {/* About text  */}
        <div className="flex flex-col self-end gap-10 lg:w-4/5">
          <p className="leading-8">
            I am a Creative Technologist and Design Researcher, interested in
            the connection between the physical and digital world. I research,
            explore, prototype and develop new modalities of interactions using
            research through design and experience prototyping methodologies. I
            love translating (often) abstract and ambiguous user needs and
            wishes into straightforward interaction requirements for tech teams.
            My work is multidisciplinary and diverse as are the projects, topics
            and teams I work in.
          </p>
          <div className="flex flex-col pt-10">
            <h6>Currently,</h6>
            <h6 className="about">
              I work at{" "}
              <a
                href="https://www.theapsgroup.com/en/"
                target="_blank"
                className="about"
                rel="noopener noreferrer"
              >
                APS Group.
              </a>
            </h6>
          </div>
          <p className="leading-9">
            There, I'm leading design research initiatives by examining and
            evaluating our product experiences, as well as inquiring new wishes
            and demands from our clients and stakeholders. As a UX Developer,
            I’m also heavily involved in the development of our front-end web
            applications. I'm working together with other application developers
            delivering new product features and creating new design systems for
            upcoming projects.
          </p>
        </div>

        <div className="flex flex-col self-end gap-5 pt-20">
          <h6 className="self-end pb-10">Let's connect!</h6>
          <h6 className="self-end">
            Send me an email at {""}
            <span className="underline">
              petros.chantz [at] gmail [dot] com
            </span>{" "}
          </h6>
          <h6 className="self-end">
            Find me in{" "}
            <a
              href="https://www.theapsgroup.com/en/"
              target="_blank"
              className="about"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </h6>
          <h6 className="self-end">
            Check my code in{" "}
            <a
              href="https://www.theapsgroup.com/en/"
              target="_blank"
              className="about"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default About;
