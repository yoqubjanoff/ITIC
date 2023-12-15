import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 133vw;
  background-color: #050919;
  overflow: hidden;
  padding: 0 200px;
  @media screen and (max-width: 1000px) {
    padding: 0 0 0 0;
  }
  @media screen and (max-width: 840px) {
    width: 100vw;
    height: fit-content;
    flex-direction: column;
    gap: 51px;
    align-items: center;
    padding: 0;
    flex-wrap: nowrap;
  }

  .wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 400px;
    @media screen and (max-width: 1630px) {
      gap: 0px;
    }

    @media screen and (max-width: 1442px) {
      gap: 50px;
    }
    @media screen and (max-width: 840px) {
      width: fit-content;
      flex-direction: column;
      gap: 51px;
      align-items: flex-start;
      padding: 0 15px;
      flex-wrap: nowrap;
    }

    @media screen and (max-width: 653px) {
      width: 100vw;
      align-items: center;
      padding: 50px 15px;
    }
  }

  .textWrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 476px;
    gap: 13px;
    @media screen and (max-width: 840px) {
      gap: 5px;
    }

    @media screen and (max-width: 653px) {
      align-items: center;
      text-align: center;
      margin: 0;
      padding: 0;
    }
  }

  .response {
    display: none;
    @media screen and (max-width: 840px) {
      display: block;
    }

    @media screen and (max-width: 653px) {
      display: none;
    }
  }

  .mobile {
    margin-top: -70px;
    display: none;
    @media screen and (max-width: 653px) {
      display: block;
    }
  }

  @media screen and (max-width: 653px) {
    width: 100vw;
    align-items: center;
  }
`;

Container.CasesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 918px;
  height: 100%;
  overflow: scroll;
  overflow-y: scroll;
  gap: 60px;
  &::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (max-width: 840px) {
    width: fit-content;
    gap: 33px;
    overflow: hidden;
    overflow-y: hidden;
  }
`;
export const HeadingCase = styled.h1`
  font-size: calc(42px + 30 * (100vw / 1940));
  font-weight: 500;
  width: ${({ width }) => (width ? width : "")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};
  background: -webkit-linear-gradient(left, black, #fff, black);
  background-size: 1600px 200px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 2s linear infinite alternate;

  span {
    display: none;
    @media only screen and (max-width: 653px) {
      display: block;
    }
  }

  @media screen and (max-width: 1440px) {
    font-size: 50px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 840px) {
    font-size: 52px;
  }

  @media only screen and (max-width: 653px) {
    text-align: center;
  }
  @media only screen and (max-width: 350px) {
    width: 325px;
  }

  @keyframes textShine {
    0% {
      background-position: 0 1600px;
    }
    100% {
      background-position: 1600px 0;
    }
  }
`;
export const ParagraphCase = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  width: 100%;
  max-width: 376px;
  @media only screen and (max-width: 840px) {
    width: 100%;
    max-width: 376px;
  }

  @media only screen and (max-width: 653px) {
    font-size: 14px;
    width: 376px;
  }
  @media only screen and (max-width: 370px) {
    font-size: 14px;
    width: 306px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 14px;
    width: 250px;
  }
`;
