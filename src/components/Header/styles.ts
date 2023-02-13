import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  background-color: #090909;
  box-shadow: 0 0.1rem 0.2rem #4a4a4a;
  z-index: 9;
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 0 auto;
  padding: 0 16rem;
  max-width: 144rem;

  .bgMobile {
    display: none;
    position: fixed;
    inset: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9;
  }
  .btnHeader {
    cursor: pointer;
    display: none;
    border: none;
    color: #ffffff;
    background: none;
  }

  @media screen and (max-width: 1440px) {
    padding: 0 9%;
  }
  @media screen and (max-width: 1200px) {
    padding: 0 5%;
  }

  @media screen and (max-width: 768px) {
    .logo {
      width: 6rem;
      height: auto;
    }
    .menuAbrir {
      display: block;
    }
    nav {
      display: none;
      position: fixed;
      top: 0;
      left: 20%;
      width: 80%;
      height: 100vh;
      background-color: #090909;
      border-left: 0.1rem solid #4a4a4a;
      z-index: 10;
      overflow-y: auto;
    }
    &.ativo {
      .menuFechar,
      .bgMobile {
        display: block;
      }
      nav {
        display: block;
        .menuFechar {
          position: absolute;
          top: 2.3rem;
          right: 6%;
        }
      }
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 3.2rem;
  a {
    color: #f9fafb;
    font-weight: 500;
  }

  li:last-child {
    a {
      font-weight: 600;
      color: #1f2937;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
  }
`;
