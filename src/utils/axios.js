import axios from "axios";
// const baseURL = "http://192.168.1.83:8000"   
// const baseURL = "http://192.168.1.106:8000"
const baseURL = "http://100.113.46.39:8000"

export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL,
    headers: {
        "Content-Type": "application/json",
    }
})

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("access_token")}`
    return config
})

// Перехватчик ответов для обработки истекших токенов
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            originalRequest.url !== "/auth/refresh"
        ) {
            originalRequest._retry = true;

            try {
                const { data } = await axiosInstance.post("/auth/refresh", { refresh_token: localStorage.getItem("refresh_token") });
                const newAccessToken = data.data.access_token;
                const newRefreshToken = data.data.refresh_token;
                localStorage.setItem("access_token", newAccessToken);
                localStorage.setItem("refresh_token", newRefreshToken);
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return axiosInstance(originalRequest);
            } catch (refreshError) {
                console.error("Refresh token error:", refreshError.response?.data);
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                // window.location.href = "/login";
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);
