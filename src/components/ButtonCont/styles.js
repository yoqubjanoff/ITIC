import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: ${({btnGap}) => (btnGap ? btnGap : "6px")};
  cursor: pointer;
  width: fit-content;
`;

Container.ModalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({fontSize}) => (fontSize ? fontSize : "24px")};
    font-weight: 500;
    border: none;
    user-select: none;
    width: ${({btnwidth}) => (btnwidth ? btnwidth : "165px") };
    height: ${({btnheight}) => (btnheight ? btnheight : "65px")};
    background-color: #00cdc2;
    color: #fff;

    /* @media screen and (max-width: 840px) {
      height: 77px;
      width: 288px;
    } */
    @media screen and (max-width: 653px) {
      height: 44px;
      width: 194px;
      font-size: 16px;
    }

    
`;

Container.ArrowWrapper = styled.div`
    width: ${({width}) => (width ? width : "65px")};
    height: ${({height}) => (height ? height : "65px")};
    border-radius: 50%;
    background-color: #00cdc2;
    display: flex;
    align-items: center;
    justify-content: center;

    
    /* @media screen and (max-width: 840px) {
      height: 77px;
      width: 77px;
    } */

    @media screen and (max-width: 653px) {
      height: 44px;
      width: 44px;
    }

    
`;

