import styled from "styled-components"

export const Menu = styled.ul`
  svg {
    display: none;
  }

  @media(max-width:725px) {

    svg {
        display: block;
    }

  }

`

export const ListRouter = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 88px;

  li {
    cursor: pointer;
  }

  

  @media(max-width:725px) {
      display: none;
  }

`