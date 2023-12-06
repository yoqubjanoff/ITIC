import styled from "styled-components";

export const AdminNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px 10px 24px;
  border-bottom: 1px solid #d9d9d9;
  background: #fff;
`;
AdminNav.Logo = styled.img`
  width: 63px;
  height: 31.798px;
`;
AdminNav.AdminBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
AdminNav.Text = styled.p`
  color: #051313;
  font-family: SF Pro 'Display';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
AdminNav.UserLogo = styled.img`
  width: 40px;
  height: 40px;
`;
