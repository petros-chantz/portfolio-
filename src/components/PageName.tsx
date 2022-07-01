const PageName = (props: any): JSX.Element => {
  return (
    <div>
      <h3 className={props.color}>{props.name}</h3>
    </div>
  );
};

export default PageName;
