import { Wrapper } from "./styles";
import AdminInput from "../../../../components/Reusable/AdminInput";
import Button from "../../../../components/Reusable/ButtonComb/Button";
import RegularButton from "../../../../components/Reusable/RegularButton";
import { useNavigate } from "react-router-dom";
import uploadIcon from "../../../../assets/icons/uploadCloud.svg";
import { useState } from "react";
import { useTestomoniralsContext } from "../../../../context/TestomoniralsContex";
import request from "../../../../services";
import Toast from "../../../../components/Reusable/Toast";
import Swal from "sweetalert2";
import Switch from "../../../../components/Reusable/Switch";

function AddTestimonials() {
  const navigate = useNavigate();
  const [{ selected }, dispatch] = useTestomoniralsContext();
  const [state, setState] = useState({
    name: selected?.name || "",
    surname: selected?.surname || "",
    companyName: selected?.companyName || "",
    content: selected?.content || "",
    testomonialPhotoUrl: selected?.testomonialPhotoUrl || "",
    attachmentId: selected?.attachmentId || "",
    isActive: selected?.isActive || false,
  });
  //! POST UPLOAD IMAGE FUNCTION
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    try {
      const formData = new FormData();
      formData.append("file", file);

      const resData = await request.post("file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileUrl } = resData?.data?.data;
      const { id } = resData?.data?.data;

      setState((prevState) => ({
        ...prevState,
        testomonialPhotoUrl: fileUrl,
        attachmentId: id,
      }));
      Toast({
        type: "success",
        message: "Rasm yuklandi",
      });
      e.target.value = null;
    } catch (error) {
      console.error("Yuklashda xatolik yuz berdi:", error);
    }
  };
  //! GET INPUT VALUE FUNCTION
  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    setState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };
  //! POST FUNCTION
  const postFunction = async () => {
    if (!selected?.id) {
      if (
        state?.name &&
        state?.surname &&
        state?.content &&
        state?.companyName &&
        state?.attachmentId 
      ) {
        try {
          const res = await request.post(
            `admin/testomonial`,
            {
              data: {
                name: state?.name,
                surname: state?.surname,
                content: state?.content,
                companyName: state?.companyName,
                employeePhotoUrl: state?.employeePhotoUrl,
                testomonialPhotoUrl: state?.testomonialPhotoUrl,
                attachmentId: state?.attachmentId,
                isActive: state?.isActive,
              },
            },
            Toast({
              type: "success",
              message: "Saved",
            })
          );
          setState({
            ...state,
            firstName: "",
            lastName: "",
            position: "",
            attachmentId: "",
            employeePhotoUrl: "",
            client: "",
            isActive: false,
          });
          navigate("/admin/testimonials");
        } catch (error) {
          Swal.fire("Saqlashda xatolik yuz berdi:", error);
        }
      } else {
        Swal.fire("Avval barcha inputlarga malumot kiriting !");
      }
    } else {
      if (
        state?.name &&
        state?.surname &&
        state?.content &&
        state?.companyName &&
        state?.testomonialPhotoUrl &&
        state?.attachmentId
      ) {
        try {
          const res = await request.put(
            `admin/testomonial`,
            {
              data: {
                id:selected?.id,
                name: state?.name,
                surname: state?.surname,
                content: state?.content,
                companyName: state?.companyName,
                testomonialPhotoUrl: state?.testomonialPhotoUrl,
                attachmentId: state?.attachmentId,
                isActive: state?.isActive,
              },
            },
            navigate("/admin/testimonials"),
            Toast({
              type: "success",
              message: "Saved",
            })
            );
            dispatch({
              type: "setSelectedTestomonirals",
              payload: {},
            });
        } catch (error) {
          console.error("Saqlashda xatolik yuz berdi:", error);
        }
      } else {
        Swal.fire("Avval rasmni kiriting iltimos !");
      }
    }
  };

  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Title>Add Testimonial</Wrapper.Title>
        <Wrapper.Nav>
          <div onClick={() => navigate("/admin/testimonials")}>
            <RegularButton title={"Cancel"} />
          </div>
          <Button
            btnheight="42px"
            btnwidth="135px"
            title="Save changes"
            fontSize="14px"
            aHeight="42px"
            aWidth="42px"
            iconSize="24px"
            onClick={postFunction}
          />
        </Wrapper.Nav>
        <Wrapper.InputTable>
          <label htmlFor="fileInput" className="imageInputWrap">
            <div>
              {state?.testomonialPhotoUrl ? (
                <img
                  className="imgSize"
                  src={state?.testomonialPhotoUrl}
                  alt=""
                />
              ) : (
                <img src={uploadIcon} alt="upload cloud" />
              )}
            </div>
          </label>
          <input
            className="imageInput"
            type="file"
            id="fileInput"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
           <Switch
              onClick={(v) => setState({ ...state, isActive: v })}
              checked={state?.isActive ? 1 : 0}
            />{" "}
            Active
          <Wrapper.WrapTable>
            <Wrapper.Flex>
              <AdminInput
                label={"Name"}
                placeholder={"Enter Name"}
                value={state?.name}
                onChange={(e) => handleInputChange(e, "name")}
              />
              <AdminInput
                label={"Surname"}
                placeholder={"Enter Surname"}
                value={state?.surname}
                onChange={(e) => handleInputChange(e, "surname")}
              />
            </Wrapper.Flex>
            <Wrapper.Flex>
              <AdminInput
                label={"Company Name"}
                placeholder={"Company Name"}
                value={state?.companyName}
                onChange={(e) => handleInputChange(e, "companyName")}
              />
              <AdminInput
                label={"Content"}
                placeholder={"Enter Content"}
                value={state?.content}
                onChange={(e) => handleInputChange(e, "content")}
              />
            </Wrapper.Flex>
          </Wrapper.WrapTable>
        </Wrapper.InputTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default AddTestimonials;
