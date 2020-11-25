import React, { useEffect, useState } from "react";
import "./nav.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? handleShow(true) : handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://seeklogo.com/images/N/netflix-logo-DD40971CE6-seeklogo.com.png"
        alt="Netflix logo"
        className="nav_logo"
      />

      <img
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix Avatar"
        className="nav_avatar"
      />
    </div>
  );
};

export default Navbar;
