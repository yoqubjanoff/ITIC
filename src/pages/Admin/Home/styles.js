import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

Wrapper.Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 20px;
`;

Wrapper.Header = styled.h3`
    color: #051313;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
`;

Wrapper.Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

Wrapper.Stats = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
`;