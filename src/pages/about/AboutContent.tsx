const profile = require("./profile.jpg");

const AboutContent = () => {
  return (
    <div className="flex flex-col gap-10 p-20 pb-10 lg:px-40">
      <div className="flex flex-col gap-20 lg:flex-row">
        <div className="flex justify-center w-2/3 pt-10 md:justify-start">
          <img
            src={profile}
            alt="petros"
            className="drop-shadow-2xl rounded-xl"
          />
        </div>
        <p className="self-end w-2/3 leading-9">
          I am a Creative Technologist and Design Researcher, interested in the
          connection between the physical and digital world. I research,
          explore, prototype and develop new modalities of interactions using
          research through design and experience prototyping methodologies. I
          love translating (often) abstract and ambiguous user needs and wishes
          into straightforward interaction requirements for tech teams. My work
          is multidisciplinary and diverse as are the projects, topics and teams
          I work in.
        </p>
      </div>
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
        evaluating our product experiences, as well as inquiring new wishes and
        demands from our clients and stakeholders. As a UX Developer, I’m also
        heavily involved in the development of our front-end web applications.
        I'm working together with other application developers delivering new
        product features and creating new design systems for upcoming projects.
      </p>
    </div>
  );
};

export default AboutContent;

// <div className="flex flex-col pt-10 pb-20 md:pl-20 lg:pl-52">

// <div className="flex flex-col justify-center pt-10 md:justify-end md:w-2/3">

// </div>
