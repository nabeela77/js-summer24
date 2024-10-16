import React from "react";
import PageContainer from "../../../../components/Layout/PageContainer";
import LoginForm from "./LoginForm";
import LoginFormB from "./LoginFormB";

const Login = () => {
  return (
    <PageContainer pageTitle={"Login"}>
      <LoginForm />
    </PageContainer>
  );
};

export default Login;
