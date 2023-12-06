import styled from "styled-components";

export const Container = styled.div`
  .tagsInput {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-height: 60px;
    width: 634px;
    padding: 15px 15px;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    gap: 6px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
  }

  .tag {
    align-items: center;
    background-color: #051313;
    border-radius: 1000px;
    display: inline-flex;
    gap: 15px;
    height: 42px;
    overflow: hidden;
    padding: 13px;

    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1.5px;
    width: fit-content;
  }

  input {
    border: none;
    height: 46px;
    font-size: 14px;
    outline: transparent;

  }

  @media screen and (max-width: 721px) {
    .tagsInput {
      width: 634px;
    }
  }
`;
