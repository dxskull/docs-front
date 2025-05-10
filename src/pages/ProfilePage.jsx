import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const {email, name, surname} = useSelector((state) => state.auth.userData)
  
  return (
  <div className="container">
    {email} <br />
    {name} <br />
    {surname} <br />

  </div>
);
};

export default ProfilePage;
