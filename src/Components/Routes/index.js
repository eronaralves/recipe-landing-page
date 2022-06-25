
import { FiMenu } from "react-icons/fi"
import {ListRouter, Menu} from "./styles"

export default function Routes() {

  return (
    <Menu>
      <FiMenu size={30}/>
      <ListRouter >
      <li>ABOUT</li>
      <li>RECIPES</li>
      <li className="active">SUBSCRIBE</li>
    </ListRouter>
    </Menu>
  )
}