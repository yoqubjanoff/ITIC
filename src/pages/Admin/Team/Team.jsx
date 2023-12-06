import { Wrapper } from "./styles";
import { column } from "./header";
import Table from "../../../components/Reusable/CustomTable";
import AdminSearch from "../../../components/AminSearch";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Reusable/ButtonComb/Button";
import { useTeamContext } from "../../../context/TeamContext";
import request from "../../../services";
import { useEffect, useState } from "react";
import loadingIcon from "../../../assets/icons/loading.svg";
import Pagination from "../../../components/Reusable/Pagination";
import useSearch from "../../../services/Search";
import { useLocation } from "react-router-dom";



const Team = () => {
  const navigate = useNavigate();
  const [{ teamdata, searchData }, dispatch] = useTeamContext();
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const query = useSearch();
  const { search } = useLocation();

  const getEmployee = async () => {
    try {
      const res = await request.get(`admin/employee${search || ''}`);
      setPagination(res?.data?.pagination);

      dispatch({
        type: "setTeam",
        payload: res?.data?.data,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(() => {
    getEmployee();
  }, [search]);
  const searchHandle = async (e) => {
    const searchValue = e.target.value;
    try {
      const res = await request.get(
        `admin/employee/search?name=${searchValue}`
      );
      dispatch({
        type: "setTeam",
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Team</Wrapper.Header>
        <Wrapper.Nav>
          <AdminSearch
            onChange={(e) => searchHandle(e)}
            placeholder={"Search by title"}
          />
          <Button
            btnheight="42px"
            btnwidth="107px"
            title="Add Member"
            fontSize="14px"
            aHeight="42px"
            aWidth="42px"
            iconSize="24px"
            onClick={() => navigate("/admin/team/add")}
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
            <Table
              column={column}
              rowData={teamdata}
            />
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

export default Team;
