import "./App.css";
import FruitContainer from "./components/FruitContainer";

function App() {
  let fruits = ["apples", "oranges", "strawberries", "pears", "blackberries", "grapefruits", "cherries"];
  return (
    <div className="App">
      <FruitContainer fruits={fruits} />
    </div>
  );
}

export default App;
