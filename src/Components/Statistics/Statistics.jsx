import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {

    const savedDonation = JSON.parse(localStorage.getItem("donation"));
    

    let totalDonation = 12 ;
    let yourDonation = (savedDonation || []).length ;
    let remaining = totalDonation - yourDonation;

    const data = [
        { name: "Total Donation", value: remaining },
        { name: "Your Donation", value: yourDonation },
    ];

    const COLORS = ["#FF444A", "#00C49F"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                fontSize="36"
                fontWeight='bold'
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    return (
        <div>
            <div className="flex justify-center mt-24 mx-auto items-center">
                <PieChart width={500} height={500} className="mx-auto">
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={200}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className="flex justify-center gap-14 flex-col md:flex-row text-center items-center">
                <div className="flex text-center items-center ">
                    <h2>Your Donation</h2>
                    <div className="h-3 ml-4 w-[100px] bg-[#00C49F]"></div>
                </div>
                <div className="flex text-center items-center ">
                    <h2>Total Donation</h2>
                    <div className="h-3 ml-4 w-[100px] bg-[#FF444A]"></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;