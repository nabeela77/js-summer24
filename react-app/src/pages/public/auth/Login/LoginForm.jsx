import React, { useRef, useEffect, useState } from "react";
// useRef is used to access DOM elements
//  useEffect is used for side effects like fetching data or directly interacting with the DOM(component mounting and unmounting)
//  and useState is used to manage component state.
import { useLocation, useNavigate } from "react-router-dom";
//useLocation provides the current location object, and useNavigate is used for programmatic navigation (changing the route).
import Button from "../../../../components/Button";
import useAuth from "../../../../hooks/useAuth";

const EMAIL_REGEX =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const LoginForm = () => {
  const emailRef = useRef(); //A reference to the email input field, allowing direct access to it
  const navigate = useNavigate(); // navigating routes
  const location = useLocation(); //Contains information about the current location
  const { login, loginErr, setLoginErr, isLoading, setIsLoading } = useAuth();
  const from = location.state?.from?.pathname || "/dashboard"; //where to navigate after a successful login

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
    e.preventDefault(); // prevents the default form submission
    setLoginErr(null); // Clears any previous login errors
    setIsLoading(true); // Sets loading state to true

    // perform final validation
    const t1 = EMAIL_REGEX.test(email) && email.length <= 50; //checking the email regex validity
    const t2 = pwd.length >= 4 && pwd.length <= 16; // checking password length validity

    if (!t1 || !t2) {
      // if the t1 and t2 is invalid then error is popped up
      setErrMsg("Invalid Inputs");
      setIsLoading(false); // it is false as we did not logging
      return; //end the function
    }
    console.log("checking");
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
