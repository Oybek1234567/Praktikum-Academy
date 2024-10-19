import { Button } from "antd";
import Praktikum from "../images/Praktikum.svg";
import { Link } from "react-router-dom";
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
                        <Button className='font-semibold text-base bg-green-400 p-5 rounded-xl '>
                            Ro`yxatdan o`tish
                        </Button>
                    </Link>
                </div>
            </div>
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
                        Ushbu kursda foydalanuvchi tajribasi va interfeysi{" "}
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