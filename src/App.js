import "./App.css";
import Delivery from "./Components/Delivery";
import Featured from "./Components/Featured";
import Meal from "./Components/Meal";
import TopNav from "./Components/TopNav";
import TopPicks from "./Components/TopPicks";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
    </div>
  );
}

export default App;
