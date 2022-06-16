const Footer = () => {
  return (
    <div className="flex flex-row p-8 bg-black md:px-16 lg:px-22">
      <h5 className="self-center w-3/4 text-white footer">
        petros chantzopoulos
      </h5>
      <div className="flex flex-col justify-end w-1/4 gap-1">
        <p className="self-end text-white">v.2.3.1</p>
        <p className="self-end text-white">Rotterdam - 2022</p>
      </div>
    </div>
  );
};

export default Footer;
