import * as yup from "yup";

export const validationLogin = yup.object().shape({
  name: yup.string().min(3).max(30).required(),
  password: yup
    .string()
    .min(6)
    .max(32)
    .matches(/[A-Z]+/, "must be one capital character")
    .required(),
});

export const validationUser = yup.object().shape({
  name: yup.string().required(),
  phoneNumber: yup.string().min(10).max(13).required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
});
