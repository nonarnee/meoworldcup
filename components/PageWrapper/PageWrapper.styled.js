import styled from "@emotion/styled";

export const Container = styled.div`
  display: block;
  background-color: #f3f3f4;
  height: 100vh;
`;

export const GlobalNavigation = styled.nav`
  display: flex;
  height: 50px;
  background-color: #fff;
`;

export const NavButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background-color: #0070f3;
  color: #fff;
  border: 0;
  cursor: pointer;
  
  > span + span {
    margin-left: 4px;
  }
`;

export const Main = styled.main`
  margin: 2rem 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
`;