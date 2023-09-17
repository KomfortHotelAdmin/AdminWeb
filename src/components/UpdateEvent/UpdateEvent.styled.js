import styled from "styled-components";
import { Form } from "formik";

export const EventFormBody = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px 0;

  box-shadow: inset 0px 0px 186px -85px rgba(0, 0, 0, 0.75);
  margin-top: 10px;
`;
export const EventFormInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: 100%;
`;

export const EventFormList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const EventFormItem = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
  & > textarea {
    font-size: 25px;
    font-weight: 300;
    line-height: 1.15;

    width: 90%;
    min-height: 100px;
  }
`;

export const EventFormLabel = styled.label`
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.56px;

  color: #111111;
`;

export const EventFormBtnWrap = styled.div`
  color: rgba(136, 136, 136, 1);
  font-size: 18px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
