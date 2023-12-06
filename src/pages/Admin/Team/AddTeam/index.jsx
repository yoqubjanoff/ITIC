import { useRef, useState, useEffect } from "react";
import { Wrapper } from "./styles";
import uploadIcon from "../../../../assets/icons/uploadCloud.svg";
import AdminInput from "../../../../components/Reusable/AdminInput";
import Button from "../../../../components/Reusable/ButtonComb/Button";
import RegularButton from "../../../../components/Reusable/RegularButton";
import { useNavigate } from "react-router-dom";
import { useTeamContext } from "../../../../context/TeamContext";
import Toast from "../../../../components/Reusable/Toast";
import request from "../../../../services";
import Swal from "sweetalert2";
import Switch from "../../../../components/Reusable/Switch";
import { Flex } from "../../Cases/AddCases/styles";
import { useLocation } from "react-router-dom";

function AddTeam() {
  const [{ selected }, dispatch] = useTeamContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [state, setState] = useState({
    firstName: selected?.firstName || "",
    lastName: selected?.lastName || "",
    position: selected?.position || "",
    employeePhotoUrl: selected?.employeePhotoUrl || "",
    attachmentId: selected?.attachmentId || "",
    isActive: selected?.isActive || false,
  });


  //! UPLOAD IMAGE FUNCTION
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
        employeePhotoUrl: fileUrl,
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
        state?.attachmentId &&
        state?.firstName &&
        state?.lastName &&
        state?.position
      ) {
        try {
          const res = await request.post(
            `admin/employee`,
            {
              data: {
                firstName: state?.firstName,
                position: state?.position,
                lastName: state?.lastName,
                employeePhotoUrl: state?.employeePhotoUrl,
                attachmentId: state?.attachmentId,
                isActive: state?.isActive,
              },
            },
            Toast({
              type: "success",
              message: "Saved",
            })
          );

          dispatch({
            type: "setSelectedTeam",
            payload: {},
          });
          navigate("/admin/team");
        } catch (error) {
          Swal.fire("Saqlashda xatolik yuz berdi:", error);
        }
      } else {
        Swal.fire("Avval barcha inputlarga malumot kiriting !");
      }
    } else {
      if (
        state?.attachmentId &&
        state?.firstName &&
        state?.lastName &&
        state?.position
      ) {
        try {
          const res = await request.put("admin/employee", {
            data: {
              id: selected?.id,
              firstName: state?.firstName,
              position: state?.position,
              lastName: state?.lastName,
              employeePhotoUrl: state?.employeePhotoUrl,
              attachmentId: state?.attachmentId,
              isActive: state?.isActive,
            },
          });
          navigate("/admin/team");
          Toast({
            type: "success",
            message: "Saved",
          });
          dispatch({
            type: "setSelectedTeam",
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
        <Wrapper.Title>Add Member</Wrapper.Title>
        <Wrapper.Nav>
          <div onClick={() => navigate("/admin/team")}>
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
          <label htmlFor="fileInput">
            <div className="imageInputWrap">
              {state?.employeePhotoUrl ? (
                <img
                  className="imgSize"
                  src={state?.employeePhotoUrl}
                  alt="upload cloud"
                />
              ) : (
                <img  src={uploadIcon} alt="upload cloud" />
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
          <Wrapper.WrapTable>
            <Wrapper.Flex>
              <AdminInput
                label={"Enter name"}
                placeholder={"Name"}
                value={state?.firstName || ""}
                onChange={(e) => handleInputChange(e, "firstName")}
              />
              <AdminInput
                label={"Enter surname"}
                placeholder={"Surname"}
                value={state?.lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
              />
            </Wrapper.Flex>
            <Wrapper.Flex>
              <AdminInput
                label={"Position"}
                placeholder={"Enter position"}
                value={state?.position}
                onChange={(e) => handleInputChange(e, "position")}
              />
              <Switch
                onClick={(v) => setState({ ...state, isActive: v })}
                checked={state?.isActive ? true : false}
              />{" "}
              Active
            </Wrapper.Flex>
          </Wrapper.WrapTable>
        </Wrapper.InputTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default AddTeam;
