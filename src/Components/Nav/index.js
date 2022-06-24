
// Parte feita pelo Eronar

import {FiMenu} from "react-icons/fi"

// Styles
import {ContainerNav} from "./styles"

//Components
import Routes from "./rotas"

export default function Nav() {

  return (
    <ContainerNav>
      <h2>RC</h2>
        <FiMenu size={25}/>  
        <Routes/>
    </ContainerNav>
  )
}