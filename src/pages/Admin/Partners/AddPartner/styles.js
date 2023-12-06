import styled from "styled-components";
import uploadImg from '../../../../assets/icons/uploadCloud.svg'


export const Container = styled.div`
  position: fixed;
  z-index: 10 ;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  .input-switchbox {
    width: 243px;
  }
  .input-box {
    display: inline-block;
    width: 243px;
    height: 116px;
    border-radius: 20px;
    border: 1px dashed #d9d9d9;
    background: #fff;
    cursor: pointer;
    background-image: url(${uploadImg});
    background-repeat: no-repeat;
    background-position:center ;
    margin-bottom: 15px;
  }
  .input-file{
    width: 243px;
    opacity: 0;
  }
`;

Container.Wrapper = styled.div`
  box-shadow: 13px 10px 94px #223b5326;
  display: flex;
  align-items: center;
  gap: 27px;
  background-color: #fff;
  justify-content: center;
  width: 667px;
  height: 299px;
  .flex {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }
  .buttonWrap {
    display: flex;
    align-items: center;
    gap: 14px;
  }
`;

Container.Title = styled.h3`
  color: #000000;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;
Container.Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .blogImgRen {
    width: 69px;
    height: 44px;
    border-radius: 6px;
    border: 1px solid #eee;
    object-fit: cover;
  }
`;
