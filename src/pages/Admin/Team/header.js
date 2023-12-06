import { useTeamContext } from "../../../context/TeamContext";
import request from "../../../services";
import { Wrapper } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import Toast from "../../../components/Reusable/Toast";
import Swal from "sweetalert2";
import { PenIcon, TrasIcon } from "../../../components/Reusable/GenericIcons/genericIcons";
import Switch from "../../../components/Reusable/Switch";
import { useEffect } from "react";


const ActionRenderer = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [{teamdata},dispatch] = useTeamContext();

  const getEmployee = async () => {
    try {
      const res = await request.get(`admin/employee/all`);
      dispatch({
        type: "setTeam",
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  const deleteF = async () => {
    try {
      const res = await request.delete(`admin/employee/${data?.id}`);
      getEmployee();
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
      type: "setSelectedTeam",
      payload: data,
    });
    navigate(`/admin/team/edit/:${data?.id}`)
  };

  useEffect(()=>{
    getEmployee()
  },[])
  return (
    <Wrapper.Flex>
      <Wrapper.Box onClick={deleteFunc}>
        <TrasIcon />
      </Wrapper.Box>
      <Wrapper.Box onClick={editFunc}>
        <PenIcon/>
      </Wrapper.Box>
    </Wrapper.Flex>
  );
};
const RendererStatus = ({ data }) => {
  const statusChange = async (v) => {
    try {
      const res = await request.put("admin/employee", {
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

const RendererName = ({ data }) => {
  return (
    <Wrapper.Flex>
       <Wrapper.Flex>
      <img
        className="blogImgRen"
        src={data?.employeePhotoUrl}
        alt="Partner image"
      />
    </Wrapper.Flex>
      <h3 className="faqtitle">{data?.firstName + " " +  data?.lastName}</h3>
    </Wrapper.Flex>
  );
};
const RendererDate = ({ data }) => {
  if (data && data.createdAt) {
    const slicedClock = data.createdAt.slice(0, 10);
    return <Wrapper.Flex>{slicedClock}</Wrapper.Flex>;
  } else {
    return <Wrapper.Flex>No Date Available</Wrapper.Flex>;
  }
};

const RendererPosition = ({ data }) => {
	return (
		<Wrapper.FaqtitleBox>
			<h3 className="casetitle-link">{data?.position}</h3>
		</Wrapper.FaqtitleBox>
	);
};

export const column = [
  {
    headerName: "Name and Surname",
    cellRenderer: RendererName,
    flex: 3,
  },

  {
    headerName: "Position",
    cellRenderer:RendererPosition,
    flex: 1.5,
  },

  {
    headerName: "Added date",
    cellRenderer:RendererDate,
    flex: 1.5,
  },
  {
    headerName: "Status",
    cellRenderer:RendererStatus,
    flex: 0.7,
  },
  {
    headerName: "Action",
    cellRenderer:ActionRenderer,
    flex: 0.7,
  },
];