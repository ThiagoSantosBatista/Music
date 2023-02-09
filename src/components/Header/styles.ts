import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 7rem;
  z-index: 10;
  background-color: #090909;
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 0 auto;
  padding: 0 16rem;
  max-width: 144rem;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 3.2rem;
  a {
    color: #f9fafb;
    font-weight: 600;
  }

  li:last-child {
    a {
      color: #1f2937;
    }
  }
`;
