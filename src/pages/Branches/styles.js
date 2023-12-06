import styled from "styled-components";
import bacground from "../../assets/images/branch.png";

export const Container = styled.div`
  width: 145vw;
  height: 100vh;
  background: url(${bacground});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  position: relative;
  padding: 0 100px;

  @media screen and (max-width: 840px) {
    height: 905px;
    width: 100vw;
    justify-content: center;
  }

  @media screen and (max-width: 653px) {
    width: 100vw;
    height: 640px;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 271px;
  z-index: 1;
  @media screen and (max-width: 1550px) {
    gap: 100px;
  }
  @media screen and (max-width: 840px) {
    flex-direction: column;
    gap: 0px;
  }
  .image {
    max-width: 1287px;
    position: relative;
    .soonUsa {
      position: absolute;
      left: 252px;
      top: 195px;
      animation: jumping 2s linear infinite alternate;

      @media screen and (max-width: 840px) {
        left: 136px;
        top: 221px;
      }
      @media screen and (max-width: 653px) {
        width: 79px;
        left: 65px;
        top: 118px;
      }
    }
    .soonUsa:hover + .positiontext1 {
      display: block;
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    }

    .positiontext1 {
      position: absolute;
      opacity: 0;
      left: 250px;
      top: 111px;
      padding: 8px 10px;
      border-radius: 9px;
      width: 212px;
      color: #fff;
      background-image: linear-gradient(#00cdc2, #00cdc200, #00cdc2);
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      animation: jumping 2s linear infinite alternate;

      @media screen and (max-width: 653px) {
        width: 100px;
        height: 45px;
        font-size: 8px;
        left: 55px;
        top: 63px;
        padding: 2px 2px;
      }
    }
    .soonBra:hover + .positiontext2 {
      display: block;
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    }

    .positiontext2 {
      position: absolute;
      left: 422px;
      top: 310px;
      padding: 8px 10px;
      border-radius: 9px;
      width: 212px;
      color: #fff;
      background-image: linear-gradient(#00cdc2, #00cdc200, #00cdc2);
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      animation: jumping 2s linear infinite alternate;

      @media screen and (max-width: 653px) {
        width: 100px;
        height: 45px;
        font-size: 8px;
        left: 105px;
        top: 223px;
        padding: 2px 2px;
      }
    }

    .soonBra {
      position: absolute;
      left: 421px;
      bottom: 184px;
      animation: jumping 2s linear infinite alternate;

      @media screen and (max-width: 840px) {
        left: 233px;
        bottom: 243px;
      }
      @media screen and (max-width: 653px) {
        width: 79px;
        left: 115px;
        bottom: 142px;
      }
    }
    .positiontext3 {
      position: absolute;
      left: 842px;
      top: 99px;
      padding: 8px 10px;
      width: 244px;
      border-radius: 9px;
      width: 212px;
      color: #fff;
      background-image: linear-gradient(#00cdc2, #00cdc200, #00cdc2);
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      animation: jumping 2s linear infinite alternate;

      @media screen and (max-width: 653px) {
        width: 100px;
        height: 45px;
        font-size: 8px;
        left: 215px;
        top: 67px;
        padding: 2px 2px;
      }
    }
    .uzbLoc {
      position: absolute;
      top: 182px;
      right: 332px;
      animation: jumping 2s linear infinite alternate;

      @media screen and (max-width: 840px) {
        right: 128px;
        top: 212px;
      }
      @media screen and (max-width: 653px) {
        width: 79px;
        right: 47px;
        top: 117px;
      }
    }
    .uzbLoc:hover + .positiontext3 {
      opacity: 1;
    }

    .positiontext4 {
      position: absolute;
      left: 973px;
      top: 211px;
      padding: 8px 10px;
      width: 244px;
      border-radius: 9px;
      width: 212px;
      color: #fff;
      background-image: linear-gradient(#00cdc2, #00cdc200, #00cdc2);
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      animation: jumping 2s linear infinite alternate;

      @media screen and (max-width: 653px) {
        width: 100px;
        height: 45px;
        font-size: 8px;
        left: 255px;
        top: 204px;
        padding: 2px 2px;
      }
    }
    .sinLoc {
      position: absolute;
      top: 293px;
      right: 200px;
      animation: jumping 2s linear infinite alternate;

      @media screen and (max-width: 840px) {
        top: 272px;
        right: 55px;
      }
      @media screen and (max-width: 653px) {
        width: 79px;
        top: 154px;
        right: 10px;
      }
    }
    .sinLoc:hover + .positiontext4 {
      opacity: 1;
    }
  }

  .worldImage {
    width: 100%;
    @media screen and (max-width: 840px) {
      width: 728px;
    }

    @media screen and (max-width: 653px) {
      width: 355px;
      height: 355px;
    }
  }

  @keyframes jumping {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;

Container.Text = styled.div`
  z-index: 1;
  @media screen and (max-width: 653px) {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 653px) {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 350px) {
    margin-left: 10px;
  }
  @media screen and (max-width: 335px) {
    margin-left: 30px;
  }
`;

export const HeadingBranch = styled.h1`
  font-size: calc(42px + 30 * (100vw / 1940));
  font-weight: 500;
  margin: 5px;
  max-width: 881px;
  background: -webkit-linear-gradient(left, black, #fff, black);
  background-size: 1600px 200px;
  -webkit-background-clip: text;
  background-clip: text;
  /* text-fill-color: transparent; */
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

  @media only screen and (max-width: 653px) {
    text-align: center;
  }
  @media only screen and (max-width: 370px) {
    text-align: start;
    font-size: 42px;
    max-width: 335px;
  }
  @media only screen and (max-width: 340px) {
    text-align: start;
    font-size: 35px;
  }
`;
Container.Paragraph = styled.p`
  max-width: 376px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  @media screen and (max-width: 370px) {
    max-width: 270px;
    text-align: start;
  }
`;
