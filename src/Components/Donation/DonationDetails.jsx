import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = ({ donation } ) => {
    const { id, picture, title, txtbtn_bg, description, price } = donation || {};

    const handleAddToDonation = () => {
        const addedToDonation = [];

        const donationItems = JSON.parse(localStorage.getItem("donation"));

        if(!donationItems){
            addedToDonation.push(donation);
            localStorage.setItem("donation", JSON.stringify(addedToDonation));
            toast.success('Good Job! Donation Successfull');
        }else{
            const isExits = donationItems.find( donat => donat.id == id);

            if(!isExits){
                addedToDonation.push(...donationItems, donation);
                localStorage.setItem("donation", JSON.stringify(addedToDonation));
                toast.success('Good Job! Donation Successfull');
            }else{
                toast.error('Already Donated, Try Another');
            }
        }
        
    }

    return (
        <div>
            <div className="mx-10 lg:mx-0 py-12">
                <div className="relative mb-12 flex flex-col overflow-hidden rounded-xl shadow-md">
                    <img
                        alt="nature"
                        className="h-[700px] w-full object-cover object-center"
                        src={picture}
                    />
                    <div className="absolute w-full text-left bottom-0 p-9 bg-gradient-to-r from-[#0B0B0B80] to-[#0B0B0B80]">
                        <button onClick={handleAddToDonation}
                        className="text-white font-semibold py-4 px-6 rounded-md" style={{ backgroundColor: `${txtbtn_bg}` }}> Donate ${price} </button>
                        <ToastContainer theme="dark" />
                    </div>
                </div>
                
                <div className="text-left">
                    <h2 className="mb-6 block text-4xl font-bold leading-[1.3] tracking-normal text-[#0B0B0B] antialiased">
                        {title}
                    </h2>
                    <p className="block text-base font-normal text-justify leading-8 text-gray-700 antialiased">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;