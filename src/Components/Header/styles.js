import styled from 'styled-components'

export const Header = styled.header`
  width: 100vw;
  height: 100vh;

  background-image: url('https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=8444393a-5d93-4997-8ad0-0d450a8011e0&api_key=CometServer1&access_token=1655713515_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_a054eca8620384b7430a84d0de74ece14dea0730');
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

export const Nav = styled.header`
  width: 100%;
  max-width: 1220px;
  height: 72px;

  padding: 10px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 88px;

    li {
      cursor: pointer;
    }
  }

  h2 {
    font-size: 40px;
    font-weight: 600;
  }
`
