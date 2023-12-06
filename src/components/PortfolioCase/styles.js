import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  max-width: 918px;
  height: 600px;
  align-items: center;

  @media screen and (max-width: 1000px) {
    max-width: 708px;
  }

  @media screen and (max-width: 653px) {
    gap: 16px;
    height: auto;
    padding: 0 30px 30px 30px;
  }

  .imageWrap {
    position: relative;
    width: fit-content;

    .tagWrap {
      position: absolute;
      width: 90%;
      height: auto;
      bottom: 32px;
      left: 32px;
    }

    .tag {
      background-color: #f5f5f5;
      border-radius: 100px;
      display: inline-flex;
      color: #000;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      padding: 8px 22px;
      @media screen and (max-width: 653px) {
        padding: 4px 8px;
      }
    }
  }

  .caseImage {
    height: 501px;
    width: 100%;
    max-width: 918px;
    border-radius: 50px;
    object-fit: cover;

    @media screen and (max-width: 840px) {
      height: 401px;
      object-fit: fill;
    }

    @media screen and (max-width: 653px) {
      height: 197px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
`;

Container.Desc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 107px;
  width: 100%;
`;

Container.Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  @media screen and (max-width: 653px) {
    gap: 4px;
  }
`;

Container.Title = styled.h2`
  color: #ffffff;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;

  @media screen and (max-width: 840px) {
    font-size: 32px;
  }

  @media screen and (max-width: 653px) {
    font-size: 16px;
  }
`;

Container.Parag = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  opacity: 0.67;

  @media screen and (max-width: 653px) {
    font-size: 12px;
  }
`;

Container.Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  width: 60px;
  height: 60px;
  border-radius: 30px;
  &:hover {
    background-color: #00cdc2;
    transition: 0.7s;
  }
  cursor: pointer;

  @media screen and (max-width: 653px) {
    width: 30px;
    height: 30px;
  }
`;
