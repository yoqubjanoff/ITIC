import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import RegularButton from "../../../../components/Reusable/RegularButton";
import Button from "../../../../components/Reusable/ButtonComb/Button";
import request from "../../../../services";
import Toast from "../../../../components/Reusable/Toast";
import Switch from "../../../../components/Reusable/Switch";
import { usePartnersContext } from "../../../../context/PartnersContext";
import cloudty from '../../../../assets/icons/uploadCloud.svg'
import Swal from "sweetalert2";

function AddPartner({ isVisible, onClose }) {
  const [{ selected }, dispatch] = usePartnersContext();
  const [urlFormData, setUrlFormData] = useState(
    selected?.partnerPhotoUrl || ""
  );
  const [idOfAttachmentId, setIdOfAttachmentId] = useState(
    selected?.attachmentId || ""
  );
  const [state, setState] = useState({
    partnerPhotoUrl: selected?.partnerPhotoUrl || null,
    attachmentId: selected?.attachmentId || "",
    isActive: selected?.isActive || false,
  });


  useEffect(() => {
    if (selected) {
      setState({
        partnerPhotoUrl: selected.partnerPhotoUrl || null,
        attachmentId: selected.attachmentId || "",
        isActive: selected.isActive || false,
      });
    }
  }, [selected]);


  if (!isVisible) return null;
  const handleCLose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const handleInputChange = async (e) => {
    const files = e.target.files[0];
    try {
      const formData = new FormData();
      formData.append("file", files);

      const resData = await request.post("file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileUrl, id } = resData.data.data;
      Toast({
        type: "success",
        message: "Changed",
      });
      e.target.value = null;
      setUrlFormData(fileUrl);
      setIdOfAttachmentId(id);
    } catch (error) {
      console.error("Yuklashda xatolik yuz berdi:", error);
    }
  };

  const saveImage = async () => {
    if (!selected?.id) {
      if (idOfAttachmentId && urlFormData) {
        try {
          const res = await request.post(`admin/partner`,    {
            data:{
              partnerPhotoUrl: urlFormData,
              attachmentId: idOfAttachmentId,
              isActive: state?.isActive,
            }
          });

          Toast({
            type: "success",
            message: "Saved",
          });

          setState({
            partnerPhotoUrl: "",
            attachmentId: "",
            isActive: false,
          });

          onClose();
          getPartners();
        } catch (error) {
          console.error("Saqlashda xatolik yuz berdi:", error);
        }
      } else {
        Swal.fire("Avval rasmni kiriting iltimos !");
      }
    } else {
      if (idOfAttachmentId && urlFormData) {
        try {
          const res = await request.put(`admin/partner`, {
            data: {
              id: selected?.id,
              partnerPhotoUrl: urlFormData,
              attachmentId: idOfAttachmentId,
              isActive: state?.isActive,
            },
          });
          Toast({
            type: "success",
            message: "Saved",
          });
          dispatch({
            type: "setSelectedPartners",
            payload: {},
          });
          getPartners();
          onClose();
        } catch (error) {
          console.error("Saqlashda xatolik yuz berdi:", error);
        }
      } else {
        Swal.fire("Avval rasmni kiriting iltimos !");
      }
    }
  };

  const getPartners = async () => {
    try {
      const res = await request.get(`admin/partner/all`);
      dispatch({
        type: "setPartner",
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Container onClick={handleCLose} id="container">
      <Container.Wrapper>
        <div className="flex">
          <Container.Title>Upload a logo image</Container.Title>
          <div className="buttonWrap">
            <RegularButton title="Cancel" onClick={() => onClose()}/>
            <Button
              title="Add partner"
              btnheight="42px"
              btnwidth="122px"
              fontSize="14px"
              aHeight="42px"
              aWidth="42px"
              iconSize="24px"
              onClick={saveImage}
            />
          </div>
        </div>
        <div className="input-switchbox">
          <label
            className="input-box"
            htmlFor="nimadir"
            style={{
              backgroundImage: `url(${urlFormData ? urlFormData :  cloudty })`,
              width: "243px",
              height: "116px",
              borderRadius: "20px",
              border: "1px dashed #d9d9d9",
              cursor: "pointer",
            }}
          >
            <input
              type="file"
              onChange={handleInputChange}
              className="input-file"
              id="nimadir"
            />
          </label>
          <Container.Flex>
            <Switch
              onClick={(v) => setState({ ...state, isActive: v })}
              checked={state?.isActive ? 1 : 0}
            />{" "}
            Active
          </Container.Flex>
        </div>
      </Container.Wrapper>
    </Container>
  );
}

export default AddPartner;
