import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #051c2c;
  max-width: 360vw;
  height: 100vh;
  padding: 0 100px;

  @media screen and (max-width: 1550px) {
    padding: 0 100px;
  }

  @media only screen and (max-width: 840px) {
    height: 1500px;
    width: 100vw;
    justify-content: center;
    padding: 0;
  }

  @media only screen and (max-width: 653px) {
    justify-content: center;
    width: 100vw;
    height: 1765px;
  }
`;

export const HeadingOneFor = styled.h1`
  font-size: 72px;
  font-weight: 500;
  margin: 5px;
  width: 100%;
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

  @media screen and (max-width: 1442px) {
    font-size: 50px;
  }

  @media only screen and (max-width: 840px) {
    font-size: 42px;
  }

  @media only screen and (max-width: 653px) {
    width: 288px;
    font-size: 24px;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ color }) => (color ? color : "rgba(255, 255, 255, 0.6)")};
  width: 100%;

  @media only screen and (max-width: 840px) {
    width: 100%;
    max-width: 376px;
  }
  @media screen and (max-width: 653px) {
    font-size: 14px;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 249px;
  width: fit-content;
  justify-content: center;

  @media only screen and (max-width: 840px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 653px) {
    gap: 190px;
  }
`;

Container.Box = styled.div`
  display: flex;
  align-items: center;
  gap: 106px;

  @media screen and (max-width: 1536px) {
    .forImgGlobe{
      width: 281px;
    }
  }

  @media screen and (max-width: 840px) {
    display: flex;
    align-items: center;
    gap: 33px;

    .forImgGlobe {
      max-width: 263px;
      height: 251px;
      transition: transform 1s ease-in-out, opacity 1s ease-in-out;
    }

    .buildingImg {
      width: 160px;
      height: 181px;
      transition: transform 1s ease-in-out, opacity 1s ease-in-out;
    }

    .personImg {
      width: 196;
      height: 155;
      transition: transform 1s ease-in-out, opacity 1s ease-in-out;
    }
  }

  @media screen and (max-width: 653px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .forImgGlobe {
      width: 213px;
      height: 203px;
    }

    .buildingImg {
      width: 116px;
      height: 131px;
    }

    .personImg {
      width: 164;
      height: 130;
    }
  }
`;

Container.Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 123px;
  height: 85px;
  color: rgba(22, 15, 65, 1);
  background-color: #fff;
  font-size: 56px;
  font-weight: 500;
  margin-bottom: 28px;

  @media only screen and (max-width: 840px) {
    width: 108px;
    height: 68px;
    margin: 0;
  }
  @media only screen and (max-width: 653px) {
    width: 105px;
    height: 55px;
    margin: 0;
    font-size: 48px;
  }
`;

Container.Text = styled.div`
  max-width: 605px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;

  @media only screen and (max-width: 376px) {
    text-align: center;
    align-items: center;
  }

  @media only screen and (max-width: 426px) {
    text-align: center;
    align-items: center;
  }

  @media only screen and (max-width: 653px) {
    text-align: center;
    align-items: center;
  }
`;
