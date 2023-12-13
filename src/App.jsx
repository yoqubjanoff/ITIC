import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCases from "./pages/AllCases/AllCases";
import Pages from "./pages/index";
import AllVacancies from "./pages/AllVacancies/AllVacancies";
import Admin from "./pages/Admin";
import { Data } from "./components/AdminSidebar/SidebarData";
import AdminSign from "./pages/AdminSign";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/allCases" element={<AllCases />} />
          <Route path="/admin/sign-in" element={<AdminSign/>}/>
          <Route path="/allVacancies" element={<AllVacancies />} />
          <Route path="/" element={<Pages />} />
          <Route path="/admin" element={<Admin />}>
            {Data?.map(({ path, component }, i) => (
              <Route exact path={path} element={component} key={i} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
