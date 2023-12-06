  import { Container } from "./styles";
import buttonIcon from "../../assets/icons/u_angle-right.svg";
import { Link } from "react-router-dom";
import request from "../../services";
import { useEffect, useState } from "react";

function CaseComp({ imageSrc, title, paragraph, to, tag }) {
  const [loading, setLoading] = useState(true);
  const newTags = tag?.length > 0 && tag.map((v) => v);
  return (
    <Container>
      <div className="imageWrap">
        <img className="caseImage" src={imageSrc} alt="case" />
        <div className="tagWrap">
          {tag && Array.isArray(tag) ? (
            tag.map((tags, id) => (
              <span className="tag" key={id}>
                {tags}
              </span>
            ))
          ) : (
            <span className="tag">No tags available</span>
          )}
        </div>
      </div>
      <Container.Desc>
        <Container.Info>
          <Container.Parag>{paragraph}</Container.Parag>
          <Container.Title>{title}</Container.Title>
        </Container.Info>
        <Link to={to} target={"_blank"}>
          <Container.Button>
            <img src={buttonIcon} alt="button icon" />
          </Container.Button>
        </Link>
      </Container.Desc>
    </Container>
  );
}

export default CaseComp;
