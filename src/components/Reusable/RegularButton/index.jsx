import {Container} from './styles';

function RegularButton(props) {
  return (
    <Container btnwidth={props.btnwidth} btnheight={props.btnheight} onClick={props.onClick} bgcolor={props.bgcolor}>
      {props.title}
    </Container>
  )
}

export default RegularButton;