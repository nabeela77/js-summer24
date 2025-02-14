// import React from "react";
// import { render, screen } from "@testing-library/react";
// import { BrowserRouter, useNavigate } from "react-router-dom";
// import { AuthCannotAccess } from "./AuthCannotAccess";
// import { AuthProvider } from "../contexts/AuthProvider";

// describe("AuthCannotAccess", () => {
//   it("navigates to dashboard if user is authenticated", async () => {
//     // Mock the AuthContext to return an authenticated user
//     const authContext = {
//       user: { id: 1, accessToken: "token" },
//     };

//     render(
//       <BrowserRouter>
//         <AuthProvider value={authContext}>
//           <AuthCannotAccess>
//             <div role="timer">Hello World</div>
//           </AuthCannotAccess>
//         </AuthProvider>
//       </BrowserRouter>
//     );

//     // Expect the component to navigate to the dashboard
//     expect(screen.queryByRole("timer")).not.toBeInTheDocument();
//     expect(window.location.pathname).toBe("/dashboard");
//   });

//   it("renders children if user is not authenticated", async () => {
//     // Mock the AuthContext to return an unauthenticated user
//     const authContext = {
//       user: null,
//     };

//     render(
//       <BrowserRouter>
//         <AuthProvider value={authContext}>
//           <AuthCannotAccess>
//             <div role="timer">Hello World</div>
//           </AuthCannotAccess>
//         </AuthProvider>
//       </BrowserRouter>
//     );

//     // Expect the children to be rendered
//     expect(screen.getByRole("timer")).toBeInTheDocument();
//   });

//   // Optional: Test for edge cases, such as an empty or malformed user object
//   it("handles edge case with empty user object", async () => {
//     const authContext = {
//       user: {},
//     };

//     render(
//       <BrowserRouter>
//         <AuthProvider value={authContext}>
//           <AuthCannotAccess>
//             <div role="timer">Hello World</div>
//           </AuthCannotAccess>
//         </AuthProvider>
//       </BrowserRouter>
//     );

//     // Depending on your logic, this might navigate or render children
//     expect(screen.queryByRole("timer")).not.toBeInTheDocument();
//     expect(window.location.pathname).toBe("/dashboard");
//   });

//   it("handles edge case with malformed user object", async () => {
//     const authContext = {
//       user: { id: null, accessToken: null },
//     };

//     render(
//       <BrowserRouter>
//         <AuthProvider value={authContext}>
//           <AuthCannotAccess>
//             <div role="timer">Hello World</div>
//           </AuthCannotAccess>
//         </AuthProvider>
//       </BrowserRouter>
//     );

//     // Depending on your logic, this might navigate or render children
//     expect(screen.getByRole("timer")).toBeInTheDocument();
//   });
// });
