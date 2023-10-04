import { useSelector } from "react-redux";
import "./reset.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Portfolio from "./Components/Main/Portfolio/Portfolio";

function App() {
  const language = useSelector((state) => state.language);

  return (
    <div className="App">
      <Header language={language} />
      <Main language={language} />
      <Portfolio language={language}/>
    </div>
  );
}

export default App;
