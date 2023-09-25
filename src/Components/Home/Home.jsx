import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner/Banner";
import DonationCard from "./DonationCard";

const Home = () => {
    const donations = useLoaderData();


    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-24 mx-20'>
                {
                    donations?.map(donation => <DonationCard key={donation.id} donation={donation} ></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;