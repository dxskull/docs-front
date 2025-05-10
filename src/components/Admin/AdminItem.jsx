import React from "react";

const AdminItem = ({name, surname, email, role}) => {
  return (
    <div className="admin-list__item">
      <p className="user-text">{name}</p>
      <p className="user-text">{surname}</p>
      <p className="user-text">{email}</p>
      <p className="user-text">{role}</p>
      <button className="btn btn-admin change">Изменить данные</button>
      <button className="btn btn-admin delete">Удалить</button>
    </div>
  );
};

export default AdminItem;
