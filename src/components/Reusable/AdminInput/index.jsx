import { Container, Wrapper } from "./styles";
import { useState } from 'react'; 

function AdminInput({ label, placeholder, prefix, onChange,value, suffix, type,onKeyPress,}) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (newValue) => {
    setInputValue(newValue);
    onChange(newValue); 
  };
  const handleKeyPress = (event) => {
    if (typeof onKeyPress === "function") {
      onKeyPress(event);
    }
    if (type === "number" && event.target.value.length === 9) {
      event.preventDefault();
    }
  };

  return (
    <Container>
      <Wrapper.Label >{label}</Wrapper.Label>
      <Wrapper>
        <Container.Prefix>{prefix}</Container.Prefix>
        <Wrapper.Input
          placeholder={placeholder}
          value={value} 
          onChange={handleInputChange} 
          type={type}
          onKeyPress={handleKeyPress}
        />
        <Container.Suffix>{suffix}</Container.Suffix>
      </Wrapper>
    </Container>
  );
}

export default AdminInput;
