import "./App.css";
import New from "./component/New";
function App() {
  const fruits = ["apple", "BlueBerry", "mango"];
  const color = ["red", "Blue", "yellow"];

  return <New fruits={fruits} color={color} />;
}

export default App;
