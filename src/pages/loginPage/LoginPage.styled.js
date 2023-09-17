import styled from "styled-components";
import { Form, Field } from "formik";

export const FormikWrap = styled.div`
  position: relative;
`;

export const CloseFormButton = styled.button`
  width: 30px;
  height: 30px;

  display: grid;
  place-content: center;

  position: absolute;
  top: 5px;
  right: 5px;

  @media (min-width: 768px) {
    top: 25px;
    right: 25px;
  }

  border-radius: 50%;
  border: 2px solid #174f7d;
  background-color: inherit;

  * {
    stroke: #174f7d;
  }
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 100vw;
  // height: 80vh;
  background-color: #fff;

  box-shadow: 0px 0px 83px 17px rgba(0, 0, 0, 0.71);
  border-radius: 25px;

  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1280px) {
    overflow-y: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (min-width: 450px) {
    width: 80vw;
  }

  @media (min-width: 768px) {
    width: 600px;
    // height: 615px;
    border-radius: 50px;
  }
`;

export const RegisterHeader = styled.h1`
  margin-top: 60px;
  font-size: 24px;
  font-family: Manrope, sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
  margin-top: 40px;

  @media (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const InputWrapper = styled.div`
  max-width: 100%;

  width: calc(100% - 130px);

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 460px;
    padding-bottom: 15px;
  }
  & > select {
    margin-bottom: 10px;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  padding-left: 12px;
  padding-right: 25px;
  align-items: center;
  background-color: #fff;
  border: 1px solid #54adff;
  border-radius: 25px;
  height: 45px;

  &.default {
    border-color: #174f7d;
  }
  &.success {
    border-color: #00c3ad;
  }
  &.error {
    border-color: #f43f5e;
  }

  @media (min-width: 768px) {
    border-radius: 25px;
  }
`;

export const Input = styled(Field)`
  width: 100%;

  font-size: 16px;
  font-family: "BebasNeueBold";
  color: #888888;

  background-color: #fff;

  outline: none;
  border: none;
`;

export const Btn = styled.button`
  width: 256px;
  height: 50px;
  padding: 16px 32px;
  z-index: 10;
  margin-bottom: 16px;

  font-weight: 500;
  font-size: 20px;
  font-family: sans-serif;
  color: #fff;
  background-color: #174f7d;

  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 25px;

  transition: all 250ms ease-in-out;

  cursor: pointer;

  @media (min-width: 768px) {
    width: 460px;
    border-radius: 25px;
    font-size: 16px;
  }
`;

export const PassWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 32px;
  &:nth-child(4) {
    cursor: pointer;
  }

  &:nth-child(5) {
    cursor: pointer;
  }
  & > p {
    color: red;
    margin-left: 20px;
  }
`;
