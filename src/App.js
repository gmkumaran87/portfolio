import React, { useState } from "react";
import "./App.scss";
import Contacts from "./components/contacts/Contacts";
import Intro from "./components/intro/Intro";
import Navbar from "./components/nav/Navbar";
import Projects from "./components/proj/Projects";
import Skill from "./components/skills/Skill";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Projects />
        <Skill />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
