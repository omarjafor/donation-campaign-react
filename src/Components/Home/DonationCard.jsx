import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
    const { id, picture, title, category, category_bg, card_bg, txtbtn_bg } = donation || {};
    return (
        <div>
            <Link to={`/donations/${id}`}>
                <div className="relative flex w-[312px] flex-col rounded-lg bg-clip-border text-gray-700 shadow-md" style={{ backgroundColor: `${card_bg}` }}>
                    <img
                        src={picture}
                        alt=""
                        className="rounded-t-lg h-[194px]"
                    />
                    <div className="p-4 text-left">
                        <p className="px-2 py-1 rounded text-sm font-medium inline-block" style={{ backgroundColor: `${category_bg}`, color: `${txtbtn_bg}`}}>{category}</p>
                        <h5 className="mt-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased" style={{ color: `${txtbtn_bg}` }}>
                            {title} 
                        </h5>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DonationCard;