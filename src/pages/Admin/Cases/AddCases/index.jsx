import { useRef, useState } from "react";
import { Flex, Wrapper } from "./styles";
import uploadIcon from "../../../../assets/icons/uploadCloud.svg";
import AdminInput from "../../../../components/Reusable/AdminInput";
import Button from "../../../../components/Reusable/ButtonComb/Button";
import TagInput from "../../../../components/TagsInput";
import RegularButton from "../../../../components/Reusable/RegularButton";
import { useNavigate } from "react-router-dom";
import { useCaseContext } from "../../../../context/CaseContext";
import request from "../../../../services";
import Swal from "sweetalert2";
import Toast from "../../../../components/Reusable/Toast";
import Switch from "../../../../components/Reusable/Switch";

const AddCase = () => {
  const inputRef = useRef(null);
  const [{ selected }, dispatch] = useCaseContext();
  const [urlFormData, setUrlFormData] = useState(selected?.casePhotoUrl || "");
  const [idOfAttachmentId, setIdOfAttachmentId] = useState(
    selected?.attachmentId || ""
  );
  const [state, setState] = useState({
    casePhotoUrl: selected?.casePhotoUrl || null,
    attachmentId: selected?.attachmentId || "",
    projectName: selected?.projectName || "",
    link: selected?.link || "",
    tags: selected?.tagsList || [],
    client: selected?.client || "",
    isActive: selected?.isActive || false,
  });
  const handleIconClick = () => {
    inputRef.current.click();
  };

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
      const { fileUrl, id } = resData.data.data;
      Toast({
        type: "success",
        message: "Rasm yuklandi",
      });
      e.target.value = null;
      setUrlFormData(fileUrl);
      setIdOfAttachmentId(id);
    } catch (error) {
      console.error("Yuklashda xatolik yuz berdi:", error);
    }
  };

  const navigate = useNavigate();

  const saveData = async () => {
    if (!selected?.id) {
      if (
        idOfAttachmentId 
        && urlFormData 
        && state?.projectName
        && state?.link
        && state?.tags
        && state?.client
        ) {
        try {
          const res = await request.post(
            `admin/case/add`,
            {
              data: {
                projectName: state?.projectName,
                client: state?.client,
                tagsList: state?.tags,
                link: state?.link,
                casePhotoUrl: urlFormData,
                attachmentId: idOfAttachmentId,
                isActive: state?.isActive,
              },
            },
            Toast({
              type: "success",
              message: "Saved",
            })
          );
          setState({
            casePhotoUrl: "",
            attachmentId: "",
            projectName: "",
            link: "",
            tags: [],
            client: "",
            isActive: false,
          });
          navigate("/admin/case");
        } catch (error) {
          Swal.fire("Saqlashda xatolik yuz berdi:", error);
        }
      } else {
        Swal.fire("Avval barcha inputlarga malumot kiriting !");
      }
    } else {
      if (idOfAttachmentId && urlFormData) {
        try {
          const res = await request.put(`admin/case/edite`, {
            data: {
              id: selected?.id,
              projectName: state?.projectName,
              client: state?.client,
              tagsList: state?.tags,
              link: state?.link,
              casePhotoUrl: urlFormData,
              attachmentId: idOfAttachmentId,
              isActive: state?.isActive,
            },
          });
          navigate("/admin/case");
          Toast({
            type: "success",
            message: "Saved",
          });
          dispatch({
            type: "setSelectedCase",
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
        <Wrapper.Title>Add Case</Wrapper.Title>
        <Wrapper.Nav>
          <div onClick={() => navigate("/admin/case")}>
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
            onClick={saveData}
          />
        </Wrapper.Nav>
        <Wrapper.InputTable>
          <div
            className="imageInputWrap"
            style={{
              backgroundImage: urlFormData ? `url(${urlFormData})` : "none",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              WebkitBackgroundSize: "fit-content",
            }}
            onClick={handleIconClick}
          >
            {urlFormData ? null : <img src={uploadIcon} alt="upload cloud" />}
          </div>
          <input
            className="imageInput"
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <Wrapper.Flex>
            <div className="top">
              <AdminInput
                label={"Project name"}
                placeholder={"Project name"}
                value={state?.projectName}
                onChange={(e) => {
                  setState({ ...state, projectName: e.target.value });
                }}
              />

              <AdminInput
                label={"Client"}
                placeholder={"Client"}
                value={state?.client}
                onChange={(e) => {
                  setState({ ...state, client: e.target.value });
                }}
              />
            </div>
            <div className="top1">
              <AdminInput
                label={"Project link"}
                placeholder={"Project link"}
                value={state?.link}
                onChange={(e) => {
                  setState({ ...state, link: e.target.value });
                }}
              />
              <Flex>
                <Switch
                  onClick={(v) => setState({ ...state, isActive: v })}
                  checked={state?.isActive ? true : false}
                />{" "}
                Active
              </Flex>
            </div>
            <TagInput
              tags={state?.tags}
              value={selected?.tagsList}
              setTags={(newTags) => setState({ ...state, tags: newTags })}
            />
          </Wrapper.Flex>
        </Wrapper.InputTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default AddCase;
