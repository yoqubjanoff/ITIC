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
import { useVacanciesContext } from "../../../context/VacanciesContext";

const ActionRenderer = ({ data }) => {
  const navigate = useNavigate()
  const [,dispatch] = useVacanciesContext();
  
  const getPartners = async () => {
    try {
      const res = await request.get(`admin/vacancy/all`);
      dispatch({
        type: "setVacancies",
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  const deleteF = async () => {
    try {
      const res = await request.delete(`admin/vacancy/${data?.id}`);
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
      type: "setSelectedVacansi",
      payload: data,
    });
    navigate(`/admin/vacancies/edite/:${data?.id}`)
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
      const res = await request.put("admin/vacancy", {
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
const RendererTitle = ({ data }) => {
  return (
    <Wrapper.Flex>
      <h3 className="faqtitle">{data?.title}</h3>
    </Wrapper.Flex>
  );
};

const RendererSalary = ({ data }) => {
	return (
		<Wrapper.FaqtitleBox>
			<h2 className="faqtitle">{data?.salary} USD</h2>
		</Wrapper.FaqtitleBox>
	);
};

const RendererEmploye = ({ data }) => {
	return (
		<Wrapper.FaqtitleBox>
			<h3 className="casetitle-link">{data?.employmentType}</h3>
		</Wrapper.FaqtitleBox>
	);
};

const RendererLocation = ({ data }) => {
	return (
		<Wrapper.FaqtitleBox>
			<h3 className="faqtitle">{data?.location}</h3>
		</Wrapper.FaqtitleBox>
	);
};

const RendererLevel = ({ data }) => {
	return (
		<Wrapper.FaqtitleBox>
			<h3 className="faqtitle">{data?.positionLevel}</h3>
		</Wrapper.FaqtitleBox>
	);
};
const RendererDate = ({ data }) => {
  const slicedClock = data.createdAt.slice(0, 10);
  return <Wrapper.Flex>{slicedClock}</Wrapper.Flex>;
};
const RendererTime = ({ data }) => {
  const slicedClock = data.createdAt.slice(0, 10);
  return <Wrapper.Flex>{slicedClock}</Wrapper.Flex>;
};



export const column = [
  {
    headerName: "Vacancy title",
    cellRenderer: RendererTitle,
    flex: 0.5,
  },

  {
    headerName: "Position level",
    cellRenderer:RendererLevel,
    flex: 0.5,
  },

  {
    headerName: "Location",
    cellRenderer:RendererLocation,
    flex: 0.5,
  },
  {
    headerName: "Employment type",
    cellRenderer:RendererEmploye,
    flex: 0.5,
  },
  {
    headerName: "Salary",
    cellRenderer:RendererSalary,
    flex: 0.5,
  },
  {
    headerName: "Added date",
    cellRenderer:RendererDate,
    flex: 0.5,
  },
  {
    headerName: "Status",
    cellRenderer:RendererStatus,
    flex: 0.5,
  },
  {
    headerName: "Action",
    cellRenderer:ActionRenderer,
    flex: 0.2,
  },
];