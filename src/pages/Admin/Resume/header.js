
import {useState} from 'react'
import { Wrapper } from "./styles";
import message from "../../../assets/icons/comment.svg";

const RendererrCV = ({ data }) => {
  return (
    <Wrapper.Flex>
      <a className="CVlink" href={data?.userCVUrl}>Link CV</a>
    </Wrapper.Flex>
  );
};
const RendererName = ({ data }) => {
  return (
    <Wrapper.Flex>
      <h3 className="faqtitle">{data?.fullName}</h3>
    </Wrapper.Flex>
  );
};

const RendererLinkedin = ({ data }) => {
  return (
    <Wrapper.FaqtitleBox>
      <a href={data?.linkedinLink} className="CVlink">
        Linkedin
      </a>
    </Wrapper.FaqtitleBox>
  );
};

const RendererPhoneNumber = ({ data }) => {
  return (
    <Wrapper.FaqtitleBox>
      <h3 className="casetitle-link">{data?.phoneNumber}</h3>
    </Wrapper.FaqtitleBox>
  );
};

const RendererPosition = ({ data }) => {
  return (
    <Wrapper.FaqtitleBox>
      <h4 className="faqtitle">{data?.position}</h4>
    </Wrapper.FaqtitleBox>
  );
};

const RendererEmail = ({ data }) => {
  return (
    <Wrapper.FaqtitleBox>
      <h3 className="faqtitle">{data?.email}</h3>
    </Wrapper.FaqtitleBox>
  );
};
const RendererDate = ({ data }) => {
  return <Wrapper.Flex>14.10.2023</Wrapper.Flex>;
};
const RendererComment = ({ data }) => {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper.BoxIcon 
      bgImage={`url(${message})`}
      type={"comment"}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Wrapper.Comment hover={hover ? 1 : 0}>
        {data?.comment}
      </Wrapper.Comment>
    </Wrapper.BoxIcon>
  );
};

export const column = [
  {
    headerName: "Name and Surname",
    cellRenderer: RendererName,
    flex: 0.5,
  },

  {
    headerName: "Phone Number",
    cellRenderer: RendererPhoneNumber,
    flex: 0.5,
  },

  {
    headerName: "Position",
    cellRenderer: RendererPosition,
    flex: 0.5,
  },
  {
    headerName: "Resume/CV",
    cellRenderer: RendererrCV,
    flex: 0.5,
  },
  {
    headerName: "LinkedIn profile link",
    cellRenderer: RendererLinkedin,
    flex: 0.6,
  },
  {
    headerName: "Submit date",
    cellRenderer: RendererDate,
    flex: 0.5,
  },
  {
    headerName: "Email address",
    cellRenderer: RendererEmail,
    flex: 0.5,
  },
  {
    headerName: "Comment",
    cellRenderer: RendererComment,
    flex: 0.5,
  },
];