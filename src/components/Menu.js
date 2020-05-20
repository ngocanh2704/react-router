import React from "react";
import CustomLink from "./CustomLink";

const menus = [
  {
    name: "Trang Chu",
    to: "/",
    exact: true,
  },
  {
    name: "Gioi Thieu",
    to: "/about",
    exact: false,
  },
  {
    name: "Lien He",
    to: "/Contact",
    exact: false,
  },
  {
    name: "San Pham",
    to: "/products",
    exact: false,
  },
];

const showMenus = (menus) => {
  var result = null;
  if (menus.length > 0) {
    result = menus.map((menu, index) => {
      return (
        <CustomLink
          key={index}
          label={menu.name}
          to={menu.to}
          activeOnlyWhenExact={menu.exact}
        />
      );
    });
  }
  return result;
};

const Menu = () => {
  return (
    <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">{showMenus(menus)}</ul>
    </nav>
  );
};

export default Menu();
