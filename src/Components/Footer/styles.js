import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 30vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #F2F4F1;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1320px;
  height: 100%;
  padding-inline: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
`

export const Contact = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 40px;
    display: block;
  }
`

export const Copyright = styled.div`
  width: 100%;
  padding-inline: 20px;
  background-color: #446061;

  p {
    text-align: center;
    white-space: nowrap;
    font-size: 13px;
    padding: 16px 0px;
    opacity: 0.5;
    color: #FFFFFF;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  a {
    color: #FFFFFF;
    text-decoration: none;
  }

  @media(max-width: 630px) {
    p,a {
      font-size: 10px;
    }
  }

  @media(max-width: 475px) {
    p,a {
      font-size: 6px;
    }
  }
`
