import LandingPage from "../pages/LandingPage"
import DocumentsPage from "../pages/DocumentsPage"
import ProfilePage from "../pages/ProfilePage"
import AdminPage from "../pages/AdminPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import DocumentFormPage from "../pages/DocumentFormPage"

export const ROUTES = {
    LANDING_PAGE: "/",
    DOCUMENTS_PAGE: "/documents",
    DOCUMENT_FORM_PAGE: "/documents/:id",
    PROFILE_PAGE: "/profile",
    ADMIN_PAGE: "/admin",
    LOGIN_PAGE: "/login",
    REGISTER_PAGE: "/register"
}
// export const routes = [
//     {
//         path: ROUTES.LANDING_PAGE,
//         element: LandingPage
//     },
//     {
//         path: ROUTES.DOCUMENTS_PAGE,
//         element: DocumentsPage
//     },
//     {
//         path: ROUTES.DOCUMENT_FORM_PAGE,
//         element: DocumentFormPage
//     },
//     {
//         path: ROUTES.PROFILE_PAGE,
//         element: ProfilePage
//     },
//     {
//         path: ROUTES.ADMIN_PAGE,
//         element: AdminPage
//     },
//     {
//         path: ROUTES.LOGIN_PAGE,
//         element: LoginPage
//     },
//     {
//         path: ROUTES.REGISTER_PAGE,
//         element: RegisterPage
//     }
// ]