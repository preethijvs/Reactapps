import "./App.css";
import New from "./component/New";
function App() {
  const fruits = ["apple", "BlueBerry", "mangos", "Grapes"];
  const color = ["red", "Blue", "yellow", "violet"];

  return <New fruits={fruits} color={color} />;
}

export default App;
