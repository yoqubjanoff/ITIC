import { Wrapper } from "./styles";
import Table from "../../../components/Reusable/CustomTable";
import Button from "../../../components/Reusable/ButtonComb/Button";
import { useEffect, useState } from "react";
import AddPartner from "./AddPartner/index";
import { column } from "./header";
import request from "../../../services";
import { usePartnersContext } from "../../../context/PartnersContext";
import loadingIcon from "../../../assets/icons/loading.svg";
import Pagination from "../../../components/Reusable/Pagination";
import useSearch from "../../../services/Search";
import { useLocation } from "react-router-dom";

const Partners = () => {
  const [{ partnersdata }, dispatch] = usePartnersContext();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [pagination, setPagination] = useState({});
  const query = useSearch();
  const { search } = useLocation();

  const getPartners = async () => {
    try {
      const res = await request.get(`admin/partner${search || ''}`);
      setPagination(res?.data?.pagination);
      dispatch({
        type: "setPartner",
        payload: res?.data?.data,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPartners();
  }, [search]);

  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Partners</Wrapper.Header>
        <Wrapper.Nav>
          <Button
            onClick={() => setShowModal(true)}
            btnheight="42px"
            btnwidth="107px"
            title="Add Member"
            fontSize="14px"
            aHeight="42px"
            aWidth="42px"
            iconSize="24px"
          />
        </Wrapper.Nav>
        <Wrapper.WrapTable>
          {loading ? (
            <Wrapper.Loading>
              <Wrapper.LoadingBox>
                <img src={loadingIcon} />
              </Wrapper.LoadingBox>
            </Wrapper.Loading>
          ) : (
            <Table column={column} rowData={partnersdata} />
          )}
        </Wrapper.WrapTable>
        <Pagination
          current={Number(query.get("page")) || 0}
          SizeAll={pagination?.totalPages || 1}
        />
      </Wrapper.Wrap>
      <AddPartner isVisible={showModal} onClose={() => setShowModal(false)} />
    </Wrapper>
  );
};

export default Partners;
