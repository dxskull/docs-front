import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/axios";
import AdminList from "./AdminList";
import Popup from "../Popup/Popup";
import AdminForm from "./AdminForm";

const AdminPanel = () => {
  const [usersList, setUsersList] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);

  function addUser(newUser) {
    setUsersList([...usersList, newUser]);
    setPopupVisible(false);
  }

  async function deleteUserFetch(userID) {
    try {
      if (confirm("Вы уверены, что хотите удалить пользователя?")) {
        await axiosInstance.delete(`/users/${userID}`);
        setUsersList(usersList.filter((user) => user.user_id !== userID))
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await axiosInstance.get("/users");
        setUsersList(data.data.items);
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
        <button
          className="btn admin-create-btn"
          onClick={() => {
            setPopupVisible(true);
          }}
        >
          Добавить пользователя
        </button>

        <Popup popupVisible={popupVisible} setPopupVisible={setPopupVisible}>
          <AdminForm addUser={addUser} setPopupVisible={setPopupVisible} />
        </Popup>
      </div>

      <select className="select admin-panel__select" name="" id="">
        <option value="all">Все</option>
        <option value="worker">Worker</option>
        <option value="admin">Admin</option>
      </select>

      <AdminList usersList={usersList} deleteUserFetch={deleteUserFetch} setPopupVisible={setPopupVisible} />
    </div>
  );
};

export default AdminPanel;
