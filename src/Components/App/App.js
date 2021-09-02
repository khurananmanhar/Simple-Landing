import './App.css';
import Nav from "../Navbar/Nav"
import Intro from '../Intro/Intro';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Nav/>
        <Intro/>
      </div>
    </div>
  );
}

export default App;
