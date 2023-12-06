import { Wrapper, Wrap } from "./styles";

function Toggle({ active, onClick }) {
  return (
    <Wrapper>
      <Wrapper.Header>Employment type</Wrapper.Header>
      <Wrapper.Wrap>
        <Wrap
          active={active === "ONLINE"} 
          onClick={() => onClick("ONLINE")} 
        >
          <Wrap.Title active={active === "ONLINE"}>Online</Wrap.Title>
        </Wrap>
        <Wrap
          active={active === "OFFLINE"} 
          onClick={() => onClick("OFFLINE")} 
        >
          <Wrap.Title active={active === "OFFLINE"}>Offline</Wrap.Title>
        </Wrap>
      </Wrapper.Wrap>
    </Wrapper>
  );
}


export default Toggle;
