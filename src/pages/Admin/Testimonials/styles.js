import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

Wrapper.Wrap = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 24px;
`;
Wrapper.Header = styled.p`
  color: #000000;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
`;

Wrapper.Nav = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  width: 100%;
  height: 50px;
`;
Wrapper.Box = styled.div`
  display: flex;
  width: 33px;
  height: 33px;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 100px;
  border: 1px solid #eee;
  cursor: pointer;
`;

Wrapper.WrapTable = styled.div`
	width: 100%;
	height: 67vh;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		background: #888;
		height: 40px;
	}
`;
Wrapper.Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .blogImgRen {
    width: 69px;
    height: 44px;
    border-radius: 6px;
    border: 1px solid #eee;
    object-fit: cover;
  }

  .faqtitle {
    color: #051313;
    font-family: SF Pro "Display";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
Wrapper.FaqtitleBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 30px 0 19px 0;

  .faqtitle {
    color: #051313;
    font-family: SF Pro "Display";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .faqdesc {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    word-wrap: break-word;
    width: 1100px;
  }
  .casetitle-link {
    color: #009299;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    word-wrap: break-word;
  }
`;
Wrapper.Name = styled.div`
  width: 250px;
`;
Wrapper.Loading = styled.div`
  height: 72vh;
  width: 100%;
  transition: background-color 300ms ease-in-out;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;
Wrapper.LoadingBox = styled.div`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: rotate 1s linear infinite;
`;
