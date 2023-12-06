// Input.js

import React from "react";
import { Container } from "./styles";

function Input({
  label,
  placeholder,
  value,
  placeholderColor,
  type,
  width,
  height,
  prefix,
  onChange,
  max,
  onKeyPress,
  resHeight,
  conHeight,
}) {
  const handleKeyPress = (event) => {
    if (typeof onKeyPress === "function") {
      onKeyPress(event);
    }
    if (type === "number" && event.target.value.length === 9) {
      event.preventDefault();
    }
  };

  const actualHeight = window.innerWidth < 500 ?  resHeight : conHeight;

  return (
    <Container conHeight={actualHeight}>
      <Container.Label>{label}</Container.Label>
      <Container.Wrap width={width} height={height} resHeight={resHeight}>
        <Container.Prefix>{prefix}</Container.Prefix>
        <Container.Input
          type={type}
          placeholder={placeholder}
          placeholderColor={placeholderColor}
          value={value}
          onChange={onChange}
          max={max}
          onKeyPress={handleKeyPress}
        />
      </Container.Wrap>
    </Container>
  );
}

export default Input;
