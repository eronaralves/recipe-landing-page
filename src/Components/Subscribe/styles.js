import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #DFE4DE;
`

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  h2 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
  
  span {
    font-size: 20px;
    margin-bottom: 30px;
  }

  span, a {
    display: block;
    text-align: center;
  }

  input {
    width: 100%;
    max-width: 450px;

    padding-block: 20px;
    padding-inline: 30px;
    margin-bottom: 30px;
    border: none;
    font-size: 16px;
  }

  a {
    width: 150px;
    margin: 0 auto;
    padding: 10px 30px;

    border: solid 3px #373737;
    text-decoration: none;
    
    font-weight: 700;
  }
`