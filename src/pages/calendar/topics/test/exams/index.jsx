import { Icons } from "../../../../../assets";
import happyImg from "../../../../../assets/images/happy.jpg";
import colorImg from "../../../../../assets/images/color.png";
import { Link } from "react-router-dom";
const Exams = () => {
    return (
        <div className='flex gap-20'>
            <div>
                <div className=' bg-white max-w-[710px] h-[114px] rounded-[20px] pr-[40px]'>
                    <div className='flex items-center flex-wrap'>
                        <img
                            src={happyImg}
                            alt='happy-face'
                            className='ml-[40px] mr-[40px] mt-[27px]'
                        />
                        <b className='text-[32px] mr-[24px] text-[#374557]'>
                            1-Modul
                        </b>
                        <span className='text-[18px] text-[#374557] mr-[271px]'>
                            15-savol
                        </span>
                        <Icons.checked className='mt-[30px]' />
                    </div>
                    <p className='ml-[140px] text-[#A098AE] -translate-y-5 text-[14px]'>
                        Lorem Ipsum is simply dummy text
                    </p>
                </div>
                <div className='mt-[40px] bg-white max-w-[710px] h-[114px] rounded-[20px]'>
                    <div className='flex items-center flex-wrap'>
                        <img
                            src={colorImg}
                            alt='happy-face'
                            className='ml-[40px] mr-[40px] mt-[27px]'
                        />
                        <b className='text-[32px] mr-[24px] text-[#374557]'>
                            2-Modul
                        </b>
                        <span className='text-[18px] text-[#374557] mr-[131px]'>
                            15-savol
                        </span>
                        <Link to={'/options'}>
                        <button className='w-[178px] h-[50px] bg-[#166199] rounded-[15px] text-white text-[18px] mt-[32px]'>
                            Testni boshlash
                        </button>
                        </Link>
                    </div>
                    <p className='ml-[140px] text-[#A098AE] -translate-y-5 text-[14px]'>
                        Lorem Ipsum is simply dummy text
                    </p>
                </div>
                <div
                    className='mt-[40px] bg-white max-w-[710px] h-[114px] rounded-[20px]'
                    style={{ background: "rgba(159, 159, 159, 0.1)" }}>
                    <div className='flex items-center flex-wrap'>
                        <img
                            src={colorImg}
                            alt='happy-face'
                            style={{ filter: "grayscale(100%)" }}
                            className='ml-[40px] mr-[40px] mt-[27px]'
                        />
                        <b className='text-[32px] mr-[24px] text-[#374557]'>
                            3-Modul
                        </b>
                        <span className='text-[18px] text-[#374557] mr-[281px]'>
                            15-savol
                        </span>
                        <Icons.darkLock className='text-white mt-[40px] ' />
                    </div>
                    <p className='ml-[140px] text-[#A098AE] -translate-y-5 text-[14px]'>
                        Lorem Ipsum is simply dummy text
                    </p>
                </div>
                <div
                    className='mt-[40px] bg-white max-w-[710px] h-[114px] rounded-[20px]'
                    style={{ background: "rgba(159, 159, 159, 0.1)" }}>
                    <div className='flex items-center flex-wrap'>
                        <img
                            src={colorImg}
                            alt='happy-face'
                            style={{ filter: "grayscale(100%)" }}
                            className='ml-[40px] mr-[40px] mt-[27px]'
                        />
                        <b className='text-[32px] mr-[24px] text-[#374557]'>
                            4-Modul
                        </b>
                        <span className='text-[18px] text-[#374557] mr-[281px]'>
                            15-savol
                        </span>
                        <Icons.darkLock className='text-white mt-[40px] ' />
                    </div>
                    <p className='ml-[140px] text-[#A098AE] -translate-y-5 text-[14px]'>
                        Lorem Ipsum is simply dummy text
                    </p>
                </div>
                <div
                    className='mt-[40px] bg-white max-w-[710px] h-[114px] rounded-[20px]'
                    style={{ background: "rgba(159, 159, 159, 0.1)" }}>
                    <div className='flex items-center flex-wrap'>
                        <img
                            src={colorImg}
                            alt='happy-face'
                            style={{ filter: "grayscale(100%)" }}
                            className='ml-[40px] mr-[40px] mt-[27px]'
                        />
                        <b className='text-[32px] mr-[24px] text-[#374557]'>
                            5-Modul
                        </b>
                        <span className='text-[18px] text-[#374557] mr-[281px]'>
                            15-savol
                        </span>
                        <Icons.darkLock className='text-white mt-[40px] ' />
                    </div>
                    <p className='ml-[140px] text-[#A098AE] -translate-y-5 text-[14px]'>
                        Lorem Ipsum is simply dummy text
                    </p>
                </div>
            </div>
            <div
                className='bg-white w-[330px] h-[202px] pl-[41px] pt-[30px] rounded-[20px]'
                style={{ boxShadow: "5px 5px 15px rgba(120, 120, 120, 0.1)" }}>
                <div className="flex">
                    <p className='mt-[10px] text-[40px] font-bold text-[#909090]'>
                        2
                        <Icons.checked
                            className='absolute -translate-y-7 translate-x-2'
                            style={{ filter: "grayscale(100%)" }}
                        />
                    </p>
                    <p className='mt-[17px] ml-[30px] font-bold'>
                        Lorem Ipsum
                        <div className='w-[154px] h-[10px] bg-[#D9D9D9] rounded-[5px] mt-[6px]'>
                            <span className='absolute w-[52px] h-[10px] bg-[#166199] rounded-[5px]'></span>
                        </div>
                    </p>
                    <span className='mt-[38px] ml-[10px] font-semibold text-[14px]'>2/15</span>
                </div>
                <button className="bg-[#166199] text-white pl-[30px] pt-[13px] pb-[13px] pr-[30px] rounded-[10px] mt-[20px] ml-[40px] text-[18px]">Davom ettirish</button>
            </div>
        </div>
    );
};

export default Exams;
