// import React, { Component } from "react";

// import "../App.css";

// import Amplify from "aws-amplify";
// import awsExports from "../aws-exports";
// import {
//   AmplifyAuthenticator,
//   AmplifySignOut,
//   withAuthenticator,
// } from "@aws-amplify/ui-react";
// import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
// import Employee from "../components/createEmployee";

// Amplify.configure(awsExports);

// function Login() {
//   const [authState, setAuthState] = React.useState();
//   const [user, setUser] = React.useState();

//   React.useEffect(() => {
//     return onAuthUIStateChange((nextAuthState, authData) => {
//       setAuthState(nextAuthState);
//       setUser(authData);
//     });
//   }, []);

//   return authState === AuthState.SignedIn && user ? (
//     <div className="App">
//       <div>
//         <Employee />
//       </div>
//     </div>
//   ) : (
//     <div>
//       <AmplifyAuthenticator />
//     </div>
//   );
// }

// export default Login;
