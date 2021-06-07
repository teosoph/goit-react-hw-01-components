function Information(props) {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>Information </h1>
      {props.children}
    </div>
  );
}

export default Information;
