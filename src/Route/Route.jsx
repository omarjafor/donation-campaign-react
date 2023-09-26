import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Donation from "../Components/Donation/Donation";
import Statistics from "../Components/Statistics/Statistics";
import FindDonation from "../Components/Donation/FindDonation";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: 'donation',
                element: <Donation></Donation>
            },
            {
                path: 'statistics',
                element: <Statistics></Statistics>
            },
            {
                path: 'donations/:id',
                element: <FindDonation></FindDonation>
            }
        ]
    }
])

export default Route;