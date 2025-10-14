import {createBrowserRouter} from "react-router";
import App from "../App.jsx";
import Main from "../layout/Main.jsx";
import CustomerForm from "../layout/CustomerForm.jsx";

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/data",
                element: <h1>Data</h1>
            },
            {
                path: "/form",
                element: <CustomerForm />
            },
            {
                path: "/contact",
                element: <h1>Contact</h1>
            }

        ]
    },
]);