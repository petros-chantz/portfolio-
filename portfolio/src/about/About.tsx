function About() {
  return (
    <div className="flex flex-col h-screen p-8 pt-12 bg-white lg:py-20 md:px-16 lg:px-24">
      <div className="flex flex-row justify-between gap-5 pb-5">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M22.5 40V13.7L10.1 26.1L8 24L24 8L40 24L37.9 26.1L25.5 13.7V40Z" />
        </svg>
        <h3>about</h3>
      </div>
    </div>
  );
}

export default About;
