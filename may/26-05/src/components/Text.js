function Text() {
  return <div>Hey, I am Component</div>;
}

function Hallo(props) {
  console.log(props);
  return <div> Welcome {props.userName} to React</div>;
}

//export default Text;
export { Text, Hallo };
