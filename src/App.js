import { Fragment } from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support"

function App() {
  return (
    <Fragment>
     <Navbar />
     <Hero />
     <About />
     <Support />
    </Fragment>
  );
}

export default App;
