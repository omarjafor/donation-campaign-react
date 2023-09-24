const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/t8LL0QG/banner-bg.png')]">
            <div className="h-[45vh] relative bg-gradient-to-r from-[#FFFFFFF2] to-[#FFFFFFF2]">
                <div className="searchbar absolute bottom-[43%] w-full px-20">
                    <form>
                        <div className="relative">
                            <div className="p-6">
                                <h2 className="text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h2>
                                <input className="mt-4 p-4 rounded-l-lg w-[360px] border border-solid border-[#11111126]" type="text" placeholder="Search here...." />
                                <button className="bg-[#FF444A] text-white font-semibold py-4 px-6 rounded-r-lg"> Search </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;