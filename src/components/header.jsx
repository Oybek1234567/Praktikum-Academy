import { Button } from "antd";
import Praktikum from "../images/Praktikum.svg";
import { Link } from "react-router-dom";
import Nimauchunbiz from "../images/nimauchunbiz.svg";
import Teacher from "../images/teacher.svg";
import Rectangle1 from "../images/Rectangle1.svg";
import Mentor from "../images/mentorlar.svg";
import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-full max-w-[1300px] mx-auto '>
            <div className='flex justify-between items-center py-4'>
                <div>
                    <img src={Praktikum} alt='img' />
                </div>

                <div className='hidden md:flex items-center'>
                    <ul className='flex gap-4 lg:gap-10 text-center font-medium text-base'>
                        <li>
                            <a href=''>Kurslar</a>
                        </li>
                        <li>
                            <a href=''>Mentorlar</a>
                        </li>
                        <li>
                            <a href=''>Tez-tez so`raladigan savollar</a>
                        </li>
                        <li>
                            <a href=''>Bog`lanish</a>
                        </li>
                    </ul>
                    <Link to={"/signin"}>
                        <Button className='flex font-semibold text-base bg-green-400 p-4 rounded-xl border-none ml-4'>
                            Ro`yxatdan o`tish
                        </Button>
                    </Link>
                </div>

                {/* Mobil menyu tugmasi */}
                <div className='md:hidden'>
                    <button
                        onClick={toggleMenu}
                        className='text-gray-500 focus:outline-none'>
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobil menyu */}
            {isOpen && (
                <div className='md:hidden'>
                    <ul className='flex flex-col items-center gap-2'>
                        <li>
                            <a href=''>Kurslar</a>
                        </li>
                        <li>
                            <a href=''>Mentorlar</a>
                        </li>
                        <li>
                            <a href=''>Tez-tez so`raladigan savollar</a>
                        </li>
                        <li>
                            <a href=''>Bog`lanish</a>
                        </li>
                    </ul>
                    <div className='flex justify-center'>
                        <Link to={"/signin"}>
                            <Button className='font-semibold text-base bg-green-400 p-5 mt-4 rounded-xl border-none flex items-center justify-center'>
                                Ro`yxatdan o`tish
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export function Kurslar() {
    return (
        <div className='shadow-sm bg-[#F5F5F5] rounded-xl p-4 md:p-5'>
            <h1 className='text-blue-500 font-medium text-lg text-center md:text-left'>
                UX/UI dizayn
            </h1>
            <p className='font-medium text-sm mt-3 text-center md:text-left'>
                Ushbu kursda foydalanuvchi tajribasi va interfeysi
                <br />
                bo‘yicha bilim va ko‘nikmalarga ega bo‘lasiz
            </p>
            <div className='flex flex-row md:flex-row justify-center  md:justify-start mt-4 gap-5'>
                <div className='text-center md:text-left'>
                    <p className='font-medium text-xs opacity-70'>Davomilik</p>
                    <h2 className='font-medium text-base'>10 oy</h2>
                </div>
                <div className='text-center md:text-left'>
                    <p className='font-medium text-xs opacity-70'>
                        Modullar Soni
                    </p>
                    <h2 className='font-medium text-base'>10 ta</h2>
                </div>
                <div className='text-center md:text-left'>
                    <p className='font-medium text-xs opacity-70'>
                        Video Darslar
                    </p>
                    <h2 className='font-medium text-base'>64 ta</h2>
                </div>
            </div>
        </div>
    );
}

export function Nimauchun() {
    return (
        <div className='w-full rounded-3xl shadow-sm bg-[#F5F5F5] p-6 flex flex-col items-start mx-2 my-2 transition-transform duration-300 hover:shadow-lg'>
            {/* Avatar */}
            <div className='w-12 h-12 rounded-full p-3 bg-[#D2E2F1] flex items-center justify-center mb-4'>
                <img
                    src={Nimauchunbiz}
                    alt='img'
                    className='w-full h-full object-cover rounded-full'
                />
            </div>
            <h1 className='text-blue-500 font-medium text-lg'>UX/UI dizayn</h1>
            <p className='font-medium text-sm mt-2 '>
                Ushbu kursda foydalanuvchi tajribasi va interfeysi
                <br />
                bo‘yicha bilim va ko‘nikmalarga ega bo‘lasiz
            </p>
        </div>
    );
}

export function Teachers() {
    return (
        <>
            <div
                className='w-[310px] h-[551px] rounded-[32px] relative'
                style={{
                    backgroundImage: `url(${Rectangle1})`,
                }}>
                <div className='p-4 h-full flex flex-col justify-between'>
                    <div className='bg-[#000000] bg-opacity-[64%] rounded-[40px] w-[116px] h-[40px] text-white py-2 px-3'>
                        UX/UI dizayn
                    </div>
                    <div className='flex text-center items-center justify-center'>
                        <img src={Teacher} alt='img' />
                    </div>
                    <div className='bg-[#000000] bg-opacity-[64%] rounded-[40px] text-[#FFF] py-2 px-3 w-[155px]'>
                        Farrux Bozorboyev
                    </div>
                </div>
            </div>
        </>
    );
}

export function Mentorlar() {
    return (
        <>
            <div
                className='w-[310px] h-[414px] rounded-[32px] relative'
                style={{
                    backgroundImage: `url(${Mentor})`,
                }}>
                <div className='p-4 h-full flex flex-col justify-between'>
                    <div className='bg-[#000000] bg-opacity-[64%] rounded-[40px] w-[116px] h-[40px] text-[#FFF] py-2 px-3'>
                        UX/UI dizayn
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <div className='bg-[#000000] bg-opacity-[64%] rounded-[40px] w-[116px] h-[40px] text-[#fff] py-2 px-3'>
                            2 year
                        </div>
                        <div className='bg-[#000000] bg-opacity-[64%] rounded-[40px] text-[#FFF] py-2 px-3 w-[155px]'>
                            Farrux Bozorboyev
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function Footer() {
    return (
        <>
            <div className='flex justify-between items-center py-4'>
                <div>
                    <img src={Praktikum} alt='img' />
                </div>
                <div className='font-medium text-sm text-[#A6A6A6]'>
                    <p>© barcha huquqlardan himoyalangan</p>
                </div>
                <div>
                    <ul className='flex gap-10 text-center font-medium text-base'>
                        <li>
                            <a href=''>Telegram</a>
                        </li>
                        <li>
                            <a href=''>Instagram</a>
                        </li>
                        <li>
                            <a href=''>Bog`lanish</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
