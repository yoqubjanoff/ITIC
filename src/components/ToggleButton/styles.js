import { act } from "react-dom/test-utils";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 305px;
  height: 82px;
`;

Wrapper.Header = styled.div`
  padding-left: 24px;
  padding-bottom: 8px;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

Wrapper.Wrap = styled.div`
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 1000px;
  height: 60px;
  width: 305px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Wrapper.Btn = styled.div`
  cursor: pointer;
  background-color: ${({active}) => (active ? "#00cdc2" : "#fff")};
  outline: none;
  text-align: center;
  border: 0;
  padding: 18px 52px;

  color: ${({active}) => (active ? "#fff" : "#000")};
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:red;
    border-radius: 1000px;
    height: 54px;
    width: 149px;
    background-color: ${({active}) => (active ? "#00cdc2" : "#fff")};
    cursor: pointer;
`;

Wrap.Title = styled.p`
    color: ${({active}) => (active ? "#fff" : "#000")};
`;