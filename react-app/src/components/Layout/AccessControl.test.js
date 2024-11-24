import { render, screen } from "@testing-library/react";
import AccessControl, { checkAccess } from "./AccessControl";
import { expect, test } from "@jest/globals";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Unauthorized from "../../pages/Unauthorized";

//testing checkAccess function
describe("checkAccess function works properly", () => {
  it("should allow access if required role is not provided", () => {
    //arrange
    const hasAccess = checkAccess("user");

    //assert
    expect(hasAccess).toBe(true);
  });

  it("should allow access if role is in required roles.", () => {
    //arrange
    const role = "admin";
    const requiredRoles = ["admin", "super-admin"];
    const hasAccess = checkAccess(role, requiredRoles);
    //assert
    expect(hasAccess).toBe(true);
  });

  it("should not allow access if role is not provided, but required role is provided", () => {
    //arrange
    const role = undefined;
    const requiredRoles = ["admin", "super-admin"];
    const hasAccess = checkAccess(role, requiredRoles);
    //assert
    expect(hasAccess).toBe(false);
  });

  it("should not allow access if role is not in requiredRoles ", () => {
    //arrange
    const role = "user";
    const requiredRoles = ["admin", "super-admin"];
    const hasAccess = checkAccess(role, requiredRoles);
    //assert
    expect(hasAccess).toBe(false); // assert positive value of the assertion case(hasAccess)
  });

  //allow access if checking for access is not required
  it("should  allow if no arguments are passed to checkAccess ", () => {
    //arrange
    const hasAccess = checkAccess();

    //assert
    expect(hasAccess).toBe(true);
  });
});

// testing accessControl component

describe("AccessControl component", () => {
  it("should render non-page children with proper role. ", () => {
    //arrange
    render(
      <AccessControl
        role="user"
        requiredRoles={["user", "admin"]}
        isPage={false}
      >
        <h1>Hello world</h1>
      </AccessControl>
    );

    // act(optional)

    //assert
    const h1Element = screen.getByRole("heading");
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent("Hello world");
  });

  it("should render when user has access and children is a page", () => {
    render(
      <AccessControl
        role="super-admin"
        requiredRoles={["admin", "super-admin"]}
        isPage={true}
      >
        <div>Mock Page</div>
      </AccessControl>
    );

    //assert
    const mockPage = screen.queryByText("Mock Page");
    expect(mockPage).toBeInTheDocument;
  });

  it("should navigate to unauthorized if component is page and user does not have access", () => {
    const testPage = (
      <AccessControl
        role="user"
        requiredRoles={["admin", "super-admin"]}
        isPage={true}
      >
        <div>Mock Page</div>
      </AccessControl>
    );
    //arrange
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={testPage} />
          <Route path="unauthorized" element={<Unauthorized />} />
        </Routes>
      </MemoryRouter>
    );
    //assert
    const mockPage = screen.queryByText("Mock Page");
    expect(mockPage).not.toBeInTheDocument;

    //assert unauthorized page to shouw up
    const unauthorizedPage = screen.queryByTestId("unauthorized-page");
    expect(unauthorizedPage).toBeInTheDocument();
  });

  it("should render null if user does not have access and children is not a page", () => {
    //   //arrange
    //   render(
    //     <AccessControl
    //       role="user"
    //       requiredRoles={["admin", "super-admin"]}
    //       isPage={false}
    //     >
    //       <h1>Hello world</h1>
    //     </AccessControl>
    //   );
    //   //assert
    //   screen.debug();
    //   const h1Element = screen.queryByRole("heading"); // queryBy an be used when dealing with null
    //   expect(h1Element).toBeNull(); //getBy is used when dealibg with elements error
    //

    //arrange
    render(
      <AccessControl
        role="user"
        requiredRoles={["admin", "super-admin"]}
        isPage={false}
      >
        <button>Submit</button>
      </AccessControl>
    );
    //assert
    // screen.debug(); //to look at virtual DOM
    const buttonElement = screen.queryByText("button"); //we can use byrole too.
    expect(buttonElement).not.toBeInTheDocument();
    // expect(buttonElement).toBeNull();
  });
});
