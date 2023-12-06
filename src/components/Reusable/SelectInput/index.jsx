import { Container } from "./styles";
import arrow from "../../../assets/icons/angle-down.svg";
import { useState } from "react";

function SelectInput({ selectedValue, setSelected, options,value}) {
  const [isActive, setIsActive] = useState(false);

  const handleItemClick = (optionValue) => {
    setSelected(optionValue);
    setIsActive(false);
  };  

  return (
    <Container>
      <Container.Header>Position Level</Container.Header>
      <Container.Wrapper>
        <Container.Btn onClick={() => setIsActive(!isActive)}>
          {selectedValue} <img src={arrow} alt="arrow icon" />
        </Container.Btn>
        {isActive && (
          <Container.Items>
            {options.map((option) => (
              <Container.Item
                key={option.id}
                onClick={() => handleItemClick(option.value)}
              >
                {option.value}
              </Container.Item>
            ))}
          </Container.Items>
        )}
      </Container.Wrapper>
    </Container>
  );
}

export default SelectInput;
