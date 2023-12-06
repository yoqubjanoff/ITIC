import styled from "styled-components";
import { ReactComponent as PlusCircle } from "../../../assets/icons/plus-circle.svg";
import { ReactComponent as Team } from "../../../assets/icons/users.svg";
import { ReactComponent as Partners } from "../../../assets/icons/building.svg";
import { ReactComponent as Vacancy } from "../../../assets/icons/bag.svg";
import { ReactComponent as Resume } from "../../../assets/icons/u_user.svg";
import { ReactComponent as Call } from "../../../assets/icons/forwaded-call.svg";
import { ReactComponent as Testimonials } from "../../../assets/icons/menu.svg";
import { ReactComponent as ErorIcon } from "../../../assets/icons/error.svg";
import { ReactComponent as Success } from "../../../assets/icons/Success.svg";
import { ReactComponent as WarnIcons } from "../../../assets/icons/warn.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";
import { ReactComponent as Edit } from "../../../assets/icons/edit.svg";
import { ReactComponent as Home } from "../../../assets/icons/home.svg";
import { ReactComponent as ArrowLeft } from "../../../assets/icons/arrowLeft.svg";

const HomeIcon = styled(Home)`
  path {
    fill: ${({ color }) => color && color};
  }
`;
const ArrowLeftIcon = styled(ArrowLeft)`
	width: ${({ width }) => (width ? width : '25px')};
	height: ${({ height }) => (height ? height : '25px')};
	cursor: pointer;
`;

const CaseIcon = styled(PlusCircle)`
  path {
    fill: ${({ color }) => color && color};
  }
`;

const PartnersIcon = styled(Partners)`
  path {
    fill: ${({ color }) => color && color};
  }
  path {
    fill: ${({ color }) => color && color};
  }
`;

const TeamIcon = styled(Team)`
  path {
    fill: ${({ color }) => color && color};
  }
`;

const VacancyIcon = styled(Vacancy)`
  path {
    fill: ${({ color }) => color && color};
  }
`;

const ResumeIcon = styled(Resume)`
  path {
    fill: ${({ color }) => color && color};
  }
`;

const CallIcon = styled(Call)`
  path {
    fill: ${({ color }) => color && color};
  }
`;

const TestimonialICon = styled(Testimonials)`
  path {
    fill: ${({ color }) => color && color};
  }
`;
const SuccessIcon = styled(Success)`
  width: 30px;
  height: 30px;
`;
const WarnIcon = styled(WarnIcons)`
  width: 30px;
  height: 30px;
`;

const ErrorsIcon = styled(ErorIcon)`
  width: 30px;
  height: 30px;
`;
const TrasIcon = styled(TrashIcon)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const PenIcon = styled(Edit)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export {
  HomeIcon,
  TestimonialICon,
  CallIcon,
  ResumeIcon,
  VacancyIcon,
  TeamIcon,
  PartnersIcon,
  CaseIcon,
  ErrorsIcon,
  SuccessIcon,
  WarnIcon,
  TrasIcon,
  PenIcon,
  ArrowLeftIcon
};
