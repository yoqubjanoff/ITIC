import { Container } from "./styles";
import { useState } from "react";
import closeIcon from "../../assets/icons/close.svg";
import Input from "../InputComponent/Input";
import Button from "../Reusable/ButtonCombModal/Button";
import request from "../../services";
import Toast from "../Reusable/Toast";
import Swal from "sweetalert2";

function FormModal({ isVisible, onClose }) {
  const [checknumber, setCheckNumber] = useState(false);
  const [getData, setGetData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    comment: "",
  });
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  // ! POST TO SERVER DATA FUNCTION
  const saveData = async () => {
    if (getData?.fullName && getData?.phoneNumber && getData?.email) {
      try {
        const isValidEmail = validateEmail(getData.email);
        if (!isValidEmail) {
          Swal.fire({
            icon: "error",
            title: "Noto'g'ri email formati",
            text: "Noto'g'ri email formati kiritildi",
          });
          return;
        }
        const res = await request.post(`public/call-request`, {
          data: {
            fullName: getData?.fullName,
            phoneNumber: `+998${getData?.phoneNumber}`,
            email: getData?.email,
            comment: getData?.comment,
          },
        });
        Toast({
          type: "success",
          message: "Saved",
        });

        setGetData({
          fullName: "",
          phoneNumber: "",
          email: "",
          comment: "",
        });

        onClose();
      } catch (error) {
        Swal.fire("There is a problem with the Internet or with the server");
        console.error("Saqlashda xatolik yuz berdi:", error);
      }
    } else {
      Swal.fire("Barcha maydonchalarni to'ldiring");
    }
  };
  //! CHECK EMAIL FUNCTION
 

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  return (
    <Container onClick={handleClose} id="wrapper">
      <Container.Wrapper>
        <Container.Header>
          <Container.Text>Get Free Consultation</Container.Text>
          <img
            src={closeIcon}
            onClick={() => onClose()}
            style={{ cursor: "pointer" }}
            alt="close icon"
          />
        </Container.Header>
        <Container.Form>
          <Container.Group>
            <Input
              label={"Full Name"}
              placeholder={"Enter Full Name"}
              type={"text"}
              width={"652px"}
              onChange={(event) =>
                setGetData({ ...getData, fullName: event.target.value })
              }
            />
          </Container.Group>
          <Container.Group>
            <Input
              label={"Phone Number"}
              placeholder={"Enter Phone Number"}
              type={"number"}
              prefix={"+998"}
              onKeyPress={(event) => {
                if (event.target.value.length === 9) {
                  event.preventDefault();
                }
              }}
              onChange={(event) => {
                if (event.target.value.length <= 9) {
                  setGetData({ ...getData, phoneNumber: event.target.value });
                }
              }}
            />

            <Input
              label={"Email Address"}
              placeholder={"Enter Email Address"}
              type={"email"}
              onChange={(event) =>
                setGetData({ ...getData, email: event.target.value })
              }
            />
          </Container.Group>
          <div className="group">
            <Input
            conHeight={"132px"}
              resHeight={"110px"}
              label={"Comment"}
              placeholder={"Add Comment"}
              type={"text"}
              width={"652px"}
              onChange={(event) =>
                setGetData({ ...getData, comment: event.target.value })
              }
            />
            <Button
              onClick={saveData}
              title="Submit"
              fontSize="24px"
              iconSize="24px"
            />
          </div>
        </Container.Form>
      </Container.Wrapper>
    </Container>
  );
}

export default FormModal;
