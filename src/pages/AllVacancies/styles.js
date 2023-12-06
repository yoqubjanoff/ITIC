import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #fff;
  gap: 50px;
  background: linear-gradient(to top, #2c5364, #203a43, #0f2027);
  background: -webkit-linear-gradient(to top, #2c5364, #203a43, #0f2027);

  @media screen and (max-width: 840px) {
    width: 100vw;
    height: 100%;
    flex-direction: column;
  }

  @media screen and (max-width: 653px) {
    height: 100%;
  }

  .cntnr {
    position: relative;
    display: flex;
    gap: 16px;
  }

  .cntnr .jobBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 412px;
    width: 100%;
    max-width: 326px;
    border-radius: 30px;
    border: 1px solid #dfdfdf;
    padding: 49px 32px 35px 37px;
    @media screen and (max-width: 370px) {
      max-width: 296px;
    }
  }

  .cntnr .text {
    margin-right: 50px;
  }

  .cntnr .text h1 {
    color: #121212;
    font-size: 62px;
    font-weight: 500;
  }

  .cntnr .text p {
    color: #121212;
    font-size: 18px;
    opacity: 0.6;
    font-weight: 400;
  }
  .jobBox {
    background-color: #fff;
  }

  .jobBox .upperPart .jobTitle h3 {
    font-size: 24px;
    font-weight: 500;
    color: #121212;
  }

  .jobBox .upperPart .jobTitle p {
    font-size: 18px;
    font-weight: 400;
    color: #121212;
  }

  .jobBox .upperPart .description {
    font-size: 18px;
    font-weight: 400;
    color: #121212;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .jobBox .bottomPart p {
    font-size: 14px;
    font-weight: 400;
    color: #121212;
    opacity: 0.3;
  }
  .jobBox .bottomPart .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .jobBox .bottomPart .arrow:hover {
    background-color: #00cdc2;
    transition: 0.7s;
    cursor: pointer;
    rotate: -45deg;
    color: #fff;
  }

  .cntnr .jobBox .upperPart {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  .cntnr .jobBox .bottomPart {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1220px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
  @media screen and (max-width: 840px) {
    .cntnr {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .wrapper {
    display: flex;
    gap: 16px;
    @media screen and (max-width: 840px) {
      flex-direction: column;
    }
  }
  ul {
    display: block;
    height: inherit;
  }
  ul {
    list-style-type: none;
    @media screen and (max-width: 840px) {
      display: none;
    }
  }
  li:nth-child(1) {
    position: absolute;
    border-radius: 3px;
    left: 0%;
    height: 60px;
    width: 60px;
    animation-delay: 0s;
    animation-duration: 19s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(2) {
    position: absolute;
    border-radius: 3px;
    left: 5%;
    height: 45px;
    width: 45px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(3) {
    position: absolute;
    border-radius: 3px;
    left: 9%;
    height: 70px;
    width: 70px;
    animation-delay: 0s;
    animation-duration: 22s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(4) {
    position: absolute;
    border-radius: 3px;
    left: 13%;
    height: 20px;
    width: 20px;
    animation-delay: 0s;
    animation-duration: 33s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(5) {
    position: absolute;
    border-radius: 3px;
    left: 18%;
    height: 20px;
    width: 20px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(6) {
    position: absolute;
    border-radius: 3px;
    left: 22%;
    height: 100px;
    width: 100px;
    animation-delay: 0s;
    animation-duration: 22s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(7) {
    position: absolute;
    border-radius: 3px;
    left: 30%;
    height: 20px;
    width: 20px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(8) {
    position: absolute;
    border-radius: 3px;
    left: 33%;
    height: 20px;
    width: 20px;
    animation-delay: 0s;
    animation-duration: 19s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(9) {
    position: absolute;
    border-radius: 3px;
    left: 40%;
    height: 20px;
    width: 20px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(10) {
    position: absolute;
    border-radius: 3px;
    left: 45%;
    height: 20px;
    width: 20px;
    animation-delay: 0s;
    animation-duration: 19s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(11) {
    position: absolute;
    border-radius: 3px;
    left: 50%;
    height: 20px;
    width: 20px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(12) {
    position: absolute;
    border-radius: 3px;
    left: 55%;
    height: 20px;
    width: 20px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(13) {
    position: absolute;
    border-radius: 3px;
    left: 60%;
    height: 20px;
    width: 20px;
    animation-delay: 0s;
    animation-duration: 25s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(14) {
    position: absolute;
    border-radius: 3px;
    left: 65%;
    height: 20px;
    width: 20px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(15) {
    position: absolute;
    border-radius: 3px;
    left: 70%;
    height: 20px;
    width: 20px;
    animation-delay: 0s;
    animation-duration: 20s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(16) {
    position: absolute;
    border-radius: 3px;
    left: 75%;
    height: 20px;
    width: 20px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(17) {
    position: absolute;
    border-radius: 3px;
    left: 80%;
    height: 70px;
    width: 70px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(18) {
    position: absolute;
    border-radius: 3px;
    left: 85%;
    height: 80px;
    width: 80px;
    animation-delay: 0s;
    animation-duration: 29s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(19) {
    position: absolute;
    border-radius: 3px;
    left: 90%;
    height: 150px;
    width: 150px;
    background: rgba(255, 255, 255, 0.8);
  }
  li {
    animation: animate 25s linear 1s infinite;
    @media screen {
    }
  }

  @keyframes animate {
    from {
      transform: translateY(+2500%) rotate(180deg);
    }
    to {
      transform: translateY(-2500%) rotate(360deg);
    }
  }
  .loading {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
`;

Container.NoAvaivable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #dfdfdf;
  border-radius: 30px;
  height: 412px;
  max-width: 496px;
  padding: 49px 58px 35px 37px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.6);
    transform: scale(1.05);
    transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
  }

  @media screen and (max-width: 840px) {
    padding: 39px 17px 45px 37px;
  }
  @media screen and (max-width: 416px) {
    padding: 39px 17px 45px 37px;
    max-width: 329px;
  }
  @media screen and (max-width: 370px) {
    padding: 39px 17px 45px 37px;
    max-width: 296px;
  }
`;

Container.Text = styled.h3`
  color: #121212;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 30px;
  width: 100%;

  @media screen and (max-width: 653px) {
    width: 100%;
  }
`;
