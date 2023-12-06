import Swal from "sweetalert2";
import Toast from "../../../components/Reusable/Toast";
import request from "../../../services";
import { Wrapper } from "./styles";
import Switch from "../../../components/Reusable/Switch";
import { useNavigate } from "react-router-dom";
import { useTestomoniralsContext } from "../../../context/TestomoniralsContex";
import { useEffect } from "react";
import { PenIcon, TrasIcon } from "../../../components/Reusable/GenericIcons/genericIcons";

const ActionRenderer = ({ data }) => {
  const navigate = useNavigate();
  const [, dispatch] = useTestomoniralsContext();

  const getTestomonial = async () => {
    try {
      const res = await request.get(`admin/testomonial/all`);
      dispatch({
        type:'setTestomonirals',
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  const deleteF = async () => {
    try {
      const res = await request.delete(`admin/testomonial/${data?.id}`);
      getTestomonial();
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteF();
      }
    });
  };

  const editFunc = () => {
    dispatch({
      type: "setSelectedTestomonirals",
      payload: data,
    });
    navigate(`/admin/testimonials/edite/:${data?.id}`);
  };

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


const RendererPhoto = ({ data }) => {
  return (
    <Wrapper.Flex>
      <img
        className="blogImgRen"
        src={data?.testomonialPhotoUrl}
        alt="Partner image"
      />
      <Wrapper.Name>
			<h2 className="faqtitle">{data?.name + " " + data?.surname}</h2>
		</Wrapper.Name>
    </Wrapper.Flex>
    
  );
};

const RendererContent = ({ data }) => {
  return (
    <Wrapper.FaqtitleBox>
      <h3 className="faqtitle">{data?.content?.slice(0, 5)} ....</h3>
    </Wrapper.FaqtitleBox>
  );
};

const RendererCompanyName = ({ data }) => {
	return (
		<Wrapper.FaqtitleBox>
			<h3 className="faqtitle">{data?.companyName}</h3>
		</Wrapper.FaqtitleBox>
	);
};

const RendererDate = ({ data }) => {
  const slicedClock = data?.createdAt.slice(0, 10);
  return <Wrapper.Flex>{slicedClock}</Wrapper.Flex>;
};

const RendererStatus = ({ data }) => {
  const statusChange = async (v) => {
    try {
      const res = await request.put("admin/testomonial", {
        data: {
          ...data,
          isActive: v,
        },
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



export const column = [
  {
    headerName: "Name and Surname",
    cellRenderer: RendererPhoto,
    flex: 0.5,
  },

  {
    headerName: "Company name",
    cellRenderer: RendererCompanyName,
    flex: 0.5,
  },

  {
    headerName: "Content",
    cellRenderer: RendererContent,
    flex: 0.5,
  },
  {
    headerName: "Added date",
    cellRenderer: RendererDate,
    flex: 0.5,
  },
  {
    headerName: "Status",
    cellRenderer:RendererStatus,
    flex: 0.5,
  },
  {
    headerName: "Action",
    cellRenderer: ActionRenderer,
    flex: 0.2,
  },
];