import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Nimauchunbiz from '../images/nimauchunbiz.svg';
import Teacher from '../images/teacher.svg';
import Rectangle1 from '../images/Rectangle1.svg';
import Mentor from '../images/mentorlar.svg';
import Praktikum from '../images/Praktikum.svg'; // Ko'k logo uchun
import Praktikum2 from '../images/Praktikum2.svg'; // Oq logo uchun
import Qilinganishlar from '../images/qilinganishlar.svg';
import Frame from '../images/Frame.svg';

export function Header() {
    return (
        <>
            <div className='flex justify-between items-center py-4'>
                <div>
                    <img src={Praktikum} alt='img' />
                </div>
                <div className='flex gap-10 items-center'>
                    <ul className='flex gap-10 text-center font-medium text-base'>
                        <li>
                            <a href='#kurslar'>Kurslar</a>
                        </li>
                        <li>
                            <a href='#mentorlar'>Mentorlar</a>
                        </li>
                        <li>
                            <a href='#savollar'>
                                Tez-tez so`raladigan savollar
                            </a>
                        </li>
                        <li>
                            <a href='#bo`glanish'>Bog`lanish</a>
                        </li>
                    </ul>
                    <Link to='/'>
                        <Button className='font-semibold text-base bg-green-400 p-5 rounded-xl '>
                            Ro`yxatdan o`tish
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export function KurslarHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='flex justify-between items-center py-4'>
                <div className=''>
                    <img src={Praktikum2} alt='img' className='w-24 md:w-32' />
                </div>

                {/* Menu Icon for mobile */}
                <div className='md:hidden '>
                    <Button
                        onClick={toggleMenu}
                        className='text-white bg-[#1D70B7] border-none'>
                        {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                    </Button>
                </div>

                {/* Desktop Navbar */}
                <div className='hidden md:flex gap-10  items-center'>
                    <ul className='flex gap-10 text-center font-medium text-base'>
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

                    <Link to='/'>
                        <Button className='font-semibold text-base bg-green-400  rounded-xl'>
                            Ro`yxatdan o`tish
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Mobile Navbar */}
            {isMenuOpen && (
                <div className='flex flex-col md:hidden'>
                    <ul className='flex flex-col gap-4 text-center font-medium text-base'>
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
                    <div className='flex  justify-center'>
                        <Link to='/'>
                            <Button className='font-semibold text-base bg-green-400 p-4 rounded-xl mt-4'>
                                Ro`yxatdan o`tish
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export function Kurslar() {
    return (
        <>
            <div className='shadow-sm bg-[#F5F5F5] w-[420px] h-[168px] rounded-xl'>
                <div>
                    <h1 className='text-blue-500 font-medium text-lg ml-5 mt-4'>
                        UX/UI dizayn
                    </h1>
                    <p className='font-medium text-sm ml-5 mt-3'>
                        Ushbu kursda foydalanuvchi tajribasi va interfeysi{' '}
                        <br />
                        bo‘yicha bilim va ko‘nikmalarga ega bo‘lasiz
                    </p>
                    <div className='flex  ml-5 mt-4 gap-10'>
                        <div>
                            <p className='font-medium text-xs opacity-70'>
                                Davomilik
                            </p>
                            <h2 className='font-medium text-base'>10 oy</h2>
                        </div>
                        <div>
                            <p className='font-medium text-xs opacity-70'>
                                Modullar Soni
                            </p>
                            <h2 className='font-medium text-base'>10 ta</h2>
                        </div>
                        <div>
                            <p className='font-medium text-xs opacity-70'>
                                Video Darslar
                            </p>
                            <h2 className='font-medium text-base'>64 ta</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function Nimauchun() {
    return (
        <>
            <div className='w-[420px] h-[208px] rounded-3xl shadow-sm bg-[#F5F5F5] p-6'>
                <div className='w-12 h-12 rounded-[100px] p-3 bg-[#D2E2F1]'>
                    <img src={Nimauchunbiz} alt='img' />
                </div>
                <div>
                    <h1 className='text-blue-500 font-medium text-lg mt-4'>
                        UX/UI dizayn
                    </h1>
                    <p className='font-medium text-sm  mt-3'>
                        Ushbu kursda foydalanuvchi tajribasi va interfeysi{' '}
                        <br />
                        bo‘yicha bilim va ko‘nikmalarga ega bo‘lasiz
                    </p>
                </div>
            </div>
        </>
    );
}
export function Kursafzalliklari() {
    return (
        <>
            <div className='w-[420px] h-[147px] rounded-3xl shadow-sm bg-[#F5F5F5] p-5'>
                <div>
                    <h1 className='text-blue-500 font-medium text-lg '>
                        UX/UI dizayn
                    </h1>
                    <p className='font-medium text-sm  mt-10'>
                        Ushbu kursda foydalanuvchi tajribasi va interfeysi{' '}
                        <br />
                        bo‘yicha bilim va ko‘nikmalarga ega bo‘lasiz
                    </p>
                </div>
            </div>
        </>
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

export function QilinganIshlar() {
    return (
        <>
            <div
                className='w-[640px] h-[359px] rounded-[32px] relative'
                style={{
                    backgroundImage: `url(${Qilinganishlar})`,
                }}>
                <div className='p-10 flex justify-between py-[46%]'>
                    <h1 className='text-[#FFF] font-medium text-2xl '>
                        Mega go
                    </h1>
                    <img src={Frame} />
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
