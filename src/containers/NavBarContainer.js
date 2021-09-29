import React from "react"
import { useSelector } from "react-redux"
import NavBar from "../components/NavBar/NavBar";

function NavBarContainer(props) {
  const isSuccess = useSelector((state) => state.authentication.isSuccess);
  return <NavBar isSuccess={isSuccess} />;
}

export default NavBarContainer;
