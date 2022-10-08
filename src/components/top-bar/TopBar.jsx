import "./topbar.css";
import Menu from "../menu/Menu";

const TopBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="ham">
      <i
        className={!menuOpen ? "fas fa-bars" : "fas fa-times"}
        onClick={() => setMenuOpen(!menuOpen)}
      ></i>
      {menuOpen && <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />}
    </div>
  );
};

export default TopBar;
