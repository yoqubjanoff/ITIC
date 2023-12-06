import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 170vw;
  height: 100vh;
  background: rgba(0, 205, 194, 0.7);
  padding: 0 50px;

  @media screen and (max-width: 840px) {
    width: 100vw;
    height: auto;
  }

  @media screen and (max-width: 653px) {
    height: 786px;
  }
  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    z-index: -1;
  }

  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 200px;
    height: 200px;
    animation-delay: 4s;
  }

  .circles li:nth-child(4) {
    left: 20%;
    width: 100px;
    height: 100px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
  .circles li:nth-child(11) {
    left: 25%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 19s;
  }
  .circles li:nth-child(12) {
    left: 5%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 25s;
  }
  .circles li:nth-child(13) {
    left: 55%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 22s;
  }
  .circles li:nth-child(14) {
    left: 15%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 10s;
  }
  .circles li:nth-child(15) {
    left: 95%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 30s;
  }
  .circles li:nth-child(16) {
    left: 75%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 15s;
  }
  .circles li:nth-child(17) {
    left: 22%;
    width: 100px;
    height: 100px;
    animation-delay: 0s;
    animation-duration: 28s;
  }
  .circles li:nth-child(18) {
    left: 120%;
    width: 200px;
    height: 200px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 840px) {
    flex-direction: column;
    width: fit-content;
  }
  @media screen and (max-width: 653px) {
    align-items: center;
  }

  .mblRspnsv {
    display: none;
  }

 .jobBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 412px;
    width: 100%;
    max-width: 326px;
    border-radius: 30px;
    border: 1px solid #dfdfdf;
    padding: 49px 32px 35px 37px;
    background-color: #fff;
  }

  .mblRspnsv .text {
    margin-right: 50px;
  }

  .mblRspnsv .text h1 {
    color: #121212;
    font-size: 62px;
    font-weight: 500;
  }

  .mblRspnsv .text p {
    color: #121212;
    font-size: 18px;
    opacity: 0.6;
    font-weight: 400;
  }

  .mblRspnsv .jobBox .upperPart {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  .mblRspnsv .jobBox .bottomPart {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 653px) {
    .mblRspnsv {
      display: block;
      width: 100vw;
    }
    .container {
      display: none;
    }
  }
  .mobile {
    display: none;
    @media screen and (max-width: 653px) {
      display: inline-block;
    }
  }
`;

Container.Text = styled.div`
  @media screen and (max-width: 840px) {
    padding-left: 30px;
  }

  @media screen and (max-width: 653px) {
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    padding-left: 0px;
  }
`;

Container.Vacancies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (max-width: 840px) {
    width: 100%;
    height: 100%;
  }
`;

Container.SeeAll = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 412px;
  width: 326px;
  border-radius: 30px;
  padding: 49px 32px 35px 37px;
  background-color: #00cdc2;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.6);
    transform: scale(1.05);
  }
  @media screen and (max-width:1270px) {
    width: 220px;
  }
  @media screen and (max-width:840px) {
    width: 326px;
  }
`;

Container.ArrowWrap = styled.div`
  display: flex;
  justify-content: end;
`;

Container.Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #fff;
  color: #00cdc2;
`;

Container.ArrowText = styled.h3`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
`;
