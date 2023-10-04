import { useSelector } from "react-redux";
import "./reset.css";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  const language = useSelector(state => state)

  return (
    <div className="App">
      <Header language={language}/>
    </div>
  );
}

export default App;
