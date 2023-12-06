import styled from "styled-components";
import upload from "../../assets/icons/upload-cloud.svg";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 653px) {
    top: 15px;
    padding-bottom: 15px;
  }
`;

Container.Wrapper = styled.div`
  height: 675px;
  width: 966px;
  background: rgba(5, 28, 44, 0.5);
  backdrop-filter: blur(75px);
  display: flex;
  flex-direction: column;
  z-index: 99;

  @media screen and (max-width: 840px) {
    height: 695px;
    width: 728px;
  }

  @media screen and (max-width: 653px) {
    height: 715px;
    width: 355px;
  }
`;

Container.Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 83px 0px 156px;

  @media screen and (max-width: 840px) {
    padding: 24px 45px 0px 38px;
  }
`;

Container.Text = styled.h1`
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media screen and (max-width: 653px) {
    font-size: 24px;
  }
`;

Container.Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 46px 157px 201px 157px;
  gap: 24px;
  .group {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media screen and (max-width: 840px) {
    padding: 44px 38px 55px 38px;
  }

  @media screen and (max-width: 653px) {
    padding: 20px 23px 20px 23px;
    .group {
      align-items: center;
    }
  }
`;

Container.Group = styled.div`
  display: flex;
  gap: 24px;

  .fileInput {
    border-radius: 20px;
    width: 100%;
    max-width: 375px;
    position: relative;
    background-position: right center; /* Adjusted background position */
    background-repeat: no-repeat;
    margin: 0 0 0 0;
    cursor: pointer;

    &::before {
      position: absolute;
      top: 65%;
      left: 20px; /* Adjusted left position to move content to the left */
      color: white;
      transform: translateY(-50%); /* Adjusted transform property */
      content: "Upload from file";
      cursor: pointer;
    }

    &::after {
      content: "";
      position: absolute;
      top: 65%;
      right: 28px;
      transform: translateY(-50%);
      background-image: url(${upload});
      background-position: left center; /* Adjusted background position */
      background-repeat: no-repeat;
      width: 20px; /* Set the width and height for the pseudo-element */
      height: 20px;
      cursor: pointer;
    }

    input[label="Attach Your Resume/CV"] {
      display: inline-block;
      padding: 10px 20px;
      background-color: #0b3a48;
      color: white;
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
    }
  }

  input[type="file"] {
    opacity: 0;
    cursor: pointer;
  }

  @media screen and (max-width: 653px) {
    flex-direction: column;
  }
`;
