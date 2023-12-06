import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Container } from "./styles";

function Button(props) {
  return (
    <Container onClick={props.onClick} btnGap={props.btnGap}>
      <div>
        <Container.ModalWrapper
          fontSize={props.fontSize}
          btnwidth={props.btnwidth}
          btnheight={props.btnheight}
        >
          {props.title}
        </Container.ModalWrapper>
      </div>
      <div>
        <Container.ArrowWrapper width={props.aWidth} height={props.aHeight}>
          <FiArrowUpRight size={props.iconSize} color="#fff" />
        </Container.ArrowWrapper>
      </div>
    </Container>
  );
}

export default Button;