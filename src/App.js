import logo from "./logo.svg";
import "./App.css";

import Sidebar from "./Commponents/Sidebar/index";
import Home from "./Commponents/views/Home/index";
import About from "./Commponents/views/About/index";
import Skills from "./Commponents/views/Skills/index"
import Layout from "./Commponents/Layout/index";

function App() {
  return (
    <div className="App">
      <div className="Mside">
        <Sidebar/>
      </div>
      <div className="Content">
        <div className="homeM">
        <Home/>
        </div>
        <div className="aboutM">
          <About/>
        </div>
        <hr/>
        <div className="skillsM">
          <Skills/>
        </div>
        
        
      </div>
    </div>
  );
}

export default App;
