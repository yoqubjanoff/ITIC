import styled from "styled-components";
import uploadIcon from "../../../../assets/icons/uploadCloud.svg";


export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

Wrapper.Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
`;

Wrapper.Title = styled.h3`
     color: #051313;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
`;

Wrapper.Nav = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: end;
`;


Wrapper.InputTable = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 24px;
`;

Wrapper.Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

Wrapper.WrapTable = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;
