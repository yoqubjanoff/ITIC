import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({active}) => (active ? "#00a6ad" : "#f5f5f5")};
    border-radius: 100px;
    width: 101px;
    height: 42px;
    cursor: pointer;
`;

Wrapper.Title = styled.p`
    color: ${({active}) => (active ? "#fff" : "#051313")};
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
`;