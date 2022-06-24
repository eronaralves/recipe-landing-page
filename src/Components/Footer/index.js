
// Parte feita pelo Eronar

import {FiMenu} from "react-icons/fi"

// Images
import Instagram from "../../assets/images/instagram.svg"
import Facebook from "../../assets/images/facebook.svg"
import Twitter from "../../assets/images/twitter.svg"
import Pinterest from "../../assets/images/pinterest.svg"

import {Container, Content, Contact, Copyright} from "./styles"

//Components
import Nav from "../Nav"
import Routes from "../Nav/rotas"

export default function Footer() {

  return (
    <Container>
      <Content>
        <Contact>
          <img src={Instagram} alt="Logo do Instagram branco com fundo preto"/>
          <img src={Twitter} alt="Logo do Twitter branco com fundo preto"/>
          <img src={Facebook} alt="Logo do Facebook branco com fundo preto"/>
          <img src={Pinterest} alt="Logo do Pinterest branco com fundo preto"/>
        </Contact>
        
        <div>
          <FiMenu size={50}/>
          <Routes/>
        </div>
      </Content>
      <Copyright>
          <p>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência:<a href="https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k//" target="_blank">https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</a>
          </p>
      </Copyright>
    </Container>
  )
}