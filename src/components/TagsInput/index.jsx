import React, { useState } from "react";
import closeTag from "../../assets/icons/tagClose.svg";
import { Container } from "./styles";

function TagInput({ tags, setTags }) {
  const [inputValue, setInputValue] = useState("");

  const removeTags = (indexToRemove) => {
    const newTags = [...tags];
    newTags.splice(indexToRemove, 1);
    setTags(newTags);
  };

  const addTags = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      const newTags = [...tags, inputValue.trim()];
      setTags(newTags);
      setInputValue("");
    }
  };

  return (
    <Container>
      <div className="tagsInput">
        <ul className="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span>{tag}</span>
              <img
                src={closeTag}
                alt="close icon"
                onClick={() => removeTags(index)}
                style={{ cursor: "pointer" }}
              />
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add tags"
          onKeyUp={(e) => addTags(e)}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </Container>
  );
}

export default TagInput;
