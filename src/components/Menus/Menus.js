import React from "react";
import { NavLink } from "react-router-dom";

const mainMenus = [
  {
    to: "/nike/men",
    exact: true,
    name: "Men",
  },
  {
    to: "/nike/women",
    exact: true,
    name: "Women",
  },
  {
    to: "/nike/kids",
    exact: true,
    name: "Kids",
  },
  {
    to: "/nike/contact",
    exact: true,
    name: "Contact",
  },
  {
    to: "/nike/snkrs",
    exact: true,
    name: "SNKRS",
  },
];


function Menus(props) {
  function handleLink() {
    props.handleLink();
  }
  var result = null,
    result = mainMenus.map((element, index) => {
      return (
        <li
          key={index}
          className="menu__wrap-item responsive"
          onClick={handleLink}
        >
          <NavLink
            to={element.to}
            exact={element.exact}
            activeClassName="menu-border "
            className="menu__wrap-item-link " //menu-border
          >
            {element.name}
          </NavLink>
        </li>
      );
    });
  return result;
}

export default Menus;
