import { useContext, useState } from "react";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Intro from "./components/intro/Intro.jsx";
import ProductList from "./components/productList/ProductList.jsx";
import Toggle from "./components/toggle/Toggle.jsx";
import Skills from "./components/skills/Skills";
import { ThemeContext } from "./context.js";
import "./app.css";
import TopBar from "./components/top-bar/TopBar.jsx";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="main"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Toggle />
      <Intro />
      <About />
      <Skills />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
