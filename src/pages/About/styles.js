import styled from "styled-components";
import bgImg1 from "../../assets/images/aboutBgImage.svg";
import bgImg2 from "../../assets/images/aboutBgImg2.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #050919;
  background-image: url(${bgImg2}), url(${bgImg1});
  background-position: calc(50% - 324px) calc(50% - 73px),
    calc(50% - -678px) calc(50% - 32px);
  background-repeat: no-repeat;
  background-size: 1201px;
  @media screen and (max-width: 1536px) {
    background-position: calc(50% - 11px) calc(50% - 73px),
      calc(50% - -678px) calc(50% - 32px);
  }

  @media screen and (max-width: 840px) {
    height: 645px;
    width: 100vw;
    padding: 40px;
  }

  @media screen and (max-width: 653px) {
    height: 610px;
    width: 100vw;
    justify-content: center;
  }

  @keyframes moveBackground {
    0% {
      background-position: calc(50% - 324px) calc(50% - 73px),
        calc(50% - -678px) calc(50% - 32px);
    }
    25% {
      background-position: calc(50% - 224px) calc(50% + 27px),
        calc(50% - -578px) calc(50% + 72px);
    }
    50% {
      background-position: calc(50% - 124px) calc(50% - 19px),
        calc(50% - -478px) calc(50% - 12px);
    }
    75% {
      background-position: calc(50% - 24px) calc(50% - 73px),
        calc(50% - -378px) calc(50% - 32px);
    }
    100% {
      background-position: calc(50% - 324px) calc(50% - 73px),
        calc(50% - -678px) calc(50% - 32px);
    }
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  gap: 87px;

  @media screen and (max-width: 1150px) {
    gap: 25px;
  }
  @media screen and (max-width: 840px) {
    flex-direction: column;
    align-items:center;
    gap: 25px;
  }

  @media screen and (max-width: 653px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    text-align: center;
  }
`;

Container.Paragraph = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  max-width: 706px;

  @media screen and (max-width: 840px) {
    font-size: 24px;
    letter-spacing: 0;
    max-width: 646px;
  }

  @media screen and (max-width: 453px) {
    font-size: 14px;
    letter-spacing: 0;
    line-height: 23px;
    text-align: center;
    max-width: 306px;
  }
`;

Container.Numbers = styled.div`
  display: flex;
  align-items: center;
  gap: 72px;

  @media screen and (max-width: 653px) {
    flex-direction: column;
    gap: 32px;
  }
`;

Container.Num = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #ffffff;
  font-size: 56px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  span {
    color: #ffffff;
    font-family: "SF Pro Display-Regular", Helvetica;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    opacity: 0.6;
  }

  @media screen and (max-width: 653px) {
    font-size: 32px;
    span {
      font-size: 14px;
    }
  }
`;

Container.Data = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 715px;
  gap: 36px;
`;
export const HeadingAbout = styled.h1`
  font-size: 72px;
  font-weight: 500;
  margin: 5px;
  width: 100%;
  max-width: 309px;
  background: -webkit-linear-gradient(left, black, #fff, black);
  background-size: 1600px 200px;
  -webkit-background-clip: text;
  background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 2s linear infinite;

  @keyframes textShine {
    0% {
      background-position: 0 1600px;
    }
    100% {
      background-position: 1600px 0;
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 42px;
  }

  @media only screen and (max-width: 840px) {
    font-size: 56px;
  }

  @media only screen and (max-width: 653px) {
    font-size: 42px;
  }
`;
Container.HeadingAbout = styled.h1`
  font-size: calc(42px + 30 * (100vw / 1940));
  font-weight: 500;
  margin: 5px;
  width: ${({ width }) => (width ? width : "")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};
  background: -webkit-linear-gradient(left, black, #fff, black);
  background-size: 1600px 200px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 2s linear infinite alternate;
 

  @keyframes textShine {
    0% {
      background-position: 0 1600px;
    }
    100% {
      background-position: 1600px 0;
    }
  }

  @media screen and (max-width: 1440px) {
    font-size: 50px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 40px;
  }


  @media only screen and (max-width: 653px) {
    width: 288px;
    font-size: 32px;
    text-align: center;
  }
`;
