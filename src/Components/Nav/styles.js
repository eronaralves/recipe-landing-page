import styled from "styled-components"

export const ContainerNav = styled.header`
width: 100%;
max-width: 1320px;
height: 72px;

padding: 10px;
margin: auto;

display: flex;
align-items: center;
justify-content: space-between;

h2 {
  font-size: 40px;
  font-weight: 600;
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
`