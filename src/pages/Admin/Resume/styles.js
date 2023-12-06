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
  align-items: center;
  width: 100%;
  height: 50px;
  gap: 8px;
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
Wrapper.FaqtitleBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 30px 0 19px 0;

  .faqtitle {
    font-family: SF Pro "Display";
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
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
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    word-wrap: break-word;
  }
`;
Wrapper.BoxIcon = styled.div`
  display: flex;
  width: 33px;
  height: 33px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-image: ${({ bgImage }) => bgImage || "none"};
  cursor: pointer;
  border: 1px solid
    ${({ type }) =>
      type === "comment" ? "#EEE" : type === "close" ? "#FF5151" : "#37A67E"};
  background-repeat: no-repeat;
  background-position: center;
`;

Wrapper.Comment = styled.div`
  position: absolute;
  display: ${({ hover }) => (hover ? "flex" : "none")};
  width: 356px;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e1e1e1;
  background: #fff;
  z-index: 1;
  line-height: 20px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  left: 973px;
  top: 37px;
  color: #000;
  transition: 0.5s ease;
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
Wrapper.Box = styled.div`
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
Wrapper.Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .faqtitle {
    font-family: SF Pro "Display";
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
  }
`;
