import Swal from "sweetalert2";
import {
  PenIcon,
  TrasIcon,
} from "../../../components/Reusable/GenericIcons/genericIcons";
import Toast from "../../../components/Reusable/Toast";
import { usePartnersContext } from "../../../context/useContext";
import request from "../../../services";
import { Wrapper } from "./styles";
import Switch from "../../../components/Reusable/Switch";
import AddPartner from "./AddPartner";
import { useEffect, useState } from "react";

const ActionRenderer = ({ data }) => {
  const [{ selected }, dispatch] = usePartnersContext();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [state, setState] = useState({
    partnerPhotoUrl: selected?.partnerPhotoUrl || null,
    attachmentId: selected?.attachmentId || "",
    isActive: selected?.isActive || false,
  });

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

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const deleteF = async () => {
    try {
      const res = await request.delete(`admin/partner/${data?.id}`);
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
      type: "setSelectedPartners",
      payload: data,
    });
    setIsModalVisible(true);
    setState({
      partnerPhotoUrl: data?.partnerPhotoUrl || null,
      attachmentId: data?.attachmentId || "",
      isActive: data?.isActive || false,
    });
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
	  getPartners()
  };

  return (
    <Wrapper.Flex>
      <Wrapper.Box onClick={deleteFunc}>
        <TrasIcon />
      </Wrapper.Box>
      <Wrapper.Box onClick={editFunc}>
        <PenIcon />
      </Wrapper.Box>
      {isModalVisible && (
        <AddPartner
          isVisible={isModalVisible}
          onClose={handleCloseModal}
          initialValues={state}
        />
      )}
    </Wrapper.Flex>
  );
};

const RendererStatus = ({ data }) => {
  const statusChange = async (v) => {
    try {
      const res = await request.put("admin/partner", {
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

const RendererDate = ({ data }) => {
  const slicedClock = data.createdAt.slice(0, 10);
  return <Wrapper.Flex>{slicedClock}</Wrapper.Flex>;
};

const RendererPhoto = ({ data }) => {
  return (
    <Wrapper.Flex>
      <img
        className="blogImgRen"
        src={data?.partnerPhotoUrl}
        alt="Partner image"
      />
    </Wrapper.Flex>
  );
};

export const column = [
  {
    headerName: "Logo",
    cellRenderer: RendererPhoto,
    flex: 3,
  },

  {
    headerName: "Added date",
    cellRenderer: RendererDate,
    flex: 1.5,
  },

  {
    headerName: "Status",
    cellRenderer: RendererStatus,
    flex: 0.7,
  },
  {
    headerName: "Action",
    cellRenderer: ActionRenderer,
    flex: 0.7,
  },
];
