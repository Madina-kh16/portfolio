// import { useState } from "react";

// import { Menu } from "./components/menu/Menu";
import { Header } from "./layot/header/Header";
import { Footer } from "./layot/footer/Footer";
import { Main } from "./layot/sections/main/Main";
import { Works } from "./layot/sections/works/Works";
import { Skills } from "./layot/sections/skills/Skills";
import { Slogan } from "./layot/sections/slogan/Slogan";
import { Contact } from "./layot/sections/contact/Contact";
import { Testimony } from "./layot/sections/testimony/Testimony";

function App() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      {/* <Menu setIsOpen={setIsOpen} isOpen={isOpen} /> */}
      <Main />
      <Header />
      <Skills />
      <Works />
      <Testimony />
      <Contact />
      <Slogan />
      <Footer />
    </div>
  );
}

export default App;
