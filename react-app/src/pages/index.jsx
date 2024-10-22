import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import AccessControl from "../components/Layout/AccessControl";

const superAdminRole = "super-admin";
const adminRole = ["admin", "super-admin"];
const requiredRoles = ["admin", "super-admin"];

const Home = () => {
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getUser() {
    setIsLoading(true);
    try {
      console.log("calling fetch");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      console.log("after response");
      const user = await response.json();
      console.log("user", user);
      setUser(user);
    } catch (error) {
      console.error("error", error);
      setErr(error);
    } finally {
      setIsLoading(false);
    }
  }

  const getUserArrow = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      console.log("after response");
      const user = await response.json();
      console.log("user", user);
      setUser(user);
    } catch (error) {
      console.error("error", error);
      setErr(error);
    }
  };

  useEffect(() => {
    console.log("start of useEffect");
    // getUser();

    //     // fetch("https://jsonplaceholder.typicode.com/users/1")
    //     // 	.then((response) => {
    //     // 		console.log("response", response);
    //     // 		if (!response.ok) {
    //     // 			throw Error(`Unable to fetch user, status code ${response.status}`);
    //     // 		}
    //     // 		return response.json();
    //     // 	})
    //     // 	.then((user) => {
    //     // 		console.log("user", user);
    //     // 		setUser(user);
    //     // 	})
    //     // 	.catch((error) => {
    //     // 		console.log("error", error);
    //     // 		setErr(error);
    //     // 	});

    console.log("end of useEffect");
  }, []);

  console.log("rendering");

  if (isLoading)
    return (
      <div>
        <strong>LOADING...</strong>
      </div>
    );

  if (err) {
    return (
      <div>
        <h1>{err?.message}</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Welcome back, {user?.name}</h1>
      <AccessControl requiredRoles={requiredRoles} role={adminRole} type="page">
        <Button color="primary"> Admin</Button>
      </AccessControl>

      <AccessControl
        requiredRoles={requiredRoles}
        role={superAdminRole}
        type="page"
      >
        <Button color="primary">Super Admin</Button>
      </AccessControl>
    </div>
  );
};

export default Home;
