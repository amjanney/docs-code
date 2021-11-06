function Welcome(props) {
  return <h1>{props.name}</h1>;
}

function Comp() {
  return (
    <div>
      <Welcome name='1' />
      <Welcome name='2' />
      <Welcome name='3' />
    </div>
  );
}

export default Comp;
