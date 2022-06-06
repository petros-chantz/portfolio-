import HeaderPage from "../../components/Header";

function About() {
  return (
    <div className="flex flex-col p-8 pt-16 bg-white lg:py-20 md:px-16 lg:px-22">
      <HeaderPage pageName="about"></HeaderPage>
      <div className="flex flex-col pt-10 pb-20 md:pl-20 lg:pl-32">
        <div className="flex justify-center pt-10 md:justify-start md:w-2/3 xl:w-2/3">
          <img
            src="https://images.pexels.com/photos/12079516/pexels-photo-12079516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="petros"
          />
        </div>
        <div className="flex flex-col justify-center pt-10 md:justify-start md:w-2/3">
          <p className="pb-10 leading-9">
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
                APS Group
              </a>
            </h6>
          </div>
          <p className="pt-5 leading-9">
            As a UX Developer working in the IT department, I'm leading design
            research initiatives examining and evaluating product experiences,
            as well as inquiring new wishes and demands from our clients and
            stakeholders. I’m heavily involved in the development of our
            front-end web applications as well, working together with other
            developers to deliver new product features and create new design
            systems.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-end gap-5 pt-20 ">
        <p className="contact">petros.chantz [at] gmail [dot] com</p>

        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="about-contact"
        >
          linkedIn
        </a>

        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="about-contact"
        >
          github
        </a>
      </div>
    </div>
  );
}

export default About;
