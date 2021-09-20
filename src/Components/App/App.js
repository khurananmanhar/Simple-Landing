import './App.css';
import Nav from "../Navbar/Nav"
import Intro from '../Intro/Intro';
import Services from '../Services/Services';
import ExtraServices from '../Services/Extra';
import Blogs from '../Blog/Blogs';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Nav/>
        <Intro/>
      </div>
        <h2 className="divTitles">What We Do</h2>
      <div className="services" id="about">
      <Services/>
      </div>
      <ExtraServices/>
      <h2 className="divTitles">Blogs</h2>
      <div className="blogsDiv" id="blogs">
        <Blogs/>
      </div>
      <h2 className="divTitles">Testimonials</h2>
      <div className="testContainer" id="testis">
        <Testimonials/>
      </div>
      <Contact/>
      <Footer/>
          </div>
  );
}

export default App;
