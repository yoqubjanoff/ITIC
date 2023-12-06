import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 731px;
    height: 347px;
    padding: 89px 101px 94px 43px;
    gap: 101px;
`;

Container.Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
`;

Container.Title = styled.h3`
    color: #000000;
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
`;

Container.Button = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
`;