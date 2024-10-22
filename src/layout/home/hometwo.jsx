import React from 'react';
import { Header } from '../../components/header';
import { Button } from 'antd';


const Kurslar = () => {
    return (
        <>
            <div className='bg-[#1D70B7]'>
                <div className='max-w-[1300px] mx-auto  '>
                    <div className='text-white'>
                        <Header />
                    </div>
                    <div className='flex'>
                        <div className=''>
                            <div>
                                <h1 className='text-6xl text-white'>
                                    0 dan boshlanadigan <br />
                                    <span className='text-green-500 ml-3'>
                                        UX/UI dizayn
                                        <br />
                                    </span>
                                    kurslar
                                </h1>
                                <p className='text-lg mt-5 opacity-70 text-white'>
                                    UX/UI dizayn kursini 0 dan boshlab
                                    amaliyotlarga asoslangan holda, <br /> real
                                    proektlar bilan o‘rganing
                                </p>

                                <Button className='bg-green-400 text-black py-5 px-7 mt-5 rounded-xl font-semibold text-base border-none'>
                                    Kurs haqida
                                </Button>
                            </div>
                            <div className='flex gap-5 '>
                                <div className=''>
                                    <p className='font-medium text-base text-white'>
                                        Davomiyligi
                                    </p>
                                    <h1 className=' font-medium text-3xl text-white'>
                                        10 oy
                                    </h1>
                                </div>
                                <div className=''>
                                    <p className='font-medium text-base text-white'>
                                        Modullar Soni
                                    </p>
                                    <h1 className=' font-medium text-3xl text-white'>
                                        10 ta
                                    </h1>
                                </div>
                                <div>
                                    <p className='font-medium text-base text-white'>
                                        Video darslar
                                    </p>
                                    <h1 className=' font-medium text-3xl text-white'>
                                        60 ta
                                    </h1>
                                </div>
                                <div>
                                    <p className='font-medium text-base text-white'>
                                        Haftada
                                    </p>
                                    <h1 className=' font-medium text-3xl text-white'>
                                        3 kun (2 soatdan)
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className='flex '>
                            <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full px-50'>
                                <h2 className='text-2xl font-bold mb-6'>
                                    Kursga yozilish
                                </h2>
                                <form>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 text-sm font-bold mb-2'>
                                            Ism familiya
                                        </label>
                                        <input
                                            type='text'
                                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                            placeholder='Ism familiya'
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 text-sm font-bold mb-2'>
                                            Telefon raqam
                                        </label>
                                        <input
                                            type='text'
                                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                            placeholder='Telefon raqam'
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 text-sm font-bold mb-2'>
                                            Kursni tanlang
                                        </label>
                                        <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                                            <option>UX/UI dizayn</option>
                                            <option>Web dasturlash</option>
                                            <option>Mobil dasturlash</option>
                                        </select>
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 text-sm font-bold mb-2'>
                                            Xabar
                                        </label>
                                        <textarea
                                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                            placeholder='Xabar'
                                        />
                                    </div>
                                    <div>
                                        <button
                                            type='submit'
                                            className='bg-gray-400 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed'
                                            disabled>
                                            Kurslar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Kurslar;