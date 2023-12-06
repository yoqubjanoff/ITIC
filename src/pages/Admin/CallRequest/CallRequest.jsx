import { Wrapper } from "./styles";
import { column } from "./header";
import Table from "../../../components/Reusable/CustomTable";
import AdminSearch from "../../../components/AminSearch";
import request from "../../../services";
import { useEffect, useState } from "react";
import loadingIcon from "../../../assets/icons/loading.svg";
import useSearch from "../../../services/Search";
import { useLocation } from "react-router-dom";
import Pagination from "../../../components/Reusable/Pagination";



const CallReq = () => {
  const [callData, setCallData] = useState([]);
  const [pagination, setPagination] = useState({})  
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();
  const query = useSearch()

  const getCallReq = async () => {
    try {
      const res = await request.get(`admin/call-request${search || ""}`);
      setPagination(res?.data?.pagination)
      setCallData(res?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
    }
  };
  
  const searchHandle = async (e) => {
    const searchValue = e.target.value;
    try {
      const res = await request.get(
        `admin/call-request/search?fullName=${searchValue}`
        );
        setCallData(res?.data?.data);

      } catch (error) {
        console.error("Error", error);
      }
    };
    useEffect(() => {
      getCallReq();
    }, [search]);

    return (
      <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Call Requests</Wrapper.Header>
        <Wrapper.Nav>
          <AdminSearch
            onChange={(e) => searchHandle(e)}
            placeholder={"Search by title"}
          />
        </Wrapper.Nav>
        <Wrapper.WrapTable>
          {loading ? (
            <Wrapper.Loading>
              <Wrapper.Box>
                <img src={loadingIcon} />
              </Wrapper.Box>
            </Wrapper.Loading>
          ) : (
            <Table column={column} rowData={callData} />
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

export default CallReq;
