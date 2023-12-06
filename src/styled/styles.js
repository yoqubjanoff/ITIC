import styled from "styled-components";

export const HeadingOne = styled.h1`
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
  span {
    display: none;
    @media only screen and (max-width: 653px) {
      display: block;
    }
  }

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


  @media only screen and (max-width: 840px) {
    font-size: 42px;
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

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ color }) => (color ? color : "rgba(255, 255, 255, 0.6)")};
  width: ${({ width }) => (width ? width : "")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};

  @media only screen and (max-width: 840px) {
    width: 100%;
    max-width: 376px;
  }

  @media only screen and (max-width: 653px) {
    font-size: 14px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 13px;

  @media screen and (max-width: 653px) {
    align-items: center;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  gap: 20px;
  @media screen and (max-width: 840px) {
    display: flex;
    height: fit-content;
    width: 100vw;
    gap: 0;
  }
`;

export const ScrollAnimationOne = styled.div`
  animation: scroll 25s linear infinite;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  @media screen and (max-width: 840px) {
    animation: scroll 55s linear infinite;
    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    flex-direction: row;
  }
`;

export const ScrollAnimationTwo = styled.div`
  animation: scroll2 25s linear infinite;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;
  @keyframes scroll2 {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @media screen and (max-width: 840px) {
    animation: scroll2 55s linear infinite;
    @keyframes scroll2 {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0%);
      }
    }
    flex-direction: row;
  }
`;
