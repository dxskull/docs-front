import React from "react";
import AdminItem from "./AdminItem";

const AdminList = ({usersList}) => {
  return (
    <div className="admin-list">
        {
            usersList.map((user) => <AdminItem key={user.user_id} name={user.name} surname={user.surname} email={user.email} role={user.role}/>)
        }
    </div>
  );
};

export default AdminList;
