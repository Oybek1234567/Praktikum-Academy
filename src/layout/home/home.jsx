import React, { useState } from "react";
import { Header } from "../../components/header";
import Homepageimg from "../../images/homepage-1.png";
import { Button } from "antd";
import { Kurslar } from "../../components/header";
import { Nimauchun } from "../../components/header";
import Rectangle from "../../images/Rectangle.svg";
import { Link } from "react-router-dom";
import { Teachers } from "../../components/header";
import { Mentorlar } from "../../components/header";
import Imgsd from "../../images/123.svg";
import { Footer } from "../../components/header";
import "boxicons";

const LandingPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = 6;
    const itemsPerView = 3;
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handlePrev = () => {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0);
    };

    const handleNext = () => {
        setCurrentIndex(
            currentIndex < totalItems - itemsPerView
                ? currentIndex + 1
                : totalItems - itemsPerView
        );
    };

    const data = [
        {
            title: "Kurslarni tugatib sertifikat beriladimi?",
            content:
                "Lorem ipsum dolor sit amet consectetur. Accumsan habitasse dolor at arcu sit donec. Urna dolor pharetra dolor viverra nec amet id. Morbi accumsan non vel ultricies molestie praesent morbi feugiat integer. Vitae sed convallis et enim consequat euismod.",
        },
        {
            title: "Kurslarni tugatib sertifikat beriladimi?",
            content:
                "Lorem ipsum dolor sit amet consectetur. Accumsan habitasse dolor at arcu sit donec. Urna dolor pharetra dolor viverra nec amet id. Morbi accumsan non vel ultricies molestie praesent morbi feugiat integer. Vitae sed convallis et enim consequat euismod.",
        },
        {
            title: "Kurslarni tugatib sertifikat beriladimi?",
            content:
                "Lorem ipsum dolor sit amet consectetur. Accumsan habitasse dolor at arcu sit donec. Urna dolor pharetra dolor viverra nec amet id. Morbi accumsan non vel ultricies molestie praesent morbi feugiat integer. Vitae sed convallis et enim consequat euismod.",
        },
        {
            title: "Kurslarni tugatib sertifikat beriladimi?",
            content:
                "Lorem ipsum dolor sit amet consectetur. Accumsan habitasse dolor at arcu sit donec. Urna dolor pharetra dolor viverra nec amet id. Morbi accumsan non vel ultricies molestie praesent morbi feugiat integer. Vitae sed convallis et enim consequat euismod.",
        },
        {
            title: "Kurslarni tugatib sertifikat beriladimi?",
            content:
                "Lorem ipsum dolor sit amet consectetur. Accumsan habitasse dolor at arcu sit donec. Urna dolor pharetra dolor viverra nec amet id. Morbi accumsan non vel ultricies molestie praesent morbi feugiat integer. Vitae sed convallis et enim consequat euismod.",
        },
        {
            title: "Kurslarni tugatib sertifikat beriladimi?",
            content:
                "Lorem ipsum dolor sit amet consectetur. Accumsan habitasse dolor at arcu sit donec. Urna dolor pharetra dolor viverra nec amet id. Morbi accumsan non vel ultricies molestie praesent morbi feugiat integer. Vitae sed convallis et enim consequat euismod.",
        },
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const [currentIndex2, setCurrentIndex2] = useState(0);
    const totalItems2 = 6; // Umumiy elementlar soni

    // Tugma yordamida oldinga va orqaga o'tish funksiyalari
    const handlePrev2 = () => {
        setCurrentIndex2((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext2 = () => {
        setCurrentIndex2((prev) => (prev < totalItems - 1 ? prev + 1 : prev));
    };

    // Swiping funksiyalari
    let startX = 0;

    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX; // Boshlanish nuqtasini belgilash
    };

    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX; // Tugash nuqtasini belgilash
        if (startX > endX + 50) {
            handleNext2(); // O'ngga siljitish
        } else if (startX < endX - 50) {
            handlePrev2(); // Chapga siljitish
        }
    };
    return (
        <>
            <div className='sm:px-6 lg:px-8'>
                <div className=''>
                    <Header />
                </div>

                <div className='flex flex-col md:flex-row mt-[120px] justify-between max-w-[1300px] mx-auto'>
                    <div className=' md:text-left mb-8 md:mb-0'>
                        <h1 className='text-2xl md:text-6xl'>
                            Maqsadlaringiz <br /> uchun
                            <span className='text-blue-500 ml-0 md:ml-3'>
                                mukammal <br /> kurslar
                            </span>
                        </h1>
                        <p className='text-base md:text-lg mt-3 md:mt-5 opacity-70'>
                            Kurslarimiz maqsadlaringizni amalga oshirishga
                            yordam beradi. <br /> Har bir dars mukammal va
                            amaliy tajribalar bilan boyitilgan.
                        </p>
                        <div className='mt-5 flex gap-4'>
                            <Button className='bg-black text-white py-4 px-6 rounded-xl font-semibold text-base'>
                                Kurslar
                            </Button>
                            <Button className='bg-gray text-black py-4 px-6 rounded-xl font-semibold text-base'>
                                Bog'lanish
                            </Button>
                        </div>
                    </div>
                    <div className='mt-8 md:mt-0'>
                        <img
                            src={Homepageimg}
                            alt='img'
                            className='mx-auto md:mx-0'
                        />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row mt-14 justify-around max-w-[1300px] mx-auto'>
                    {/* O'quvchilar soni */}
                    <div className='text-center mb-4 md:mb-0'>
                        <h1 className='text-sky-600 font-medium text-5xl'>
                            1200+
                        </h1>
                        <p className='font-medium text-base'>
                            O'quvchilar soni
                        </p>
                    </div>
                    <hr className='h-[1px] bg-gray-300 w-full md:h-[61px] md:w-[1px] md:mt-0 md:mx-4' />

                    {/* Ishga joylashgan o'quvchilar */}
                    <div className='text-center mb-4 md:mb-0'>
                        <h1 className='text-sky-600 font-medium text-5xl'>
                            1200+
                        </h1>
                        <p className='font-medium text-base'>
                            Ishga joylashgan o'quvchilar
                        </p>
                    </div>
                    <hr className='h-[1px] bg-gray-300 w-full md:h-[61px] md:w-[1px] md:mt-0 md:mx-4' />

                    {/* Mentorlar */}
                    <div className='text-center'>
                        <h1 className='text-sky-600 font-medium text-5xl'>
                            20+
                        </h1>
                        <p className='font-medium text-base'>Mentorlar</p>
                    </div>
                </div>

                <div className='mb-20 max-w-[1300px] mx-auto'>
                    <div className='text-3xl font-semibold mt-20 text-center md:text-left'>
                        Kurslar
                    </div>

                    <div className='flex flex-col md:flex-row justify-between mt-10'>
                        <div className='mb-4 md:mb-0 w-full md:max-w-[30%]'>
                            <Kurslar />
                        </div>
                        <div className='mb-4 md:mb-0 w-full md:max-w-[30%]'>
                            <Kurslar />
                        </div>
                        <div className='mb-4 md:mb-0 w-full md:max-w-[30%]'>
                            <Kurslar />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between mt-5'>
                        <div className='mb-4 md:mb-0 w-full md:max-w-[30%]'>
                            <Kurslar />
                        </div>
                        <div className='mb-4 md:mb-0 w-full md:max-w-[30%]'>
                            <Kurslar />
                        </div>
                        <div className='mb-4 md:mb-0 w-full md:max-w-[30%]'>
                            <Kurslar />
                        </div>
                    </div>
                </div>

                <div className='relative w-full max-w-[1300px] mx-auto'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold text-3xl'>
                            Nima uchun biz
                        </h1>

                        {/* Strelkalar */}
                        <div className='flex items-center gap-2'>
                            <button
                                onClick={handlePrev}
                                className='bg-gray-200 rounded-full p-2'>
                                &#8592; {/* Chap o'q */}
                            </button>
                            <button
                                onClick={handleNext}
                                className='bg-gray-200 rounded-full p-2'>
                                &#8594; {/* O'ng o'q */}
                            </button>
                        </div>
                    </div>

                    {/* Kartalar konteyneri */}
                    <div className='overflow-hidden mt-6'>
                        <div
                            className='flex transition-transform duration-300'
                            style={{
                                transform: `translateX(-${
                                    currentIndex * (100 / 3.5)
                                }%)`,
                                width: `${totalItems * (100 / 3.5)}%`,
                            }}>
                            {/* Har bir kartaga belgilangan kenglik */}
                            <div className='min-w-[calc(100%/5)]'>
                                <Nimauchun />
                            </div>
                            <div className='min-w-[calc(100%/5)] '>
                                <Nimauchun />
                            </div>
                            <div className='min-w-[calc(100%/5)] '>
                                <Nimauchun />
                            </div>
                            <div className='min-w-[calc(100%/5)] '>
                                <Nimauchun />
                            </div>
                            <div className='min-w-[calc(100%/5)] '>
                                <Nimauchun />
                            </div>
                            <div className='min-w-[calc(100%/5)] '>
                                <Nimauchun />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row w-full rounded-[32px] mt-[120px] bg-[#1D70B7] justify-between max-w-[1300px] mx-auto h-[360px] md:h-full'>
                    <div className='flex flex-col justify-center pt-[20px] md:pt-[57px] pl-[16px] md:pl-[64px]'>
                        <h1 className='font-medium text-5xl text-white mb-8'>
                            Hayotingizni o‘z qiziqishlaringiz bilan
                            rivojlantiring
                        </h1>
                        <div className='flex flex-row md:flex-row mb-5'>
                            <Link to={"/signin"}>
                                <Button className='font-semibold text-base bg-green-400 p-5 rounded-xl border-none mr-3 mb-2 md:mb-0'>
                                    Ro`yxatdan o`tish
                                </Button>
                            </Link>
                            <Button className='border-none bg-inherit font-semibold text-base p-5'>
                                Bog'lanish
                            </Button>
                        </div>
                    </div>
                    <div className='flex-grow '>
                        <img
                            src={Rectangle}
                            alt='img'
                            className='w-full h-full object-cover rounded-[32px]'
                        />
                    </div>
                </div>

                <div className='w-full mt-[120px] max-w-[1300px] mx-auto'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold text-3xl'>
                            O‘quvchilar fikri
                        </h1>

                        <div className='flex items-center gap-2'>
                            <Button
                                onClick={handlePrev}
                                className='bg-gray-200 rounded-full p-2'>
                                &#8592;
                            </Button>
                            <Button
                                onClick={handleNext}
                                className='bg-gray-200 rounded-full p-2'>
                                &#8594;
                            </Button>
                        </div>
                    </div>

                    <div className='overflow-hidden mt-6'>
                        <div
                            className='flex transition-transform duration-300'
                            style={{
                                transform: `translateX(-${
                                    currentIndex * (100 / 3.5)
                                }%)`,
                                width: `${totalItems * (100 / 3.5)}%`,
                            }}>
                            <div className='min-w-[calc(100%/6.8)]'>
                                <Teachers />
                            </div>
                            <div className='min-w-[calc(100%/6.8)]'>
                                <Teachers />
                            </div>
                            <div className='min-w-[calc(100%/6.8)]'>
                                <Teachers />
                            </div>
                            <div className='min-w-[calc(100%/6.8)]'>
                                <Teachers />
                            </div>
                            <div className='min-w-[calc(100%/6.8)]'>
                                <Teachers />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-[120px] max-w-[1300px] mx-auto'>
                    <h1 className='font-semibold text-3xl'>Mentorlar</h1>
                    <div className='flex gap-5 mt-10'>
                        <Mentorlar />
                        <Mentorlar />
                        <Mentorlar />
                        <Mentorlar />
                    </div>
                    <div className='flex gap-5 mt-5'>
                        <Mentorlar />
                        <Mentorlar />
                        <Mentorlar />
                        <Mentorlar />
                    </div>
                </div>

                <div className='bg-[#00FFA3] mt-[120px] w-full h-[425px] rounded-xl  '>
                    <div className='flex justify-between max-w-[1300px] mx-auto'>
                        <div className='w-[640px] h-[210px] text-[#1D70B7] font-medium text-6xl mt-[107px]'>
                            O‘zingizga kerakli savollarga javob <br />
                            topa olmadingizmi?
                        </div>
                        <div className='mt-[112px]'>
                            <p className='w-[330px] h-[81px] font-medium text-lg'>
                                Ochiq qolgan savollaring bo‘lsa biz <br /> bilan
                                bog‘laning. Sizda ochiq <br /> qolgan savollarga
                                javob beramiz
                            </p>
                            <Link to={"/signin"}>
                                <Button className='font-semibold text-base bg-[#1F1F1F] p-6 mt-[42px] rounded-2xl border-none mr-3 text-white'>
                                    Ro`yxatdan o`tish
                                </Button>
                            </Link>
                        </div>
                        <div className='mt-[78px]'>
                            <img src={Imgsd} alt='img' />
                        </div>
                    </div>
                </div>

                <div className='mt-[93px] mb-10 max-w-[1300px] mx-auto'>
                    <h1 className='font-semibold text-3xl '>
                        Tez-tez so'raladigan savollar
                    </h1>
                    <div className='mt-10'>
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className=' bg-[#F5F5F5] w-full  rounded-lg p-4 mb-2 transition-all duration-300'>
                                <div
                                    className={`flex justify-between cursor-pointer ${
                                        expandedIndex === index
                                            ? "text-blue-600"
                                            : "text-black"
                                    }`}
                                    onClick={() => toggleExpand(index)}>
                                    <h2 className='font-bold'>{item.title}</h2>
                                    <span>
                                        {expandedIndex === index ? (
                                            <box-icon name='minus'></box-icon>
                                        ) : (
                                            <box-icon name='plus'></box-icon>
                                        )}
                                    </span>
                                </div>
                                {expandedIndex === index && (
                                    <div className='mt-2'>
                                        <p>{item.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='h-[330px] bg-[#F5F5F5] rounded-[32px] mt-[120px] max-w-[1300px] mx-auto'>
                    <div className='flex justify-between'>
                        <h1 className='w-[442px] h-[212px] font-medium text-5xl pt-[61px] ml-[78px] '>
                            Ma’lumotlaringizni qoldiring, o‘zimiz siz bilan
                            bog‘lanamiz
                        </h1>
                        <div>
                            <div className='flex mr-[64px] mt-[69px]'>
                                <input
                                    type='text'
                                    className='w-[323px] h-[48px] rounded-2xl mr-5 p-4'
                                    placeholder='Ism familiya'
                                />
                                <input
                                    type='text'
                                    className='w-[323px] h-[48px] rounded-2xl p-4'
                                    placeholder='+998'
                                />
                            </div>
                            <div className='mt-5'>
                                <input
                                    type='text'
                                    className='w-[666px] h-[59px] rounded-2xl p-4'
                                    placeholder='Xabar'
                                />
                            </div>
                            <div className='mt-5'>
                                <Button className='bg-[#E3E3E3] w-[666px] h-[59px] rounded-2xl font-semibold text-base text-[#A6A6A6]'>
                                    Kurslar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-[120px] max-w-[1300px] mx-auto'>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default LandingPage;
