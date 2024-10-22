import React, { useState } from 'react';
import {
    Footer,
    Kursafzalliklari,
    KurslarHeader,
    QilinganIshlar,
    Teachers,
} from '../../components/header';
import { Button } from 'antd';
import Rasm from '../../images/Rectangle24.svg';
import video from '../../images/video.svg';
import Rectangle from '../../images/teacher.svg';
import 'boxicons';

const Kurslar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const totalItems = 6;
    const itemsPerView = 3;

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

    const totalItems2 = 5;
    const itemsPerView2 = 3;
    const handlePrev2 = () => {
        setCurrentIndex2(currentIndex > 0 ? currentIndex - 1 : 0);
    };

    const handleNext2 = () => {
        setCurrentIndex2(
            currentIndex < totalItems2 - itemsPerView2
                ? currentIndex + 1
                : totalItems - itemsPerView
        );
    };
    const data = [
        {
            title: 'Kurslarni tugatib sertifikat beriladimi?',
            content:
                'Lorem ipsum dolor sit amet consectetur. Accumsan habitasse dolor at arcu sit donec. Urna dolor pharetra dolor viverra nec amet id. Morbi accumsan non vel ultricies molestie praesent morbi feugiat integer. Vitae sed convallis et enim consequat euismod.',
        },
        {
            title: 'Kurslarni tugatib sertifikat beriladimi?',
            content:
                'Lorem ipsum dolor sit amet consectetur. Accumsan habitasse dolor at arcu sit donec. Urna dolor pharetra dolor viverra nec amet id. Morbi accumsan non vel ultricies molestie praesent morbi feugiat integer. Vitae sed convallis et enim consequat euismod.',
        },
        {
            title: 'Kurslarni tugatib sertifikat beriladimi?',
            content:
                'Lorem ipsum dolor sit amet consectetur. Accumsan habitasse dolor at arcu sit donec. Urna dolor pharetra dolor viverra nec amet id. Morbi accumsan non vel ultricies molestie praesent morbi feugiat integer. Vitae sed convallis et enim consequat euismod.',
        },
        {
            title: 'Kurslarni tugatib sertifikat beriladimi?',
            content:
                'Lorem ipsum dolor sit amet consectetur. Accumsan habitasse dolor at arcu sit donec. Urna dolor pharetra dolor viverra nec amet id. Morbi accumsan non vel ultricies molestie praesent morbi feugiat integer. Vitae sed convallis et enim consequat euismod.',
        },
        {
            title: 'Kurslarni tugatib sertifikat beriladimi?',
            content:
                'Lorem ipsum dolor sit amet consectetur. Accumsan habitasse dolor at arcu sit donec. Urna dolor pharetra dolor viverra nec amet id. Morbi accumsan non vel ultricies molestie praesent morbi feugiat integer. Vitae sed convallis et enim consequat euismod.',
        },
        {
            title: 'Kurslarni tugatib sertifikat beriladimi?',
            content:
                'Lorem ipsum dolor sit amet consectetur. Accumsan habitasse dolor at arcu sit donec. Urna dolor pharetra dolor viverra nec amet id. Morbi accumsan non vel ultricies molestie praesent morbi feugiat integer. Vitae sed convallis et enim consequat euismod.',
        },
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
            <div className=''>
                <div className='bg-[#1D70B7]'>
                    <div className=' max-w-[1300px] mx-auto  '>
                        <div className='text-white'>
                            <KurslarHeader />
                        </div>
                        <div className='flex justify-between mt-20 pb-[47px]'>
                            <div className=''>
                                <div>
                                    <h1 className='text-6xl text-white'>
                                        0 dan boshlanadigan <br />
                                        <span className='text-green-500 mr-2'>
                                            UX/UI dizayn
                                        </span>
                                        kursi
                                    </h1>
                                    <p className='text-lg mt-5 opacity-70 text-white'>
                                        UX/UI dizayn kursini 0 dan boshlab
                                        amaliyotlarga asoslangan holda, <br />{' '}
                                        real proektlar bilan o‘rganing
                                    </p>

                                    <Button className='bg-green-400 text-black py-5 px-7 mt-7 mb-[81px] rounded-xl font-semibold text-base border-none'>
                                        Kurs haqida
                                    </Button>
                                </div>
                                <div className='flex gap-10 '>
                                    <div className=''>
                                        <p className='font-medium text-base text-[#D2E2F1]'>
                                            Davomiyligi
                                        </p>
                                        <h1 className=' font-medium text-3xl text-white'>
                                            10 oy
                                        </h1>
                                    </div>
                                    <div className=''>
                                        <p className='font-medium text-base text-[#D2E2F1]'>
                                            Modullar Soni
                                        </p>
                                        <h1 className=' font-medium text-3xl text-white'>
                                            10 ta
                                        </h1>
                                    </div>
                                    <div>
                                        <p className='font-medium text-base text-[#D2E2F1]'>
                                            Video darslar
                                        </p>
                                        <h1 className=' font-medium text-3xl text-white'>
                                            60 ta
                                        </h1>
                                    </div>
                                    <div>
                                        <p className='font-medium text-base text-[#D2E2F1]'>
                                            Haftada
                                        </p>
                                        <h1 className=' font-medium text-3xl text-white'>
                                            3 kun (2 soatdan)
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <div className=''>
                                <form className='w-[530px] h-[529px]'>
                                    <div className='bg-white p-8 rounded-[32px] shadow-lg w-full '>
                                        <h2 className='text-2xl font-bold mb-6'>
                                            Kursga yozilish
                                        </h2>
                                        <div className='mb-4'>
                                            <input
                                                type='text'
                                                className='shadow bg-[#F5F5F5] rounded-2xl w-full py-3 px-4 text-gray-700 '
                                                placeholder='Ism familiya'
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <input
                                                type='text'
                                                className='shadow-sm bg-[#F5F5F5] rounded-2xl w-full py-3 px-4 text-gray-700'
                                                placeholder='Telefon raqam'
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <select className='shadow bg-[#F5F5F5] rounded-2xl w-full py-3 px-4 text-gray-700 '>
                                                <option>UX/UI dizayn</option>
                                                <option>Web dasturlash</option>
                                                <option>
                                                    Mobil dasturlash
                                                </option>
                                            </select>
                                        </div>
                                        <div className=' mb-10'>
                                            <input
                                                type='text'
                                                placeholder='Xabar'
                                                className='shadow-sm bg-[#F5F5F5] rounded-2xl w-full py-10 px-3 text-gray-700'
                                            />
                                        </div>
                                        <div>
                                            <button className='bg-[#E3E3E3] text-[#A6A6A6] py-3 w-full opacity-90 rounded-xl font-semibold text-base'>
                                                Kurslar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1300px] mx-auto flex justify-between mt-[120px]'>
                    <div>
                        <div>
                            <h1 className='font-semibold text-3xl '>
                                UX/UI dizayn bu o‘zi qanday soha, <br /> talab
                                bormi
                            </h1>
                            <p className=' font-medium text-base opacity-70 w-[581px] h-[96px] mt-2'>
                                UX/UI dizayn bu xar xil turdagi mobil va
                                planshet ilovalar, veb saytlar va kompyuter
                                ilovalar dizayni bilan shug‘ullanadigan soha. bu
                                sohaga O‘zbekistonda talab yuqori, chunki har
                                bir loyiha boshlashda, UX/UI dizayner loyihani
                                qanday ko‘rinishda bo‘lishini ko‘rsatib beradi.
                            </p>
                            <Button className='bg-[#1D70B7] py-6 px-5 rounded-2xl text-white mt-4'>
                                Kurs haqida
                            </Button>{' '}
                        </div>
                    </div>
                    <div className=''>
                        <img src={Rasm} />
                    </div>
                </div>
                <div className='relative w-full max-w-[1300px] mx-auto mt-[120px]'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold text-3xl'>
                            Kurs afzalliklari
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
                                <Kursafzalliklari />
                            </div>
                            <div className='min-w-[calc(100%/5)] '>
                                <Kursafzalliklari />
                            </div>
                            <div className='min-w-[calc(100%/5)] '>
                                <Kursafzalliklari />
                            </div>
                            <div className='min-w-[calc(100%/5)] '>
                                <Kursafzalliklari />
                            </div>
                            <div className='min-w-[calc(100%/5)] '>
                                <Kursafzalliklari />
                            </div>
                            <div className='min-w-[calc(100%/5)] '>
                                <Kursafzalliklari />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1300px] mx-auto mt-[120px]'>
                    <h1 className='font-semibold text-3xl mb-10'>
                        Kurs haqida
                    </h1>
                    <div
                        className='w-full h-[731px] rounded-[32px] relative flex items-center justify-center'
                        style={{
                            backgroundImage: `url(${video})`,
                        }}>
                        <img
                            src={Rectangle}
                            alt=''
                            className='max-w-full max-h-full'
                        />
                    </div>
                </div>
                <div className='max-w-[1300px] mx-auto mt-[120px] '>
                    <h1 className='font-semibold text-3xl mb-10'>
                        Kurs o'quv dasturi
                    </h1>
                    <div className='flex gap-5 mb-5 '>
                        <div className='w-[640px] h-[254px] bg-[#F5F5F5] py-4 px-6 rounded-2xl'>
                            <h2 className='text-[#1D70B7] mb-3'>1. Figma</h2>
                            <p>--Figma bilan tanishib chiqish</p>
                            <p>--Figmadan ro'yxatdan o'tish</p>
                            <p>--Figma (Hand tool va frame)</p>
                            <p>---Mavzu 2</p>
                            <p>--Mavzu 1</p>
                            <p>--Mavzu 2</p>
                            <p>--Mavzu 1</p>
                        </div>
                        <div className='w-[640px] h-[254px] bg-[#F5F5F5] py-4 px-6 rounded-2xl'>
                            <h2 className='text-[#1D70B7] mb-3'>1. Figma</h2>
                            <p>--Figma bilan tanishib chiqish</p>
                            <p>--Figmadan ro'yxatdan o'tish</p>
                            <p>--Figma (Hand tool va frame)</p>
                            <p>--Mavzu 2</p>
                            <p>--Mavzu 1</p>
                            <p>--Mavzu 2</p>
                            <p>-Mavzu 1</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='w-[640px] h-[254px] bg-[#F5F5F5] py-4 px-6 rounded-2xl'>
                            <h2 className='text-[#1D70B7] mb-3'>1. Figma</h2>
                            <p>--Figma bilan tanishib chiqish</p>
                            <p>--Figmadan ro'yxatdan o'tish</p>
                            <p>--Figma (Hand tool va frame)</p>
                            <p>--Mavzu 2</p>
                            <p>--Mavzu 1</p>
                            <p>--Mavzu 2</p>
                            <p>--Mavzu 1</p>
                        </div>
                        <div className='w-[640px] h-[254px] bg-[#F5F5F5] py-4 px-6 rounded-2xl'>
                            <h2 className='text-[#1D70B7] mb-3'>1. Figma</h2>
                            <p>--Figma bilan tanishib chiqish</p>
                            <p>--Figmadan ro'yxatdan o'tish</p>
                            <p>--Figma (Hand tool va frame)</p>
                            <p>--Mavzu 2</p>
                            <p>--Mavzu 1</p>
                            <p>--Mavzu 2</p>
                            <p>--Mavzu 1</p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1300px] mx-auto mt-[120px]'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold text-3xl'>
                            O‘quvchilar fikri
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
                            <div className='min-w-[calc(100%/6.8)]'>
                                <Teachers />
                            </div>
                            <div className='min-w-[calc(100%/6.8)]'>
                                <Teachers />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1300px] mx-auto mt-[120px]'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold text-3xl'>
                            O'quvchilarimiz qilgan ishlar
                        </h1>

                        {/* Strelkalar */}
                        <div className='flex items-center gap-2'>
                            <button
                                onClick={handlePrev2}
                                className='bg-gray-200 rounded-full p-2'>
                                &#8592; {/* Chap o'q */}
                            </button>
                            <button
                                onClick={handleNext2}
                                className='bg-gray-200 rounded-full p-2'>
                                &#8594; {/* O'ng o'q */}
                            </button>
                        </div>
                    </div>
                    <div className='overflow-hidden mt-6'>
                        <div
                            className='flex transition-transform duration-300'
                            style={{
                                transform: `translateX(-${
                                    currentIndex2 * (100 / 3.5)
                                }%)`,
                                width: `${totalItems * (100 / 3.5)}%`,
                            }}>
                            {/* Har bir kartaga belgilangan kenglik */}
                            <div className='min-w-[calc(100%/3.4)]'>
                                <QilinganIshlar />
                            </div>
                            <div className='min-w-[calc(100%/3.4)]'>
                                <QilinganIshlar />
                            </div>
                            <div className='min-w-[calc(100%/3.4)]'>
                                <QilinganIshlar />
                            </div>
                            <div className='min-w-[calc(100%/3.4)]'>
                                <QilinganIshlar />
                            </div>
                            <div className='min-w-[calc(100%/3.4)]'>
                                <QilinganIshlar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[93px] mb-10 max-w-[1300px] mx-auto  '>
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
                                            ? 'text-blue-600'
                                            : 'text-black'
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
                        <h1 className='w-[442px] h-[212px] font-medium text-5xl pt-[61px] ml-[78px]'>
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
                <div className='bg-[#1D70B7] w-full h-[194px] mt-[120px]'>
                    <div className='flex justify-between max-w-[1300px] mx-auto'>
                        <h1 className='mt-[69px] font-medium text-5xl text-white'>
                            Kursga yozilish uchun
                        </h1>
                        <button className='text-[#00472E] font-semibold text-2xl py-8 px-[229px] bg-[#00FFA3] mt-[50px] rounded-3xl'>
                            Kursga yozilish
                        </button>
                    </div>
                </div>
                <div className='max-w-[1300px] mx-auto'>
                    <Footer/>
                </div>
            </div>
        </>
    );
};

export default Kurslar;
