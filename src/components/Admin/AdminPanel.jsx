import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/axios";
import AdminList from "./AdminList";
import Popup from "../Popup/Popup";

const AdminPanel = () => {
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await axiosInstance.get("/users/get_all"); 
        setUsersList(data.data.items)
      } catch (error) {
        console.log(error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="admin-panel">
      <div className="admin-panel__controls">
        <input
          className="input admin-panel__search"
          type="search"
          placeholder="Найти пользователя..."
        />
        <button className="btn admin-create-btn">Создать пользователя</button>
        <Popup/>
      </div>

      <select className="select admin-panel__select" name="" id="">
        <option value="" selected disabled>
          Роль
        </option>
        <option value="admin">Admin</option>
        <option value="worker">Worker</option>
      </select>

      <AdminList usersList={usersList}/>
    </div>
  );
};

export default AdminPanel;
