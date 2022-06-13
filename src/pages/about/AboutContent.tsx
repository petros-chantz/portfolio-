function AboutContent() {
  return (
    <div className="flex flex-col pt-10 pb-20 md:pl-20 lg:pl-32">
      <div className="flex justify-center pt-10 md:justify-start md:w-2/3 xl:w-2/3 drop-shadow-lg ">
        <img
          src="https://images.pexels.com/photos/12079516/pexels-photo-12079516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="petros"
        />
      </div>
      <div className="flex flex-col justify-center pt-10 md:justify-start md:w-2/3">
        <p className="pb-10 leading-9">
          I am a Creative Technologist and Design Researcher, interested in the
          connection between the physical and digital world. I research,
          explore, prototype and develop new modalities of interactions using
          research through design and experience prototyping methodologies. I
          love translating (often) abstract and ambiguous user needs and wishes
          into straightforward interaction requirements for tech teams. My work
          is multidisciplinary and diverse as are the projects, topics and teams
          I work in.
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
              APS Group
            </a>
          </h6>
        </div>
        <p className="pt-5 leading-9">
          There, I'm leading design research initiatives by examining and
          evaluating our product experiences, as well as inquiring new wishes
          and demands from our clients and stakeholders. As a UX Developer, I’m
          also heavily involved in the development of our front-end web
          applications. I'm working together with other application developers
          delivering new product features and creating new design systems for
          upcoming projects.
        </p>

        <div className="flex flex-col gap-10 pt-20">
          <h6>Interests</h6>
          <div className="grid grid-cols-3 gap-6 justify-items-stretch">
            <p className="self-start">Ambiguous & Ubiquitous Computing</p>
            <p>Smart Home Technologies</p>
            <p>one</p>
            <p className="">Augmented Reality</p>
            <p>one</p>
            <p>two</p>
            <p>one</p>
            <p>two</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
