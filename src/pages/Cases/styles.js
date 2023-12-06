import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 133vw;
  background-color: #050919;
  overflow: hidden;
  padding: 0 200px;
  @media screen and (max-width: 1000px) {
    padding: 0 0 0 0;
    }

  .wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 400px;
    @media screen and (max-width: 1630px) {
      gap: 0px;
    }

    @media screen and (max-width: 1442px) {
      gap: 50px;
    }
    @media screen and (max-width: 840px) {
      height: 2040px;
      width: fit-content;
      flex-direction: column;
      gap: 51px;
      align-items: flex-start;
      padding: 0 15px;
      flex-wrap: nowrap;
    }

    @media screen and (max-width: 653px) {
      width: 100vw;
      align-items: center;
      height: 1230px;
    }
  }

  .textWrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 476px;
    gap: 13px;
    @media screen and (max-width: 840px) {
      gap: 5px;
      padding-left: 20px;
    }

    @media screen and (max-width: 653px) {
      align-items: center;
      text-align: center;
      margin: 0;
      padding: 0;
    }
  }

  .response {
    display: none;
    @media screen and (max-width: 840px) {
      display: block;
    }

    @media screen and (max-width: 653px) {
      display: none;
    }
  }

  .mobile {
    margin-top: -70px;
    display: none;
    @media screen and (max-width: 653px) {
      display: block;
    }
  }

  @media screen and (max-width: 840px) {
    height: 2040px;
    width: 100vw;
    flex-direction: column;
    gap: 51px;
    align-items: center;
    padding: 0;
    flex-wrap: nowrap;

    
  }

  @media screen and (max-width: 653px) {
    width: 100vw;
    align-items: center;
    height: 1230px;
  }
`;

Container.CasesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 918px;
  height: 100%;
  overflow: scroll;
  overflow-y: scroll;
  gap: 60px;
  &::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (max-width: 840px) {
    width: fit-content;
    gap: 33px;
    overflow: hidden;
    overflow-y: hidden;
  }
`;
