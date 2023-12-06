// import Button from "../ButtonComb/Button";
import Cancel from "../CancelButton/Cancel";
import Button from "../Reusable/ButtonComb/Button";
import { Container } from "./styles";
import sureDelete from '../../assets/sureDelete.svg';

function DeleteModal() {
  return (
    <Container>
      <Container.Wrapper>
        <Container.Title>Are you sure to delete?</Container.Title>
        <Container.Button>
          <Cancel />
          <Button
            title="Delete"
            btnwidth="122px"
            btnheight="42px"
            fontSize="14px"
            aWidth="42px"
            iconSize="24px"
            aHeight="42px"
            btnGap = "4px"
          />
        </Container.Button>
      </Container.Wrapper>
      <img src={sureDelete} alt="sure delete"/>
    </Container>
  );
}

export default DeleteModal;
