const Content = (props: any) => {
  return (
    <div className="flex flex-col p-8 pt-16 bg-white lg:py-20 md:px-16 lg:px-22">
      <h2 className={`self-start underline ${props.left}`}>
        {props.contentTitle}
      </h2>
      <div className="flex flex-col gap-10 pt-20 lg:flex-row ">
        <div className="flex self-center w-3/4">
          <img src={props.contentPhoto} alt={props.photoAlt} />
        </div>
        <div className="flex self-start w-3/4 ">
          <p className="leading-10">{props.contentText}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
