import React from "react";
import { Header } from "../../components/header";
import Homepageimg from "../../images/homepage-1.png";
import { Button } from "antd";
import { Kurslar } from "../../components/header";
import Nimauchunbiz from "../../images/nimauchunbiz.svg";

const LandingPage = () => {
    return (
        <>
            <div className='max-w-[1300px] mx-auto'>
                <div>
                    <Header />
                </div>

                <div className='flex mt-[120px] justify-between '>
                    <div>
                        <h1 className='text-6xl'>
                            Maqsadlaringiz <br /> uchun
                            <span className='text-blue-500 ml-3'>
                                mukammal <br /> kurslar
                            </span>
                        </h1>
                        <p className='text-lg mt-5 opacity-70'>
                            Kurslarimiz maqsadlaringizni amalga oshirishga
                            yordam beradi. <br /> Har bir dars mukammal va
                            amaliy tajribalar bilan boyitilgan.
                        </p>
                        <Button className='bg-black text-white py-5 px-7 mt-5 rounded-xl font-semibold text-base'>
                            Kurslar
                        </Button>
                        <Button className='bg-gray text-black py-5 px-5 ml-4 rounded-xl font-semibold text-basec'>
                            Bog'lanish
                        </Button>
                    </div>
                    <div>
                        <img src={Homepageimg} alt='' />
                    </div>
                </div>

                <div className='flex mt-14 justify-around'>
                    <div className='text-center'>
                        <h1 className='text-sky-600 font-medium text-5xl'>
                            1200+
                        </h1>
                        <p className='font-medium text-base'>
                            O'quvchilar soni
                        </p>
                    </div>
                    <hr className='h-[61px] bg-gray-300 w-[1px] mt-[3px]' />
                    <div className='text-center'>
                        <h1 className='text-sky-600 font-medium text-5xl'>
                            1200+
                        </h1>
                        <p className='font-medium text-base'>
                            Ishga joylashgan o'quvchilar
                        </p>
                    </div>
                    <hr className='h-[61px] bg-gray-300 w-[1px] mt-[3px]' />
                    <div>
                        <h1 className='text-sky-600 font-medium text-5xl'>
                            20+
                        </h1>
                        <p className='font-medium text-base'>Mentorlar</p>
                    </div>
                </div>

                <div className='mb-20'>
                    <div className='text-3xl font-semibold mt-20 '>Kurslar</div>
                    <div className='flex justify-between mt-10'>
                        <Kurslar />
                        <Kurslar />
                        <Kurslar />
                    </div>
                    <div className='flex justify-between mt-5'>
                        <Kurslar />
                        <Kurslar />
                        <Kurslar />
                    </div>
                </div>

                <div>
                    <h1 className='font-semibold text-3xl '>Nima uchun biz</h1>

                    <div className='w-[420px] h-[208px] rounded-3xl shadow-sm bg-[#F5F5F5]'>
                        <div className='w-12 h-12 rounded-[100px] p-3 bg-black'>
                            <img src={Nimauchunbiz} alt='img' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
