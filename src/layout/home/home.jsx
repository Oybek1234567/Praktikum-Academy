import React from "react";
import { Header } from "../../components/header";
import Homepageimg from "../../images/homepage-1.png";
import { Button } from "antd";

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
                        <div className='shadow-sm bg-[#F5F5F5] w-[420px] h-[168px] rounded-xl'>
                            <div>
                                <h1 className='text-blue-500 font-medium text-lg ml-5 mt-4'>
                                    UX/UI dizayn
                                </h1>
                                <p className='font-medium text-sm ml-5 mt-3'>
                                    Ushbu kursda foydalanuvchi tajribasi va
                                    interfeysi <br />
                                    bo‘yicha bilim va ko‘nikmalarga ega bo‘lasiz
                                </p>
                                <div className='flex  ml-5 mt-4 gap-10'>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Davomilik
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            10 oy
                                        </h2>
                                    </div>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Modullar Soni
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            10 ta
                                        </h2>
                                    </div>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Video Darslar
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            64 ta
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-sm bg-[#F5F5F5] w-[420px] h-[]168px] rounded-xl'>
                            <div>
                                <h1 className='text-blue-500 font-medium text-lg ml-5 mt-4'>
                                    UX/UI dizayn
                                </h1>
                                <p className='font-medium text-sm ml-5 mt-3'>
                                    Ushbu kursda foydalanuvchi tajribasi va
                                    interfeysi <br />
                                    bo‘yicha bilim va ko‘nikmalarga ega bo‘lasiz
                                </p>
                                <div className='flex  ml-5 mt-4 gap-10'>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Davomilik
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            10 oy
                                        </h2>
                                    </div>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Modullar Soni
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            10 ta
                                        </h2>
                                    </div>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Video Darslar
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            64 ta
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-sm bg-[#F5F5F5] w-[420px] h-[168px] rounded-xl'>
                            <div>
                                <h1 className='text-blue-500 font-medium text-lg ml-5 mt-4'>
                                    UX/UI dizayn
                                </h1>
                                <p className='font-medium text-sm ml-5 mt-3'>
                                    Ushbu kursda foydalanuvchi tajribasi va
                                    interfeysi <br />
                                    bo‘yicha bilim va ko‘nikmalarga ega bo‘lasiz
                                </p>
                                <div className='flex  ml-5 mt-4 gap-10'>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Davomilik
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            10 oy
                                        </h2>
                                    </div>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Modullar Soni
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            10 ta
                                        </h2>
                                    </div>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Video Darslar
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            64 ta
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-5'>
                        <div className='shadow-sm bg-[#F5F5F5] w-[420px] h-[168px] rounded-xl'>
                            <div>
                                <h1 className='text-blue-500 font-medium text-lg ml-5 mt-4'>
                                    UX/UI dizayn
                                </h1>
                                <p className='font-medium text-sm ml-5 mt-3'>
                                    Ushbu kursda foydalanuvchi tajribasi va
                                    interfeysi <br />
                                    bo‘yicha bilim va ko‘nikmalarga ega bo‘lasiz
                                </p>
                                <div className='flex  ml-5 mt-4 gap-10'>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Davomilik
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            10 oy
                                        </h2>
                                    </div>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Modullar Soni
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            10 ta
                                        </h2>
                                    </div>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Video Darslar
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            64 ta
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-sm bg-[#F5F5F5] w-[420px] h-[]168px] rounded-xl'>
                            <div>
                                <h1 className='text-blue-500 font-medium text-lg ml-5 mt-4'>
                                    UX/UI dizayn
                                </h1>
                                <p className='font-medium text-sm ml-5 mt-3'>
                                    Ushbu kursda foydalanuvchi tajribasi va
                                    interfeysi <br />
                                    bo‘yicha bilim va ko‘nikmalarga ega bo‘lasiz
                                </p>
                                <div className='flex  ml-5 mt-4 gap-10'>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Davomilik
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            10 oy
                                        </h2>
                                    </div>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Modullar Soni
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            10 ta
                                        </h2>
                                    </div>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Video Darslar
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            64 ta
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-sm bg-[#F5F5F5] w-[420px] h-[168px] rounded-xl'>
                            <div>
                                <h1 className='text-blue-500 font-medium text-lg ml-5 mt-4'>
                                    UX/UI dizayn
                                </h1>
                                <p className='font-medium text-sm ml-5 mt-3'>
                                    Ushbu kursda foydalanuvchi tajribasi va
                                    interfeysi <br />
                                    bo‘yicha bilim va ko‘nikmalarga ega bo‘lasiz
                                </p>
                                <div className='flex  ml-5 mt-4 gap-10'>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Davomilik
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            10 oy
                                        </h2>
                                    </div>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Modullar Soni
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            10 ta
                                        </h2>
                                    </div>
                                    <div>
                                        <p className='font-medium text-xs opacity-70'>
                                            Video Darslar
                                        </p>
                                        <h2 className='font-medium text-base'>
                                            64 ta
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
