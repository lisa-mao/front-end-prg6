import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./layout.jsx";

import ShowFlower from "./ShowFlower.jsx";
import FormComponent from "./FormComponent.jsx";
import EditComponent from "./EditComponent.jsx";


const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <ShowFlower/>,
            },
            {
                path: "/create",
                element: <FormComponent/>,
            },
            {
                path: `/edit/:id`,
                element: <EditComponent/>,
            },

        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App