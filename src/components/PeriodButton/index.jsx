import {Wrapper} from './styles'

function PeriodButton(props) {
  return (
    <Wrapper active={props.active} onClick={props.onClick}>
        <Wrapper.Title active={props.active}>{props.title}</Wrapper.Title>
    </Wrapper>
  )
}

export default PeriodButton;