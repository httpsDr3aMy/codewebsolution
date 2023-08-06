import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './css/main.css';
import 'animate.css';

function App() {

  
  
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
