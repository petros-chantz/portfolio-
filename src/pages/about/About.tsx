import AboutContact from "./AboutContact";
import AboutContent from "./AboutContent";

function About() {
  return (
    <div className="flex flex-col p-8 pt-16 mt-20 bg-white lg:py-20 md:px-16 lg:px-22">
      <h3 className="self-end">about</h3>
      <AboutContent></AboutContent>

      <AboutContact></AboutContact>
    </div>
  );
}

export default About;
