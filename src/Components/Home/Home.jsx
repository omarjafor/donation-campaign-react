import Banner from "../Header/Banner/Banner";
import DonationCard from "./DonationCard";
import { useEffect, useState } from "react";

const Home = () => {
    const [donations, setDonations] = useState([]);
    const [filterData, setFilterData] = useState([]);

    const handleSearch = (category) => {
        const searchData = donations.filter(item => item.category.toLowerCase() == category.toLowerCase());
        
            setFilterData(searchData);
    }

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setDonations(data));
    } , [])

    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-24 md:mx-10 lg:mx-24 mx-20'>
                { filterData.length > 2 ? 
                    filterData.map(donation => <DonationCard key={donation.id} donation={donation} ></DonationCard>) :
                    donations?.map(donation => <DonationCard key={donation.id} donation={donation} ></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;