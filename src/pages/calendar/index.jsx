import { Calendar, Badge } from "antd";
import { Link } from "react-router-dom";
import { Icons } from "../../assets";
import { useState } from "react";

const getListData = (value) => {
    
    let listData;
    switch (value.date()) {
        case 1:
            listData = [
                { type: "warning", content: "Web dasturlash" },
                { type: "default", content: "Uyga vazifa" },
            ];
            break;
        case 11:
            listData = [
                { type: "warning", content: "SMM" },
                { type: "default", content: "Test" },
            ];
            break;
        case 22:
            listData = [
                { type: "warning", content: "Web dasturlash" },
                { type: "default", content: "Test" },
            ];
            break;
        case 26:
            listData = [
                { type: "success", content: "Web va grafik dizayn" },
                { type: "default", content: "Test" },
            ];
            break;
        default:
            listData = [];
    }
    return listData || [];
};

const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
        <ul className='list-none p-0 m-0'>
            {listData.map((item, index) => (
                <li key={index} className='flex items-center text-sm space-x-1'>
                    <Badge status={item.type} text={item.content} />
                </li>
            ))}
        </ul>
    );
};

const CalendarPage = () => {
    const [hidden, setHidden] = useState(false)
    const handleOpen = () => {
        setHidden(!hidden)
    }
    const cardsData = [
        {
            title: "Web va grafik dizayn",
            date: "Yanvar 17, 2021",
            time: "09.00 - 10.00",
            status: "Jarayonda",
            progress: "4/10",
            person: "Humoyun Madraximov",
        },
        {
            title: "Web va grafik dizayn",
            date: "Yanvar 17, 2021",
            time: "09.00 - 10.00",
            status: "Jarayonda",
            progress: "4/10",
            person: "Humoyun Madraximov",
        },
    ];
    const completedCardsData = [
        {
            title: "Web va grafik dizayn",
            date: "Yanvar 17, 2021",
            time: "09.00 - 10.00",
            status: "Tugallangan",
            progress: "10/10",
            person: "Humoyun Madraximov",
        },
        {
            title: "Web va grafik dizayn",
            date: "Yanvar 17, 2021",
            time: "09.00 - 10.00",
            status: "Tugallangan",
            progress: "10/10",
            person: "Humoyun Madraximov",
        },
    ];
    return (
        <>
            <h1 className='absolute -translate-y-28 text-[36px] font-bold'>
                Dars jadvali
            </h1>
            <div className='flex'>
                <div className='h-[600px] overflow-y-scroll'>
                    <div className=' bg-white shadow-lg rounded-lg p-5 max-w-5xl'>
                        <h2 className='text-2xl font-bold text-center mb-5'>
                            January, 2022
                        </h2>
                        <Calendar
                            dateCellRender={dateCellRender}
                            className='custom-calendar'
                            style={{ border: "none", overflow: "hidden" }}
                        />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='ml-[52px] bg-[#fff] h-[418px] w-[438px] rounded-[16px] p-[32px]'>
                        <b className='text-lg font-semibold'>Bu haftada</b>
                        <div className='grid grid-cols-5 gap-x-3 text-center mt-3 text-gray-600'>
                            <span>09:00</span>
                            <span>11:00</span>
                            <span>14:00</span>
                            <span>16:00</span>
                            <span>18:00</span>
                        </div>
                        <ul className='mt-4 space-y-4'>
                            <li className='flex items-center justify-between'>
                                <span className='text-gray-600'>Dush</span>
                            </li>
                            <li className='flex items-center justify-between'>
                                <span className='text-gray-600'>Sesh</span>
                                <div className='bg-[#1565C0] text-white rounded-full px-3 py-1 text-sm'>
                                    Web va grafik dizayn
                                </div>
                            </li>
                            <li className='flex items-center justify-between'>
                                <span className='text-gray-600 font-semibold'>
                                    Chor
                                </span>
                                <div className='bg-[#FFC107] text-white rounded-full px-3 py-1 text-sm'>
                                    SMM
                                </div>
                            </li>
                            <li className='flex items-center justify-between'>
                                <span className='text-gray-600'>Pay</span>
                            </li>
                            <li className='flex items-center justify-between'>
                                <span className='text-gray-600'>Jum</span>
                            </li>
                            <li className='flex items-center justify-between'>
                                <span className='text-gray-600'>Shan</span>
                                <div className='bg-[#0D47A1] text-white rounded-full px-3 py-1 text-sm'>
                                    Web dasturlash
                                </div>
                            </li>
                            <li className='flex items-center justify-between'>
                                <span className='text-gray-600'>Yak</span>
                            </li>
                        </ul>
                    </div>
                    <div className='ml-[52px] mt-[40px] '>
                        <h3 className='text-[24px] text-[#374557] font-bold mb-[33px]'>
                            Barcha kurslarim ro`yxati
                        </h3>
                        <div className='absolute flex flex-col gap-[24px]'>
                            <div className='flex flex-col bg-white p-[24px] border-l-[16px] border-l-[#374557] rounded-[16px]'>
                                <b className='text-[18px] text-[#374557] mb-[16px]'>
                                    Web dasturlash
                                </b>
                                <div className='flex items-center mb-[35px]'>
                                    <Icons.smCalendar className='mr-[8px]' />
                                    <time className='text-[#A098AE] mr-[30px] pr-[24px] border-r-[1px]'>
                                        Yanvar 5, 2021
                                    </time>
                                    <Icons.clock className='mr-[8px]' />
                                    <time className='text-[#A098AE] mr-[30px] pr-[24px]'>
                                        09.00 - 10.00
                                    </time>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-[32px] h-[32px] bg-[#dbdbdb] rounded-[8px] mr-[8px]'></div>
                                    <p className='text-[#a098ae]'>
                                        Humoyun Madraximov
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col bg-white p-[24px] border-l-[16px] border-l-[#166199] rounded-[16px]'>
                                <b className='text-[18px] text-[#374557] mb-[16px]'>
                                    Web va grafik dizayn
                                </b>
                                <div className='flex items-center mb-[35px]'>
                                    <Icons.smCalendar className='mr-[8px]' />
                                    <time className='text-[#A098AE] mr-[30px] pr-[24px] border-r-[1px]'>
                                        Yanvar 5, 2021
                                    </time>
                                    <Icons.clock className='mr-[8px]' />
                                    <time className='text-[#A098AE] mr-[30px] pr-[24px]'>
                                        09.00 - 10.00
                                    </time>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-[32px] h-[32px] bg-[#dbdbdb] rounded-[8px] mr-[8px]'></div>
                                    <p className='text-[#a098ae]'>
                                        Humoyun Madraximov
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col bg-white p-[24px] border-l-[16px] border-l-[#fec64f] rounded-[16px]'>
                                <b className='text-[18px] text-[#374557] mb-[16px]'>
                                    SMM
                                </b>
                                <div className='flex items-center mb-[35px]'>
                                    <Icons.smCalendar className='mr-[8px]' />
                                    <time className='text-[#A098AE] mr-[30px] pr-[24px] border-r-[1px]'>
                                        Yanvar 5, 2021
                                    </time>
                                    <Icons.clock className='mr-[8px]' />
                                    <time className='text-[#A098AE] mr-[30px] pr-[24px]'>
                                        09.00 - 10.00
                                    </time>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-[32px] h-[32px] bg-[#dbdbdb] rounded-[8px] mr-[8px]'></div>
                                    <p className='text-[#a098ae]'>
                                        Humoyun Madraximov
                                    </p>
                                </div>
                            </div>
                            {hidden && (
                                <div className='flex flex-col bg-white p-[24px] border-l-[16px] border-l-[#374557] rounded-[16px]'>
                                    <b className='text-[18px] text-[#374557] mb-[16px]'>
                                        Web dasturlash
                                    </b>
                                    <div className='flex items-center mb-[35px]'>
                                        <Icons.smCalendar className='mr-[8px]' />
                                        <time className='text-[#A098AE] mr-[30px] pr-[24px] border-r-[1px]'>
                                            Yanvar 5, 2021
                                        </time>
                                        <Icons.clock className='mr-[8px]' />
                                        <time className='text-[#A098AE] mr-[30px] pr-[24px]'>
                                            09.00 - 10.00
                                        </time>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='w-[32px] h-[32px] bg-[#dbdbdb] rounded-[8px] mr-[8px]'></div>
                                        <p className='text-[#a098ae]'>
                                            Humoyun Madraximov
                                        </p>
                                    </div>
                                </div>
                            )}
                            {!hidden && (
                                <p
                                    onClick={handleOpen}
                                    className='cursor-pointer text-[18px] text-[#374557] text-center'>
                                    Batafsil jadval →
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-5xl'>
                <p className='text-[36px] mt-[27px] mb-[27px] font-bold'>Jarayonda</p>
                <Link to={"/topics"} className='flex gap-[40px]'>
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className='w-[485.88px] h-[252px] rounded-2xl bg-[#166199] p-6'>
                            <div>
                                <h1 className='text-[#384658] bg-[#FFF] w-[312.35px] px-7 py-1 font-semibold text-2xl rounded-[10px]'>
                                    {card.title}
                                </h1>
                            </div>
                            <div className='flex gap-10 mt-[17px]'>
                                <p className='font-normal text-lg text-white'>
                                    {card.date}
                                </p>
                                <p className='font-normal text-lg text-white'>
                                    {card.time}
                                </p>
                            </div>
                            <div className='flex items-center w-full h-[17px] bg-white mt-8 rounded'>
                                <div className='w-[40%] h-[15px] ml-[2px] rounded-[4px] bg-[#166199]'></div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <img src='' alt='' />
                                    <p className='font-semibold text-base text-white'>
                                        {card.status}
                                    </p>
                                </div>
                                <div className='font-semibold text-base text-white'>
                                    {card.progress}
                                </div>
                            </div>
                            <div>
                                <img src='' alt='' />
                                <p className='font-normal text-lg text-white'>
                                    {card.person}
                                </p>
                            </div>
                        </div>
                    ))}
                </Link>
                <p className='text-[36px] mt-[50px] font-bold'>Tugallangan</p>
                <Link to={"/finished_topics"} className='flex gap-[40px]'>
                    {completedCardsData.map((card, index) => (
                        <div
                            key={index}
                            className='w-[485.88px] h-[252px] mt-[24px] rounded-2xl bg-[#374557] p-6'>
                            <div>
                                <h1 className='text-[#384658] bg-[#FFF] w-[312.35px] px-7 py-1 font-semibold text-2xl rounded-[10px]'>
                                    {card.title}
                                </h1>
                            </div>
                            <div className='flex gap-10 mt-[17px]'>
                                <p className='font-normal text-lg text-white'>
                                    {card.date}
                                </p>
                                <p className='font-normal text-lg text-white'>
                                    {card.time}
                                </p>
                            </div>
                            <div className='flex items-center w-full h-[17px] bg-white mt-8 rounded'>
                                <div className='w-[100%] h-[15px] ml-[2px] mr-[2px] rounded-[4px] bg-[#384658]'></div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <img src='' alt='' />
                                    <p className='font-semibold text-base text-white'>
                                        {card.status}
                                    </p>
                                </div>
                                <div className='font-semibold text-base text-white'>
                                    {card.progress}
                                </div>
                            </div>
                            <div>
                                <img src='' alt='' />
                                <p className='font-normal text-lg text-white'>
                                    {card.person}
                                </p>
                            </div>
                        </div>
                    ))}
                </Link>
            </div>
        </>
    );
};

export default CalendarPage;
