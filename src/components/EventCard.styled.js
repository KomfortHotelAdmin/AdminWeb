import { styled } from "styled-components";

export const CardWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 80vw;
  & > img {
    max-height: 600px;
    max-width: 1200px;
    border-radius: 20px;
  }
  & > p {
    font-size: 25px;
    font-weight: 400;
    line-height: 1.15;

    max-width: 1200px;
    padding: 10px;

    background-color: rgb(225 222 222 / 60%);
    border-radius: 20px;
  }
`;

export const BtnDelete = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const BtnUpdate = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
`;
