import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  
  > img {
    max-width: 600px;
    height: 400px;
  }
  
  > p {
    width: 100%;
    bottom: 50px;
  }
  
  > button {
    bottom: 0;
    height: 50px;
    font-size: 16px;
    background-color: #0070f3;
    color: #fff;
    border: 0;
    border-radius: 8px;
  }
`;