import styled from "styled-components";

export const Container = styled.div`
  background-color: #050919;
  width: 191vw;
  height: 100vh;
  padding: 0;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 0 100px;
  gap: 292px;
  @media screen and (max-width: 653px) {
      padding: 50px 15px;
    }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 292px;

    @media screen and (max-width: 1536px) {
      gap: 50px;
    }
    @media screen and (max-width: 1450px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media screen and (max-width: 840px) {
    height: 2000px;
    width: 100vw;
    flex-direction: column;
    align-items: flex-start ;
    gap: 80px;
   
  }

  @media screen and (max-width: 653px) {
    align-items: center ;

  }
  @media screen and (max-width: 450px) {
    height: auto;
  }
  
  @media screen and (max-width: 370px) {
    /* height: 1600px; */

  }
  @media screen and (max-width: 320px) {
    /* height: 1500px; */
  }
`;

Container.Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 68px;
  @media screen and (max-width: 1120px) {
    flex-wrap: wrap;
  }
  .catImage {
    width: 100%;
    max-width: 499px;
    height: auto;
    @media screen and (max-width: 1175px) {
      max-width: 390px;
    }
    @media screen and (max-width: 840px) {
      max-width: 499px;
    }
  }

  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
`;
export const HeadingDirection = styled.h1`
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
    font-size: 52px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 42px;
  }
`;
