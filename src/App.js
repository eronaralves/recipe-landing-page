import React from "react";
//Components
import Header from "./Components/Header";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
    color: #373737;
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
    
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1220px;
  height: 100vh;
`;

export default function App() {
  return (
    <Container>
      <Content>
        <GlobalStyle />
        <Header />
      </Content>
    </Container>
  );
}
