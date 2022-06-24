import React from 'react'
//Components
import Header from './Components/Header'

import styled, { createGlobalStyle } from 'styled-components'
import { ContentAbout } from './stylesApp/styles'

//Components
import About from "./Components/about"
import Main from "./Components/main"
import Subscribe from "./Components/Subscribe"
import Footer from "./Components/Footer"


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    color: #373737;
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
    
  }
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
`


export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <Header />
          <Main/>
          <About />
          <Subscribe/>
          <Footer/>
      </Container>
    </>
  )
}
