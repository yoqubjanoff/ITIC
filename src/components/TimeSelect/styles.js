import styled from "styled-components";

export const Wrapper = styled.div`
  width: 305px;
  height: 82px;
`;

Wrapper.Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  width: 305px;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #e1e1e1;
  border-radius: 1000px;
  height: 60px;
  padding: 20px 24px;
  cursor: pointer;
`;

Wrapper.Header = styled.p`
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  padding-left: 24px;
  padding-bottom: 8px;
`;

Wrapper.Pre = styled.div`
color: #000000;
font-size: 16px;
font-weight: 400;
letter-spacing: 0;
line-height: normal;
opacity: 0.4;
white-space: nowrap;
`;

Wrapper.Suf = styled.div`
`;

Wrapper.Select = styled.select  `
    display: flex;
    align-items: center;
    border: none;
    outline: none;
`;

Wrapper.Item = styled.div`
  display: flex;
  flex-direction: column;
`;

Wrapper.Items = styled.div`
display: flex;
flex-direction: column;
position: absolute;
top: 100%;
`;

