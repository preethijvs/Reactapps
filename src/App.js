import "./App.css";
import New from "./component/New";
function App() {
  const fruits = ["apple", "BlueBerry", "mangos"];
  const color = ["red", "Blue", "yellow"];

  return <New fruits={fruits} color={color} />;
}

export default App;
