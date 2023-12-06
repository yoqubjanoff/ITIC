import { Container } from "./styles";
import uploadIcon from "../../../assets/icons/uploadCloud.svg";
import { useRef, useState } from "react";

function ImageUpload(props) {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleIconClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(event.target.files[0]);
  };
  return (
    <Container inputheight={props.inputheight} inputwidth = {props.inputwidth} br={props.br}>
      <div
        className="imageInputWrap"
        style={{
          backgroundImage: image
            ? `url(${URL.createObjectURL(image)})`
            : "none",
        }}
        onClick={handleIconClick}
      >
        {image ? null : <img src={uploadIcon} alt="upload cloud" />}
      </div>
      <input
        className="imageInput"
        type="file"
        ref={inputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </Container>
  );
}

export default ImageUpload;
