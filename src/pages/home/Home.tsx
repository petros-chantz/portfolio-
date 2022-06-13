import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Home() {
  const titlesAnimation = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
    config: {
      duration: 1000,
    },
  });
  const linksAnimation = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 700,
    config: {
      duration: 550,
    },
  });

  return (
    <div className="h-screen p-3 bg-black">
      <animated.div
        className="flex flex-col items-center justify-center gap-2 mb-16 md:gap-6 h-5/6"
        style={titlesAnimation}
      >
        <h1 className="text-white">petros chantzopoulos</h1>
        <div className="flex flex-row gap-5 md:gap-12 lg:gap-12">
          <h5 className="text-white">creative technologist</h5>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="self-center"
          >
            <circle cx="7.5" cy="7.5" r="7.5" fill="white" />
          </svg>

          <h5 className="text-white">design researcher</h5>
        </div>
      </animated.div>
      <animated.div
        className="flex flex-row justify-center gap-6 md:gap-8 lg:gap-22 xl:gap-24"
        style={linksAnimation}
      >
        {[
          ["about", "/about"],
          ["work", "/work"],
          ["vision", "/vision"],
        ].map(([page, url]) => (
          <div className="border-b-2 border-white opacity-90 hover:opacity-100">
            <Link to={url}>
              <h4 className="text-white opacity-90 hover:opacity-100">
                {page}
              </h4>
            </Link>
          </div>
        ))}
        <div className="border-b-2 border-white opacity-90 hover:opacity-100">
          <a href="http://" target="_blank" rel="noreferrer" className="home">
            writing
          </a>
        </div>
      </animated.div>
    </div>
  );
}

export default Home;
