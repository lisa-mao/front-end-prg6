import './index.css'
import {createBrowserRouter, Route, RouterProvider} from "react-router";
import Layout from "./layout.jsx";

import ShowFlower from "./ShowFlower.jsx";
import FormComponent from "./FormComponent.jsx";
import EditComponent from "./EditComponent.jsx";
import DetailComponent from "./DetailComponent.jsx";



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
            {
                path: `/details/:id`,
                element: <DetailComponent/>,
            },

        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App