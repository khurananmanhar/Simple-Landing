import './App.css';
import Nav from "../Navbar/Nav"
import Intro from '../Intro/Intro';
import Services from '../Services/Services';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Nav/>
        <Intro/>
      </div>
      <div className="services">
      <Services/>
      </div>
    </div>
  );
}

export default App;
