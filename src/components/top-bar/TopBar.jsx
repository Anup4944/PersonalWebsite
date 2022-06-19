import "./topbar.css";
import Hamburger from "hamburger-react";
import Menu from "../menu/Menu";

const TopBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="ham">
      <Hamburger
        color="green"
        className="hambuger"
        onToggle={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen ? (
        <Menu
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      ) : null}
    </div>
  );
};

export default TopBar;
