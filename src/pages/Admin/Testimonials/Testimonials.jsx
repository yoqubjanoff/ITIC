import { Wrapper } from "./styles";
import { column } from "./header";
import Table from "../../../components/Reusable/CustomTable";
import Button from "../../../components/Reusable/ButtonComb/Button";
import { useNavigate } from "react-router-dom";
import { useTestomoniralsContext } from "../../../context/TestomoniralsContex";
import request from "../../../services";
import { useEffect, useState } from "react";
import loadingIcon from "../../../assets/icons/loading.svg";
import Pagination from "../../../components/Reusable/Pagination";
import useSearch from "../../../services/Search";
import { useLocation } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const query = useSearch();
  const [{ testomoniralsdata }, dispatch] = useTestomoniralsContext();
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);

  const getTestomonial = async () => {
    try {
      const res = await request.get(`admin/testomonial${search || ''}`);
      setPagination(res?.data?.pagination)
      dispatch({
        type: "setTestomonirals",
        payload: res?.data?.data,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(() => {
    getTestomonial();
  }, [search]);

  
  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Testimonials</Wrapper.Header>
        <Wrapper.Nav>
          <Button
            btnheight="42px"
            btnwidth="153px"
            title="Add Testimonial"
            fontSize="14px"
            aHeight="42px"
            aWidth="42px"
            iconSize="24px"
            onClick={() => navigate("/admin/testimonials/add")}
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
            <Table column={column} rowData={testomoniralsdata} />
          )}
        </Wrapper.WrapTable>
         <Pagination
          current={Number(query.get("page")) || 0}
          SizeAll={pagination?.totalPages || 1}
        />
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default Testimonials;
