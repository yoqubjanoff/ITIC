import { Wrapper } from "./styles";
import { column } from "./header";
import Table from "../../../components/Reusable/CustomTable";
import AdminSearch from "../../../components/AminSearch";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Reusable/ButtonComb/Button";
import request from "../../../services";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCaseContext } from "../../../context/CaseContext";
import loadingIcon from "../../../assets/icons/loading.svg";
import useSearch from "../../../services/Search";
import Pagination from "../../../components/Reusable/Pagination";


const Cases = () => {
  const navigate = useNavigate();
  const query = useSearch();
  const { search } = useLocation();
  const [{ casedata, searchData }, dispatch] = useCaseContext();
  const [pagination, setPagination] = useState({})
  const [loading, setLoading] = useState(true);


  const getPartners = async () => {
    try {
      const res = await request.get(`admin/case/get/all/info${search || ""}`);
      dispatch({
        type: "setCase",
        payload: res?.data?.data,
      });
      setLoading(false)
    } catch (error) {
      console.error("Error", error);
      setLoading(false)
    }
  };
useEffect(()=>{
  getPartners()
},[search])

  const searchHandle = async (e) => {
    const searchValue = e.target.value;
    try {
      const res = await request.get(
        `admin/case/search?projectName=${searchValue}`
      );
      dispatch({
        type: "setCase",
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Case Studies</Wrapper.Header>
        <Wrapper.Nav>
          <AdminSearch
            onChange={(e) => searchHandle(e)}
            placeholder={"Search by title"}
          />
          <Button
            btnheight="42px"
            btnwidth="107px"
            title="Add Case"
            fontSize="14px"
            aHeight="42px"
            aWidth="42px"
            iconSize="24px"
            onClick={() => navigate("/admin/case/add")}
          />
        </Wrapper.Nav>
        <Wrapper.WrapTable>
          {loading ? 
           <Wrapper.Loading>
           <Wrapper.LoadingBox>
             <img src={loadingIcon} />
           </Wrapper.LoadingBox>
         </Wrapper.Loading> : 
          <Table
            column={column}
            rowData={casedata}
          />}
        </Wrapper.WrapTable>
        <Pagination
          current={Number(query.get("page")) || 0}
          SizeAll={pagination?.totalPages || 1}
        />
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default Cases;
