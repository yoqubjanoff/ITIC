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
    .imageInputWrap{
        width: 311px;
        height: 188px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px #d9d9d9 dashed;
        border-radius: 20px;
    }
    .imageInput{
        display: none;
    }
	& > .fileName {
		margin-left: 1%;
		font-size: 25px;
	}
    
`;

Wrapper.Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    .top{
        display: flex;
        align-items: center;
        gap: 24px;
    }
    .top1{
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 226px;
    }
`;
 export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;