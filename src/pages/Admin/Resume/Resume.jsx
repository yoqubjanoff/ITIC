import { Wrapper } from "./styles";
import { column } from "./header";
import Table from "../../../components/Reusable/CustomTable";
import AdminSearch from "../../../components/AminSearch";
import RegularButton from "../../../components/Reusable/RegularButton";
import request from "../../../services";
import { useResumeContext } from "../../../context/ResumeContext";
import { useEffect, useState } from "react";
import loadingIcon from "../../../assets/icons/loading.svg";
import Pagination from "../../../components/Reusable/Pagination";
import useSearch from "../../../services/Search";
import { useLocation } from "react-router-dom";

const Resume = () => {
  const [{ resumedata, searchData }, dispatch] = useResumeContext();
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [activeBtn, setActiveBtn] = useState(true)
  const query = useSearch();
  const { search } = useLocation();

  const getResume = async (status) => {
    try {
      const res = await request.get(`admin/resume/get/apply/${status}${search || ''}`);
      setPagination(res?.data?.pagination);
      dispatch({
        type: "setResume",
        payload: res?.data?.data,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    try {
      const res = await request.get(`admin/resume/search?fullName=${e.target.value}`);
      dispatch({
        type: "setResume",
        payload: res?.data?.data,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getResume('NON_APPLY');
  }, [search]);

  const handleRequestClick = () => {
    setActiveBtn(true);
    getResume('NON_APPLY');
  };

  const handleAppliesClick = () => {
    setActiveBtn(false);
    getResume('APPLY');
  }

  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Resumes</Wrapper.Header>
        <Wrapper.Nav>
          <AdminSearch placeholder={"Search"} onChange={handleSearch} />
          <RegularButton
            title="Vacancy request"
            btnwidth={"141px"}
            btnheight={"42px"}
            onClick={handleRequestClick}
            bgcolor={activeBtn ? '#6BE2DC' : '#f5f5f5'}
          />
          <RegularButton
            title="Vacancy applies"
            btnwidth={"141px"}
            btnheight={"42px"}
            onClick={handleAppliesClick}
            bgcolor={!activeBtn ? '#6BE2DC' : '#f5f5f5'}
          />
        </Wrapper.Nav>
        <Wrapper.WrapTable>
          {loading ? (
            <Wrapper.Loading>
              <Wrapper.Box>
                <img src={loadingIcon} alt="Loading" />
              </Wrapper.Box>
            </Wrapper.Loading>
          ) : (
            <Table column={column} rowData={resumedata} />
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

export default Resume;
