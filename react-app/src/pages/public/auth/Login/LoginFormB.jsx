// import React from "react";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormError from "../../../../components/FormError";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";

const EMAIL_REGEX =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const schema = yup.object({
  email: yup
    .string()
    .max(50, "Max character is 50.")
    .email()
    .matches(EMAIL_REGEX)
    .required("Email is required."),
  password: yup.string().min(8, "Must be at least 8 characters.").required(),
});
const LoginFormB = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label id="email">Email: </label>
        <Input id="email" type="email" {..."email"} />
        {errors?.email && <FormError>{errors.email.message}</FormError>}
      </div>
      <div>
        <label id="password">Password: </label>
        <Input id="password" type="password" {...register("password")} />
        {errors?.password && <FormError>{errors.password.message}</FormError>}
      </div>
      <Button type="submit" color="primary" disabled={!watch("email")}>
        Log In
      </Button>

      <Button type="submit" color="">
        Go Back
      </Button>
    </form>
  );
};

export default LoginFormB;
