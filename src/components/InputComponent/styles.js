import { styled } from "styled-components";

export const Container = styled.div`
  height: 82px;

  @media screen and (max-width: 653px) {
    width: 310px;
    height: ${({ conHeight }) => conHeight || 'auto'};
  }
`;


Container.Wrap = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff0d;
  height: ${({ height }) => (height ? height : "60px")};
  width: ${({ width }) => (width ? width : "310px")};
  &:focus-within {
    border-bottom: 1px solid #ffffff;
  }

  @media screen and (max-width: 653px) {
    width: 310px;
    height: 35px;
  }
`;

Container.Label = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  padding-left: 20px;
  padding-bottom: 7px;
`;

Container.Input = styled.input`
  width: 100%;
  height: 90%;
  border: none;
  outline: none;
  /* border-bottom: 1px solid #fff; */
  padding: 20px 20px 20px 20px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  background: none;
  &::placeholder {
    color: ${({ placeholderColor }) =>
      placeholderColor ? placeholderColor : "rgba(255, 255, 255, 0.4)"};
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

Container.Prefix = styled.div`
  padding: 20px 0px 20px 20px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
`;
