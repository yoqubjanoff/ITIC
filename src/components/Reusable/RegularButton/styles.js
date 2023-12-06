import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({bgcolor}) => bgcolor || '#f5f5f5'};
  width: ${({btnwidth}) => (btnwidth ? btnwidth : "93px")};
  height: ${({btnheight}) => (btnheight ? btnheight : "42px")};
  color: rgba(5, 19, 19, 1);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;
