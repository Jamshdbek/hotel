import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import Layout from "./layout"
import { Login, Home, Register } from "../page"
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register/>}/>
            <Route path='login' element={<Login />} />
        </Route>
    )
)
function Index() {
    return <RouterProvider router={router} />
}

export default Index