import React from "react";

//Styles
import { Header, Nav } from "./styles";

export default function App() {
  return (
    <Header>
      <Nav>
        <h2>RC</h2>
        <ul>
          <li>ABOUT</li>
          <li>RECIPES</li>
          <li className="active">SUBSCRIBE</li>
        </ul>
      </Nav>
      <div>
        <h1>RECIPES</h1>
      </div>
    </Header>
  );
}