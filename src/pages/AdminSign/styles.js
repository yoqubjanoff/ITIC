import styled from "styled-components";
import background from "../../assets/images/signBack.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .forms {
    width: 400px;
    height: 500px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    z-index: 1;

    .errorText{
      color: red;
    }

    .submitBtn {
      align-items: flex-start;
      background-color: #00cdc2;
      display: inline-flex;
      gap: 10px;
      padding: 17px 42px;
      position: relative;
      outline: none;
      border: none;

      color: #ffffff;
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: normal;
      position: relative;
      cursor: pointer;
    }

    .inputField {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px;
      background-color: #ffffff;
      border: 1px solid;
      border-color: #e1e1e1;
      border-radius: 1000px;
      height: 60px;
      width: 305px;

      img{
        cursor: pointer;
        width: 21px;
      }
    }

    .adminLog {
      outline: none;
    border: none;
    }
  }
  .inputBox {
    display: flex;
    flex-direction: column;
    label {
      color: #fff;
      padding-left: 24px;
      padding-bottom: 8px;
    }
  }
`;

Container.Header = styled.div`
  text-align: center;
  .headerText {
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 22px;
    white-space: nowrap;
    margin-top: 30px;
  }
`;
