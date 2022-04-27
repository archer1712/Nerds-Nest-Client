import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  var auth = null; // determine if authorized, from context or however you're doing it
  const userid = useSelector((state) => state.userid);
  if (typeof userid !== "undefined") {
    auth = true;
  }
  // return auth ? <Outlet /> : <Navigate to="/" />;

  return(
    <Route 
    {...rest} 
    render={(props) => (
      auth ?(
      <Outlet/>)
      :(
      
      <Navigate exact to='/login-page'/>)
    )}
    />
  );
};


// function StudentPrivateRoute({ component: Component, ...rest }) {
//   const {authTokens} = useAuth();
  
// }


export default ProtectedRoute;

// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// function ProtectedRoute({ component: Component, ...rest }) {
//   const userid = useSelector((state) => state.userid);

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (typeof userid === "undefined") {
//           return <Component {...props} />;
//         } else {
//           return <Navigate to="/login" />;
//         }
//       }}
//     />
//   );
// }

// export default ProtectedRoute;
