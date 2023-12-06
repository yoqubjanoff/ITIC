import styled from "styled-components";

export const Container = styled.div`
  .imageInputWrap {
    width: ${({inputwidth}) => (inputwidth ? inputwidth : "209px")};
    height: ${({inputheight}) => (inputheight ? inputheight : "240px")};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px #d9d9d9 dashed;
    border-radius: ${({br}) => (br ? br : "20px")};
  }
  .imageInput {
    display: none;
  }
  & > .fileName {
    margin-left: 1%;
    font-size: 25px;
  }
`;
