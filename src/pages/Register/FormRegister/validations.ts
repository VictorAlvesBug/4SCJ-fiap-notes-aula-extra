import * as Yup from "yup";

export const registerValidation = Yup.object({
  username: Yup.string()
    .min(5, "Deve ter pelo menos 5 caracteres")
    .required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});
