import { Dock, Navbar, Welcome, Home } from "#components";
import { Resume, Safari, Terminal, Finder, Text, Image, Contact, Photos } from "#windows";
import gsap from "gsap";

import Draggable from "gsap/dist/Draggable";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />

      <Home />
    </main> 
  );
};

export default App