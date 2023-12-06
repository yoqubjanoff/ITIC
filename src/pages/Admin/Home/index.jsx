import { useEffect, useState } from "react";
import PeriodButton from "../../../components/PeriodButton";
import { Wrapper } from "./styles";
import StatCard from "../../../components/StatCard/StatCard";
import request from "../../../services";

function AdminHome() {
  const [active, setActive] = useState("daily");
  
  const getPartners = async () => {
    try {
      const res = await request.get(`admin/case/get/all/info`);
    } catch (error) {
      console.error("Error", error);

    }
  };
useEffect(()=>{
  getPartners()
},[])
  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Home Page</Wrapper.Header>
        <Wrapper.Buttons>
          <PeriodButton
            title="This Day"
            active={active === "daily" ? 1 : 0}
            onClick={() => setActive("daily")}
          />
          <PeriodButton
            title="This Week"
            active={active === "weekly" ? 1 : 0}
            onClick={() => setActive("weekly")}
          />
          <PeriodButton
            title="This Month"
            active={active === "monthly" ? 1 : 0}
            onClick={() => setActive("monthly")}
          />
        </Wrapper.Buttons>

        <Wrapper.Stats>
          <StatCard />
          <StatCard />
        </Wrapper.Stats>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default AdminHome;
