import './index.css'
import {createBrowserRouter, Link, Route, RouterProvider} from "react-router";
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

            {
                path: "*",
                element: (
                    <div className="flex flex-col items-center pt-20">
                        <h1 className="text-4xl font-bold">404</h1>
                        <p className="text-xl">Page doesn't exist!!!!!!!!!!.</p>
                        <Link to="/" className="mt-4 text-amber-800 underline">GO BACK
                            </Link>
                    </div>
                )
            }
        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App