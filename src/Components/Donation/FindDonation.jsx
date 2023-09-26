import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DonationDetails from "./DonationDetails";

const FindDonation = () => {
    const [donation, setDonation] = useState({});
    const { id } = useParams();
    const idInt = parseInt(id);

    const [data, setData] = useState();

    useEffect(() => {
        fetch('../data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    useEffect( () => {
        const findDonat = data?.find( (donat) => donat.id === idInt );

        setDonation(findDonat);
    }, [idInt, data])

    return (
        <div>
            <DonationDetails donation={donation} ></DonationDetails>
        </div>
    );
};

export default FindDonation;