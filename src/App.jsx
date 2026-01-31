import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./layout.jsx";

import ShowFlower from "./ShowFlower.jsx";


const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <ShowFlower/>,
            },
            // {
            //     path: "/create",
            //     element: <FormComponent/>,
            // },

        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App