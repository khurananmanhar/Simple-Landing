import './App.css';
import Nav from "../Navbar/Nav"
import Intro from '../Intro/Intro';
import Services from '../Services/Services';
import ExtraServices from '../Services/Extra';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Nav/>
        <Intro/>
      </div>
        <h2 className="servicesTitle">What We Do</h2>
      <div className="services" id="about">
      <Services/>
      </div>
      <ExtraServices/>
          </div>
  );
}

export default App;
