import Content from "./Content";
import VisionData from "./Vision-data";
import Hero from "./Hero";

const Vision = () => {
  return (
    <>
      <Hero />
      {/* {VisionData.map((statement) => (
        <Content
          key={statement.index}
          direction={statement.direction}
          title={statement.title}
          photo={statement.photo}
          photoAlt={statement.photoAlt}
          text={statement.text}
        />
      ))} */}
    </>
  );
};

export default Vision;
