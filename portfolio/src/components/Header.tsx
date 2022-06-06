function HeaderPage(props: any) {
  return (
    <div className="flex flex-row justify-between gap-5">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
        <path d="M22.5 40V13.7L10.1 26.1L8 24L24 8L40 24L37.9 26.1L25.5 13.7V40Z" />
      </svg>
      <h3>{props.pageName}</h3>
    </div>
  );
}

export default HeaderPage;
