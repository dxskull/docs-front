import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios";

export const fetchLogin = createAsyncThunk("auth/fetchLogin", async (params) => {
    const { data } = await axiosInstance.post("/auth/login", params)
    return data.data
})

export const fetchAuthUserData = createAsyncThunk("auth/fetchAuthUserData", async () => {
    const { data: authData } = await axiosInstance.get("/auth/me")

    if ("user_id" in authData.data) {
        const { data } = await axiosInstance.get(`/users/${authData.data.user_id}`)
        return data.data
    }
})

export const fetchLogout = createAsyncThunk("auth/fetchLogout", async () => {
    const { data } = await axiosInstance.post("/auth/logout")
    return data.data
})

const initialState = {
    userData: null,
    status: "loading"
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // Login 
            .addCase(fetchLogin.pending, (state) => {
                state.status = "loading"
                state.userData = null
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.status = "success"
                state.userData = action.payload
            })
            .addCase(fetchLogin.rejected, (state) => {
                state.status = "error"
                state.userData = null
            })

            // auth user and get user data
            .addCase(fetchAuthUserData.pending, (state) => {
                state.status = "loading"
                state.userData = null
            })
            .addCase(fetchAuthUserData.fulfilled, (state, action) => {
                state.status = "success"
                state.userData = action.payload
            })
            .addCase(fetchAuthUserData.rejected, (state) => {
                state.status = "error"
                state.userData = null
            })

            // Logout
            .addCase(fetchLogout.fulfilled, (state) => {
                state.userData = null
            })
    }
})

export const selectorIsAuth = (state) => Boolean(state.auth.userData)

export const selectorIsAdmin = (state) => (state.auth.userData?.role ? state.auth.userData.role === "admin" : false)

export default authSlice.reducer