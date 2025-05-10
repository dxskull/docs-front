import { useDispatch } from "react-redux";
import "./assets/css/style.css";
import AppRouter from "./components/core/AppRouter";
import Navbar from "./components/layout/Navbar";
import { useEffect } from "react";
import { fetchAuthUserData } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      dispatch(fetchAuthUserData());
    }
  }, [dispatch]);
  
  return (
    <div className="app">
      <AppRouter/>
      <Navbar/>
    </div>
  );
}

export default App;
