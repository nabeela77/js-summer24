import React, { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import useAuth from "../../../../hooks/useAuth";

const EMAIL_REGEX =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const LoginForm = () => {
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { login, loginErr, setLoginErr, isLoading, setIsLoading } = useAuth();
  const from = location.state?.from?.pathname || "/dashboard";

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  // const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const goBack = () => navigate(-1);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email) && email.length <= 50);
    setValidPwd(pwd.length >= 4 && pwd.length <= 16);
  }, [email, pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginErr(null);
    setIsLoading(true);

    // perform final validation
    const t1 = EMAIL_REGEX.test(email) && email.length <= 50;
    const t2 = pwd.length >= 4 && pwd.length <= 16;

    if (!t1 || !t2) {
      setErrMsg("Invalid Inputs");
      setIsLoading(false);
      return;
    }

    login(from);

    // try {
    // 	const response = await fakeLogin();
    // 	setUser({ ...response.data, accessToken: generateToken() });
    // 	// refreshToken is stored in localStorage here, but should be set in an secure/http only cookie
    // 	localStorage.setItem("refreshToken", `refresh: ${Math.floor(Math.random() * 100)}`);
    // 	console.log("set user on first log in");
    // 	navigate(from, { replace: true });
    // } catch (err) {
    // 	setErrMsg("The server could not be reached. Please try again later.");
    // 	setIsLoading(false);
    // }
  };

  if (isLoading) return <div>Logging In...</div>;

  return (
    <>
      {loginErr && <h1>{loginErr.message}</h1>}
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-3 w-7/12 md:w-4/12 lg:w-3/12 mx-auto"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email: </label>
          <input
            ref={emailRef}
            className="py-1 px-3 border-2 border-black rounded-md"
            id="email"
            type="email"
            placeholder="user@domain.com"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {!validEmail && email.length > 0 && (
            <p className="text-red-500">Not a valid email</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password: </label>
          <input
            className="py-1 px-3 border-2 border-black rounded-md"
            id="password"
            type="password"
            required
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
          />
          {!validPwd && pwd.length > 0 && (
            <p className="text-red-500">Not a valid password</p>
          )}
        </div>

        <Button
          color="primary"
          type="submit"
          disabled={isLoading || !validEmail || !validPwd}
        >
          Log in
        </Button>

        <Button color="danger" onClick={goBack}>
          Go Back
        </Button>
      </form>
      {errMsg && <p className="text-red-500">{errMsg}</p>}
    </>
  );
};

export default LoginForm;
