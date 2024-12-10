import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from "../../assets/images/iphone.jpg";
import { Icons } from "../../assets";

const Market = ({ setNotificationCount, setLikedCards }) => {
    const [clickedItems, setClickedItems] = useState({});

    const handleLikeClicked = (id, model) => {
        setClickedItems((prev) => {
            const updatedClickedItems = { ...prev, [id]: !prev[id] };
 
            setNotificationCount(
                Object.values(updatedClickedItems).filter((val) => val).length
            ); 
            if (updatedClickedItems[id]) {
                setLikedCards((prevLikedCards) => {
                    const updatedLikedCards = [...prevLikedCards, model];
                    return updatedLikedCards;
                });
            } else {
                setLikedCards((prevLikedCards) =>
                    prevLikedCards.filter((card) => card !== model)
                );
            }
            return updatedClickedItems;
        });
    };

    const data = [
        {
            id: 1,
            img: Image,
            icon: <Icons.heartOutlined />,
            model: "Iphone 15 Pro Max",
            price: "3 430",
            pc: "PC",
        },
        {
            id: 2,
            img: Image,
            icon: <Icons.heartOutlined />,
            model: "Samsung Galaxy S23 Ultra",
            price: "2 999",
            pc: "PC",
        },
    ];

    return (
        <div>
            <h1 className='absolute text-[36px] text-[#374557] font-bold -translate-y-[120px]'>
                Praktikum Market
            </h1>
            <p className='ml-[70%] text-[24px] -translate-y-[110px]'>
                Balans: <span className='font-bold'>12 341</span>{" "}
                <span className='text-[#166199] font-semibold'>so‘m</span>
            </p>
            <div className='flex flex-wrap justify-between mt-[100px]'>
                {Array.from({ length: 4 }, (_, index) =>
                    data.map((item) => (
                        <div
                            key={`${item.id}-${index}`}
                            className='max-w-[304px] h-[430px] p-[10px] bg-white mb-[29px]'>
                            <img src={item.img} alt={item.model} />
                            <span
                                className='-translate-y-[50px] ml-[240px] flex justify-center items-center cursor-pointer w-[32px] h-[32px] rounded-full bg-white'
                                onClick={() =>
                                    handleLikeClicked(
                                        `${item.id}-${index}`,
                                        item.model
                                    )
                                }>
                                {clickedItems[`${item.id}-${index}`] ? (
                                    <FontAwesomeIcon icon={faHeart} />
                                ) : (
                                    item.icon
                                )}
                            </span>
                            <p className='text-[18px] text-[#424551]'>
                                {item.model}
                            </p>
                            <p className='text-[20px] font-bold'>
                                {item.price}{" "}
                                <span className='text-[#008E76]'>
                                    {item.pc}
                                </span>
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Market;
