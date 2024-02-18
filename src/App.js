import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { AboutMe } from "./components/AboutMe";
import { Ctf } from "./components/CTF";
import { Footer } from "./components/Footer";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe  />
      <Skills />
      <Ctf />
      <Footer/>
    </div>
  );
}

export default App;
