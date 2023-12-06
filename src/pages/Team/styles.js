import styled from "styled-components";

export const Container = styled.div`
  width: 230vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 50px;

  @media screen and (max-width: 840px) {
    width: 100vw;
    height: 2100px;
    justify-content: center;
  }

  @media screen and (max-width: 653px) {
    padding: 25px 15px;
    height: auto;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;

  @media screen and (max-width: 840px) {
    flex-direction: column;
    width: fit-content;
    .text {
    }
  }

  @media screen and (max-width: 653px) {
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 0;
    }
  }
`;

Container.Images = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  text-align: center;
  .image-teams {
    max-width: 310px;
    height: 360px;
    border-radius: 30px;
    object-fit: cover;
    transition: box-shadow 0.3s ease;

    @media screen and (max-width: 1300px) {
      width: 200px;
    }
    @media screen and (max-width: 840px) {
      width: 310px;
    }

    @media screen and (max-width: 653px) {
      height: 210px;
      width: 173px;
    }
  }

  @media screen and (max-width: 840px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 370px) {
    flex-wrap: wrap;
    grid-template-columns: none;
  }
`;

Container.Name = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 700;

  @media screen and (max-width: 653px) {
    font-size: 14px;
  }
`;

Container.Job = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 400;

  @media screen and (max-width: 653px) {
    font-size: 12px;
  }
`;

//fjbeorf
