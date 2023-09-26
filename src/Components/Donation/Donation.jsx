import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [isShow, setIsShow] = useState(false);

    useEffect( ()=> {
        const savedDonation = JSON.parse(localStorage.getItem("donation"));
        if(savedDonation){
            setDonations(savedDonation);
        }
    } , [])

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
                {
                    isShow ?
                    donations.map(donat => <DonationCard key={donat.id} donat={donat}></DonationCard>)
                    : donations.slice(0, 4).map(donat => <DonationCard key={donat.id} donat={donat}></DonationCard>)
                }
            </div>

            {donations.length > 3 && <button onClick={() => setIsShow(!isShow)} className={isShow ? 'hidden' : "py-4 px-7 text-white font-semibold rounded-lg mt-10 bg-green-500 mx-auto"}>
                See All
            </button>}
        </div>
    );
};

export default Donation;