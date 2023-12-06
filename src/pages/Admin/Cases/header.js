import { useCaseContext } from "../../../context/CaseContext";
import { Wrapper } from "./styles";
import request from "../../../services";
import Toast from "../../../components/Reusable/Toast";
import {
  PenIcon,
  TrasIcon,
} from "../../../components/Reusable/GenericIcons/genericIcons";
import Swal from "sweetalert2";
import Switch from "../../../components/Reusable/Switch/index";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ActionRenderer = ({ data }) => {
  
  const navigate = useNavigate()
  const [,dispatch] = useCaseContext();
  const getPartners = async () => {
    try {
      const res = await request.get(`admin/case/get/all/info`);
      dispatch({
        type: "setCase",
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  const deleteF = async () => {
    try {
      const res = await request.delete(`admin/case/${data?.id}`);
      getPartners();
      Toast({
        type: "success",
        message: "Deleted !",
      });
    } catch (error) {
      Swal.fire(error?.response?.data?.resultMsg);
    }
  };

  const deleteFunc = async () => {
    Swal.fire({
      title: "Do you want to delete this direction ?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteF();
      }
    });
  };

  const editFunc = () => {
    dispatch({
      type: "setSelectedCase",
      payload: data,
    });
    navigate(`/admin/case/edite/:${data?.id}`)
  };

  useEffect(()=>{
    getPartners()
  },[])
  return (
    <Wrapper.Flex>
      <Wrapper.Box onClick={deleteFunc}>
        <TrasIcon />
      </Wrapper.Box>
      <Wrapper.Box onClick={editFunc}>
        <PenIcon />
      </Wrapper.Box>
    </Wrapper.Flex>
  );
};
const RendererStatus = ({ data }) => {
  
  const statusChange = async (v) => {
    try {
      const res = await request.put("admin/case", {
        data: {
          ...data,
          isActive: v,
        },
        transactionTime: "2023-08-14T15:43:01.8152087",
      });
      Toast({
        type: "success",
        message: "Changed",
      });
    } catch (error) {
      Swal.fire(error?.response?.data?.resultMsg);
    }
  };

  return (
    <Wrapper.Flex>
      <Switch
        onClick={(e) => statusChange(e)}
        checked={data?.isActive ? 1 : 0}
      />{" "}
      Active
    </Wrapper.Flex>
  );
};
const RendererPhoto = ({ data }) => {
  
  return (
    <Wrapper.Flex>
      <img
        className="blogImgRen"
        src={data?.casePhotoUrl}
        alt="Partner image"
      />
    </Wrapper.Flex>
  );
};

const RendererContext = ({ data }) => {
	return (
		<Wrapper.FaqtitleBox>
			<h2 className="faqtitle">{data?.projectName}</h2>
		</Wrapper.FaqtitleBox>
	);
};

const RendererLink = ({ data }) => {
	return (
		<Wrapper.FaqtitleBox>
			<a href={data?.link} target="blank" className="casetitle-link">{data?.link.slice(0,20)}...</a>
		</Wrapper.FaqtitleBox>
	);
};

const RendererType = ({ data }) => {
	return (
		<Wrapper.FaqtitleBox>
			<h3 className="faqtitle">{data?.client}</h3>
		</Wrapper.FaqtitleBox>
	);
};

export const column = [
  {
    headerName: "Cover",
    cellRenderer: RendererPhoto,
    flex: 0.5,
  },

  {
    headerName: "Project name",
	cellRenderer: RendererContext,
    flex: 1.5,
  },
  {
    headerName: "Project type",
	cellRenderer:RendererType,
    flex: 1.5,
  },
  {
    headerName: "Link",
	cellRenderer: RendererLink,
    flex: 1.2,
  },
  {
    headerName: "Status",
    cellRenderer: RendererStatus,
    flex: 1.2,
  },
  {
    headerName: "Action",
    cellRenderer: ActionRenderer,
    flex: 0.5,
  },
];
