import CallRequest from "../../pages/Admin/CallRequest/CallRequest";
import Cases from "../../pages/Admin/Cases";
import AdminHome from "../../pages/Admin/Home";
import Partners from "../../pages/Admin/Partners/Partners";
import Resume from "../../pages/Admin/Resume/Resume";
import Team from "../../pages/Admin/Team/Team";
import Testimonials from "../../pages/Admin/Testimonials/Testimonials";
import Vacancies from "../../pages/Admin/Vacancies/Vacancies";
import AddCase from "../../pages/Admin/Cases/AddCases";
import AddTeam from "../../pages/Admin/Team/AddTeam";
import AddVacancies from "../../pages/Admin/Vacancies/AddVacancies";
import AddTestimonials from "../../pages/Admin/Testimonials/AddTestimonials";

import {
  HomeIcon,
  CaseIcon,
  PartnersIcon,
  TeamIcon,
  VacancyIcon,
  ResumeIcon,
  CallIcon,
  TestimonialICon,
} from "../Reusable/GenericIcons/genericIcons";

export const Data = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon />,
    path: "/admin",
    hidden: false,
    component: <AdminHome />,
  },
  {
    id: 2,
    title: "Case studies",
    icon: <CaseIcon />,
    path: "/admin/case",
    hidden: false,
    component: <Cases />,
  },
  {
    id: 3,
    title: "Resume requests",
    icon: <ResumeIcon />,
    path: "/admin/resume",
    hidden: false,
    component: <Resume />,
  },
  {
    id: 4,
    title: "Call requests",
    icon: <CallIcon />,
    path: "/admin/req",
    hidden: false,
    component: <CallRequest />,
  },
  {
    id: 5,
    title: "Vacancies",
    icon: <VacancyIcon />,
    path: "/admin/vacancies",
    hidden: false,
    component: <Vacancies />,
  },
  {
    id: 11,
    path: "/admin/vacancies/add",
    hidden: true,
    component: <AddVacancies />,
  },
  {
    id: 75,
    path: "/admin/vacancies/edite/:id",
    hidden: true,
    component: <AddVacancies />,
  },
  {
    id: 6,
    title: "Team",
    icon: <TeamIcon />,
    path: "/admin/team",
    hidden: false,
    component: <Team />,
  },
  {
    id: 10,
    path: "/admin/team/add",
    hidden: true,
    component: <AddTeam />,
  },
  {
    id: 19,
    path: "/admin/team/edit/:id",
    hidden: true,
    component: <AddTeam />,
  },
  {
    id: 7,
    title: "Partners",
    icon: <PartnersIcon />,
    path: "/admin/partners",
    hidden: false,
    component: <Partners />,
  },
  {
    id: 8,
    title: "Testomonials",
    icon: <TestimonialICon />,
    path: "/admin/testimonials",
    hidden: false,
    component: <Testimonials />,
  },
  {
    id: 18,
    path: "/admin/testimonials/add",
    hidden: true,
    component: <AddTestimonials />,
  },{
    id: 20,
    path: "/admin/testimonials/edite/:id",
    hidden: true,
    component: <AddTestimonials />,
  },
  {
    id: 9,
    path: "/admin/case/add",
    hidden: true,
    component: <AddCase />,
  },
  {
    id: 71,
    path: "/admin/case/edite/:id",
    hidden: true,
    component: <AddCase />,
  }
];
