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
  background-color: #446061;

  p {
    text-align: center;
    white-space: nowrap;
    font-size: 13px;
    padding: 16px 0px;
    opacity: 0.5;
    color: #FFFFFF;
  }

  a {
    color: #FFFFFF;
    text-decoration: none;
  }
`
