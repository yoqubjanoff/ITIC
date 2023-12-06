import styled from "styled-components";

export const Container = styled.div`
  height: 82px;
  position: relative;
  width: 305px;
`;

Container.Header = styled.div`
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  padding-left: 24px;
  padding-bottom: 8px;
`;

Container.Wrapper = styled.div`
  position: relative;
  user-select: none;
`;

Container.Btn = styled.div`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #e1e1e1;
  border-radius: 1000px;
  height: 60px;
  width: 305px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  cursor: pointer;

  color: #000000;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

Container.Items = styled.div`
  position: absolute;
  z-index: 100;
  top: 110%;
  background-color: #ccc;
  cursor: pointer;
  width: 305px;
  height: 100%;
`;

Container.Item = styled.div`
  padding: 10px;
  background-color: #ccc;
  &:hover {
    background-color: #fafafa;
  }
`;
