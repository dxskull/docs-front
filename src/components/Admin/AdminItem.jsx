import React from "react";

const AdminItem = ({id, name, surname, email, role, deleteUserFetch, setPopupVisible}) => {
  return (
    <div className="admin-list__item">
      <p className="user-text">{name}</p>
      <p className="user-text">{surname}</p>
      <p className="user-text">{email}</p>
      <p className="user-text">{role}</p>
      <button className="btn btn-admin change" onClick={() => {setPopupVisible(true)}}>Изменить данные</button>
      <button className="btn btn-admin delete" onClick={() => {deleteUserFetch(id)}}>Удалить</button>
    </div>
  );
};

export default AdminItem;
