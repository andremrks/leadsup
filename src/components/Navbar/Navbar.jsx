import { useState } from "react";
import "./navbar.css";

import logo from "../../assets/images/Logo LeadsUp FINAL BLACK.png";

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#servicos">Serviços</a>
    </p>
    <p>
      <a href="#parceiros">Parceiros</a>
    </p>
    <p>
      <a href="#contato">Contato</a>
    </p>
  </>
);

const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);

  return (
    <div className="leadsup__navbar section__padding">
      <div className="leadsup__navbar-links">
        <div className="leadsup__navbar-links_logo">
          <img id="home" src={logo} alt="LeadsUP Logo" />
        </div>
        <div className="leadsup__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="leadsup__navbar-menu">
        {toogleMenu ? (
          <IoCloseOutline
            color="var(--color-paragraph-variant)"
            size={27}
            onClick={() => setToogleMenu(false)}
          />
        ) : (
          <HiOutlineMenuAlt1
            color="var(--color-paragraph-variant)"
            sizer={27}
            onClick={() => setToogleMenu(true)}
          />
        )}
        {toogleMenu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
