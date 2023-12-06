import { useNavigate, useLocation } from "react-router-dom";
import { Data } from "./SidebarData";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import logOut from '../../assets/icons/log-out.svg';

function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [url, setUrl] = useState(location.pathname);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location.pathname]);
const handleLogOut = () => {
  localStorage.removeItem("tokenAdmin");
    navigate("/admin/sign-in");
}
  return (
    <Container>
      {Data?.map(
        ({ title, icon, path, hidden, disable }, i) =>
          !hidden && (
            <Container.Flex
              className="FlexBox"
              onClick={() => !disable && navigate(path)}
              active={url === path ? 1 : 0}
              key={i}
              disable={disable ? 1 : 0}
            >
              {icon} <Container.Title active={url === path ? 1 : 0}>{title}</Container.Title>
            </Container.Flex>
          )
      )}
      <button className="logOut" onClick={handleLogOut}>
      <img src={logOut} alt="log out icon"/>
            log out
      </button>
    </Container>
  );
}

export default AdminSidebar;
