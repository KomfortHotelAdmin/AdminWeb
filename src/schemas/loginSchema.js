import * as Yup from "yup";
const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email field is required")
    .matches(emailValid, "Enter a valid Email")
    .max(70, "Maximum 70 characters")
    .min(10, "Minimum 10 characters")
    .email(),
  password: Yup.string()
    .max(16, "Please enter 16 characters or less")
    .min(6, "Enter 6 or more characters")
    .required("Password field is required"),
});
