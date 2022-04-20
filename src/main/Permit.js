import React from "react";
import { useSelector } from "react-redux";

const Permit = (props) => {
  const user_info = useSelector((state) => state.user.user);
  console.log(user_info);
  return <></>;
};

export default Permit;
