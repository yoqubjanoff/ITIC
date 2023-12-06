import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 466px;
  height: 18px;
  @media screen and (max-width: 416px) {
    justify-content: center;
    width: 291px;
  }
  @media screen and (max-width: 370px) {
    justify-content: center;
    width: 210px;
  }

  @media screen and (max-width: 653px) {
    .link:not(:first-child, :last-child) {
      display: none;
    }
  }

  .link {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    cursor: pointer;
  }
  .link-number {
    @media screen and (max-width: 416px) {
      display: none;
    }
  }
`;
