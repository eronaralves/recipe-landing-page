import styled from 'styled-components'

import BackgroundHeader from '../../assets/images/background-header.png'

export const Header = styled.header`
  width: 100%;
  height: 100vh;

  background-image: url('${BackgroundHeader}');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  .active {
    border: solid 3px #000;
    padding: 10px 20px;
  }

  div {
    width: 100%;
    height: calc(100% - 72px);

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 140px;
      font-weight: 500;
      line-height: 191px;
    }
  }
`
