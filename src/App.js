import { Fragment } from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support"
import Pricing from "./components/Pricing";

function App() {
  return (
    <Fragment>
     <Navbar />
     <Hero />
     <About />
     <Support />
     <Pricing />
    </Fragment>
  );
}

export default App;
