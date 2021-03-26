import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Search from "./Search";
import Menu from "./Menu";
import Authentication from "./authentication";
import Profile from "./profile";
import FirebaseContext from "../../db/context";

const Navegation = () => {
  const { usuario } = useContext(FirebaseContext);

  const buttonMenu = () => {
    document.querySelector(".nav-link-menu").classList.toggle("open");
  };

  return (
    <header id="header">
      <nav id="nav">
        <div className="container-search">
          <Link href="/">
            <a>
              <img id="logo" src="/static/icons/product_hunt.png" alt="logo" />
            </a>
          </Link>
          <Search />
          <button onClick={buttonMenu} className="menu-btn">
            <img src="/static/icons/menu.png" />
          </button>
          <Menu />
        </div>
        <div className="content-perfil">
          {usuario ? <Profile /> : <Authentication />}
        </div>
      </nav>
    </header>
  );
};

export default Navegation;