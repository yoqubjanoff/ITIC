import React from "react";
import loadingImg from '../../../assets/images/itLogo.svg'
import { Loading } from "./style";

const MainLoading = () => {
  return (
    <Loading>
      <img src={loadingImg} alt="" className="loadingimg" />
      <div className="loadingrounded"></div>
    </Loading>
  );
};

export default MainLoading;
