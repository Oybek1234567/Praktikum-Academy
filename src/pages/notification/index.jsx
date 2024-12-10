import Image from "../../assets/images/iphone.jpg";
const Notification = ({ liked }) => {
    console.log("Liked Cards in Notification:", liked); // liked ro'yxatini tekshirish

    if (!liked || liked.length === 0) {
        return <p className="text-[40px] font-bold">Hozirda like bosilgan kartalar yo`q.</p>;
    }



    return (
        <div>
            <ul className='flex flex-wrap justify-between mt-[100px]'>
                {liked.map((card, index) => (
                    <li
                        key={index}
                        className='max-w-[304px] h-[430px] p-[10px] bg-white mb-[29px]'>
                        <img src={Image} alt={card} />
                        <span className='text-[18px] text-[#424551]'>
                            {card}
                        </span>
                        <p className='text-[20px] font-bold'>
                            {card.includes("Iphone") ? "3 430" : "2 999"}
                            <span className='text-[#008E76]'>PC</span>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notification;
