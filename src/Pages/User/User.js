import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const User = () => {
  const [user] = useAuthState(auth);
 
  return (
    <div style={{ minHeight: "80vh" }}>
      <h1 className="text-center my-12 text-4xl">I am <span className="text-red-600">{user?.displayName}</span></h1>
    </div>
  );
};

export default User;
