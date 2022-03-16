import styled from "@emotion/styled";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 45%;
  min-width: 400px;
  //width: 500px;
  
  & + & {
    margin-left: 50px;
  }
  
  > img {
    position: relative;
  //  width: 500px;
  //  height: 400px;
  }
  
  > p {
    width: 100%;
    font-size: 16px;
  }
  
  > button {
    bottom: 0;
    height: 50px;
    font-size: 16px;
    background-color: #0070f3;
    color: #fff;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
  }
`;