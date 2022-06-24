
// Parte feita pelo Eronar

import React from "react";

//Components
import Nav from "../Nav"

//Styles
import { Header } from "./styles";

export default function App() {
  return (
    <Header>
      <Nav/>
      <div>
        <h1>RECIPES</h1>
      </div>
    </Header>
  );
}