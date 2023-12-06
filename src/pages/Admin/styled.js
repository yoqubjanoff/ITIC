import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #fff;
  &.ColumnBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  &.TagBox {
    width: 100%;
    height: 50px;
    border-radius: 100px;
    background: #f4f7f4;
    display: flex;
    align-items: center;
    padding: 4px;
    gap: 5px;
  }
  p {
    &.Header {
      color: #000;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;
Wrapper.FlexBoxAdmin = styled.div`
  display: flex;
  height: 100%;
`;
