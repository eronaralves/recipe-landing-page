import styled from 'styled-components'

export const ContentAbout = styled.header`
  width: 100vw;
  display: flex;
  img {
    width: 50vw;
    height: auto;
  }
`

export const About = styled.header`
  height: auto;
  width: 50vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 32px;
  }

  p {
    width: 100%;
    max-width: 500px;
    margin-top: 75px;

    font-size: 16px;
    line-height: 25px;
  }

  hr {
    width: 60px;
    height: 5px;
    margin: 0 auto;
    margin-top: 30px;
    background-color: #000;
  }
`
