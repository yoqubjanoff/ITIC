import styled from "styled-components";

export const Wrapper = styled.div`
  width: 212px;
  height: 42px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 14px 13px 16px;
`;

Wrapper.Input = styled.input`
  width: 100%;
  height: 90%;
  border: none;
  outline: none;
  background: none;
  &::placeholder {
    color: #000000;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    opacity: 0.3;
  }
`;
