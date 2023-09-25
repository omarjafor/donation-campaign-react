import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetails from "./DonationDetails";

const FindDonation = () => {
    const [donation, setDonation] = useState({});
    const { id } = useParams();
    const idInt = parseInt(id);
    const donations = useLoaderData();

    useEffect( () => {
        const findDonat = donations?.find( (donat) => donat.id === idInt );

        setDonation(findDonat);
    }, [idInt, donations])

    return (
        <div>
            <DonationDetails donation={donation} ></DonationDetails>
        </div>
    );
};

export default FindDonation;