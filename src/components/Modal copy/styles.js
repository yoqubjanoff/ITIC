import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* background-color: red;
    opacity: 0.25;
    backdrop-blur: blur(4px); */
  display: flex;
  align-items: center;
  justify-content: center;
`;

Container.Wrapper = styled.div`
  height: 635px;
  width: 966px;
  background: rgba(5, 28, 44, 0.5);
  backdrop-filter: blur(75px);
  display: flex;
  flex-direction: column;
  z-index: 99;
`;

Container.Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 83px 0px 302px;
`;

Container.Text = styled.h1`
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

Container.Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 46px 157px 201px 157px;
  gap: 24px;
`;

Container.Group = styled.div`
  display: flex;
  gap: 24px;
`;

