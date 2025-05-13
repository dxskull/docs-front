import React from "react";
import AdminItem from "./AdminItem";

const AdminList = ({usersList, deleteUserFetch, setPopupVisible}) => {
  return (
    <div className="admin-list">
        {
              usersList.map((user) => <AdminItem key={user.user_id} id={user.user_id} name={user.name} surname={user.surname} email={user.email} role={user.role} deleteUserFetch={deleteUserFetch} setPopupVisible={setPopupVisible}/>)
        }
    </div>
  );
};

export default AdminList;
