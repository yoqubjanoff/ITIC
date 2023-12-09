import styled from "styled-components";
import background from "../../assets/images/bacslice.png";

export const Container = styled.div`
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 102vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 840px) {
    height: auto;
    padding: 0 0 60px 15px;
  }
  @media screen and (max-width: 416px) {
    height: auto;
    padding: 0;
  }
`;

export const HeadingOneHome = styled.h1`
  font-size: calc(42px + 30 * (100vw / 1940));
  font-weight: 500;
  margin: 5px;
  background: -webkit-linear-gradient(left, black, #fff, black);
  background-size: 1600px 200px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 2s linear infinite;

  span {
    display: none;
    @media screen and (max-width: 653px) {
      display: inline-block;
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

  @media only screen and (max-width: 840px) {
    font-size: 56px;
    width: 608px;
  }

  @media only screen and (max-width: 653px) {
    width: 288px;
    font-size: 42px;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ color }) => (color ? color : "rgba(255, 255, 255, 0.6)")};
  width: ${({ width }) => (width ? width : "376px")};

  @media only screen and (max-width: 840px) {
    width: 100%;
    max-width: 376px;
  }
  @media screen and (max-width: 653px) {
    width: 326px;
    text-align: center;
  }
`;

export const Your = styled.h1`
  font-size: calc(42px + 30 * (100vw / 1940));
  font-weight: 500;
  margin: 5px;
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

  @media only screen and (max-width: 840px) {
    font-size: 56px;
  }

  @media only screen and (max-width: 653px) {
    display: none;
    font-size: 42px;
  }
`;

Container.TeamBox = styled.div`
  display: flex;
  width: 335px;
  position: relative;
  .employee-image {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    position: absolute;
    border: 5px solid transparent;

    @media screen and (max-width: 653px) {
      width: 56px;
      height: 56px;
    }
  }
  .lastrounded {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 80px;
    height: 80px;
    border-radius: 80px;
    background-color: #fff;
    margin-left: 240px;
    margin-top: 33px;
  }
  .lastrounded > span {
    color: #061f2f;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 8px;
  }

  @media screen and (max-width: 653px) {
    width: 320px;
  }
`;

Container.MidWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  .chart {
    position: absolute;
    bottom: 20px;
    right: 50px;
    width: 620px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1200px) {
      width: 520px;
      right: -25px;
    }
    @media screen and (max-width: 840px) {
      display: none;
    }

    .lilChart {
      position: absolute;
      left: -26px;
      z-index: 99;
      width: 280px;
      height: 500px;
      bottom: 0;
      user-select: none;
      @media screen and (max-width: 1050px) {
        height: 379px;
      }
      @media screen and (max-width: 940px) {
        height: 330px;
        left: 70px;
      }
      @media screen and (max-width: 840px) {
        left: -153px;
      }
      @media screen and (max-width: 653px) {
        width: 132px;
        left: 222px;
      }
    }
    .midChart {
      position: absolute;
      left: 182px;
      bottom: 0;
      width: 224px;
      z-index: 20;
      height: 350px;
      user-select: none;
      @media screen and (max-width: 1050px) {
        width: 146px;
        height: 300px;
        left: 193px;
        bottom: -19px;
      }
      @media screen and (max-width: 940px) {
        left: 280px;
        width: 120px;
      }

      @media screen and (max-width: 840px) {
        left: 97px;
      }

      @media screen and (max-width: 653px) {
        width: 154px;
        left: 340px;
      }
    }
    .bigChart {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 354px;
      height: 600px;
      user-select: none;
      @media screen and (max-width: 1050px) {
        width: 240px;
        height: 473px;
      }
      @media screen and (max-width: 940px) {
        width: 178px;
      }

      @media screen and (max-width: 653px) {
        width: 228px;
        right: -60px;
      }
    }
    .upTrade {
      position: relative;
      top: -238px;
      width: 323px;
      left: 115px;
      z-index: 20;
      user-select: none;
      @media screen and (max-width: 1050px) {
        top: -160px;
        width: 259px;
      }
      @media screen and (max-width: 940px) {
        left: 192px;
      }

      @media screen and (max-width: 840px) {
        top: -242px;
        left: 24px;
      }

      @media screen and (max-width: 653px) {
        width: 227px;
        left: 291px;
      }
    }
  }

  @media screen and (max-width: 840px) {
    display: flex;
    flex-direction: column;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 130px;
  @media screen and (max-width: 1200px) {
    margin-left: 100px;
  }

  @media screen and (max-width: 840px) {
    margin-left: 0;
    margin-top: 130px;
  }

  @media screen and (max-width: 653px) {
    display: flex;
    align-items: center;
  }
`;

Container.ScrollIcon = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  align-items: center;
  width: 54px;
  height: 17px;
  gap: 5px;
  z-index: 1;
`;

Container.TextWrap = styled.div`
  display: flex;
  gap: 14px;
`;
Container.MobileImg = styled.img`
  max-width: 720px;
  display: none;
  @media screen and (max-width: 840px) {
    width: 100%;
    max-width: 600px;
    display: block;
  }
`;
Container.MobileBlur = styled.div`
  position: absolute;
  border-radius: 720px;
  background: #019793;
  filter: blur(115px);
  width: 100%;
  max-width: 720px;
  height: 220px;
  top: 921px;
  z-index: 200;
  @media screen and (max-width: 640px) {
  
  }
`;
