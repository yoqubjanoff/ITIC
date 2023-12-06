import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #051c2c;
  gap: 89px;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 89px;

    @media screen and (max-width: 840px) {
      flex-direction: column;
      height: auto;
      width: fit-content;
      align-items: flex-start;
    }

    @media screen and (max-width: 653px) {
      align-items: center;
    }
  }

  @media screen and (max-width: 840px) {
    flex-direction: column;
    height: 100%;
    width: 100vw;
  }
`;

Container.Cases = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
 
`;
Container.Paragraph = styled.p`
max-width: 376px;
color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
@media screen and (max-width: 653px) {
    text-align: center;
  }
`
