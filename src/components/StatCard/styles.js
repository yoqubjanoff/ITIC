import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 131px;
  width: 280px;
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 14px;
  padding: 40px 34px 43px 24px;
`;

Container.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;
  height: 48px;
  gap: 8px;
`;

Container.Title = styled.p`
  color: #000000;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
`;

Container.Nums = styled.p`
  color: #000000;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
`;

Container.TrendNum = styled.div`
  color: #2ebd87;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  margin-left: 4px;
`;

Container.Trending = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

Container.Bottom = styled.div`
  display: flex;
  align-items: center;
  width: 52px;
  height: 16px;
`;
