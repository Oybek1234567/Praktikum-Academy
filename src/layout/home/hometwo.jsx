import React from "react";
import { Header } from "../../components/header";
import Homepageimg from "../../images/homepage-1.png";
import { Button } from "antd";

const Kurslar = () => {
    return (
        <>
            <div className='max-w-[1300px] mx-auto'>
                <div>
                    <Header />
                </div>

                <div className=' '>
                    <div>
                        <h1 className='text-6xl'>
                            0 dan boshlanadigan <br />
                            <span className='text-blue-500 ml-3'>
                                UX/UI dizayn
                                <br />
                            </span>
                            kurslar
                        </h1>
                        <p className='text-lg mt-5 opacity-70'>
                            UX/UI dizayn kursini 0 dan boshlab amaliyotlarga
                            asoslangan holda, <br /> real proektlar bilan
                            o‘rganing
                        </p>
                        <Button className='bg-black text-white py-5 px-7 mt-5 rounded-xl font-semibold text-base'>
                            Kurs haqida
                        </Button>
                    </div>
                </div>

                <div className=''>
                    <div className=''>
                        <p className='font-medium text-base'>Davomiyligi</p>
                        <h1 className='text-sky-600 font-medium text-5xl'>
                            10 oy
                        </h1>
                    </div>
                    <div className=''>
                        <p className='font-medium text-base'>
                            Modullar Soni
                        </p>
                        <h1 className='text-sky-600 font-medium text-5xl'>
                            10 ta
                        </h1>
                    </div>
                    <div>
                        <p className='font-medium text-base'>Video darslar</p>
                        <h1 className='text-sky-600 font-medium text-5xl'>
                            60 ta
                        </h1>
                    </div>
                    <div>
                        <p className='font-medium text-base'>Haftada</p>
                        <h1 className='text-sky-600 font-medium text-5xl'>
                            3 kun (2 soatdan)
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Kurslar;
