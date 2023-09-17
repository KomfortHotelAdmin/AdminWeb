import { ErrorMessage, Formik } from "formik";
import {
  FormContainer,
  InputWrapper,
  Input,
  Btn,
  PassWrapper,
  RegisterHeader,
  WrapperInput,
  FormikWrap,
} from "./LoginPage.styled";

import { loginSchema } from "../../schemas/loginSchema";
import { logIn } from "../../services/auth";
import { useUser } from "../../context/auth/context";
import { Loader } from "../../components/loader/Loader";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import {
  notifyErrorLogin,
  notifyFulfilledLogin,
} from "../../components/Toasters/toasters";

const initialValues = {
  email: "komfortadmin991@mail.com",
  password: "12345678",
};

const LoginPage = () => {
  const formData = { ...initialValues };
  const context = useUser();
  const [isLoader, setIsLoader] = useState(false);

  const toggleLoader = () => {
    setIsLoader((prev) => !prev);
  };

  const handleSubmit = async (values, { resetForm }) => {
    toggleLoader();
    try {
      const data = await logIn(values);
      if (data?.token) {
        context.logIn();
      } else {
        throw Error;
      }
      resetForm();
    } catch (error) {
      notifyErrorLogin();
    } finally {
      toggleLoader();
    }
  };

  return (
    <>
      <FormikWrap>
        <Formik
          initialValues={formData}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          {({ errors, touched, values }) => (
            <FormContainer>
              <RegisterHeader>Log-In Admin Panel</RegisterHeader>
              <InputWrapper>
                <PassWrapper>
                  <WrapperInput
                    className={
                      (values.email === "" && "default") ||
                      (touched.email && errors.email && "error") ||
                      (!errors.email && "success")
                    }
                  >
                    <Input
                      type="email"
                      name="email"
                      autoComplete="off"
                      placeholder={"Email"}
                      value={values.email}
                    />
                  </WrapperInput>
                  <ErrorMessage component="p" name="email" />
                </PassWrapper>

                <PassWrapper>
                  <WrapperInput
                    className={
                      (values.password === "" && "default") ||
                      (touched.password && errors.password && "error") ||
                      (!errors.password && "success")
                    }
                  >
                    <Input
                      type="text"
                      name="password"
                      id="password"
                      autoComplete="off"
                      placeholder="password"
                      value={values.password}
                    />
                  </WrapperInput>
                  <ErrorMessage component="p" name="password" />
                </PassWrapper>
              </InputWrapper>

              <Btn type="submit">Log-In </Btn>
            </FormContainer>
          )}
        </Formik>
      </FormikWrap>
      {isLoader && <Loader />}
      <Toaster />
    </>
  );
};

export default LoginPage;
