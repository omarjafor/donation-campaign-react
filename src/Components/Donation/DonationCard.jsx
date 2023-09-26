import { Link } from "react-router-dom";

const DonationCard = ({ donat }) => {

    const { id, picture, price, title, category, category_bg, card_bg, txtbtn_bg } = donat || {};

    return (
        <div>
            <div className="relative flex max-w-[648px] rounded-xl shadow-md" style={{ backgroundColor: `${card_bg}` }}>
                <div className="relative m-0 w-2/5 overflow-hidden rounded-xl rounded-r-none">
                    <img
                        src={picture}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6 text-left">
                    <h6 className="px-2 py-1 rounded text-sm font-medium inline-block" style={{ backgroundColor: `${category_bg}`, color: `${txtbtn_bg}` }}>
                        {category}
                    </h6>
                    <h4 className="my-2 text-[#0B0B0B] text-2xl font-bold">
                        {title}
                    </h4>
                    <p className="text-base font-bold" style={{ color: `${txtbtn_bg}` }}>
                        ${price}.00
                    </p>
                    <Link to={`/donations/${id}`}>
                    <button
                            className="mt-5 mb-4 py-2 px-4 text-white rounded font-bold text-lg" style={{ backgroundColor: `${txtbtn_bg}` }}
                            type="button"> View Details </button></Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;