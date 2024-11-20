import { Icons } from "../../../../assets";
import { PiVideoLight } from "react-icons/pi";

const FilesPage = () => {
    return (
        <div>
            <div className='flex gap-[16px]'>
                <h1 className='text-[24px]'>
                    Mavzuga doir kerakli fayllarni yuklab olish
                </h1>
                <button className='flex justify-center items-center gap-[24px] bg-[#FEC64F] text-white pl-[10px] pr-[10px] text-[18px] rounded-lg'>
                    3 ta fayl <Icons.download />
                </button>
            </div>
            <div className='flex gap-[47px] flex-wrap mt-[36px]'>
                <div className='flex items-center w-[464px] h-[57px] rounded-[15px] pl-[25px] border-[#DBDBDB] border-[1px]'>
                    <PiVideoLight className='w-[24px] h-[22px] text-[#166199]' />
                    <p className='ml-[21px] text-[#A098AE] text-[18px] mr-[142px]'>
                        Kirish, Video
                    </p>
                    <button className='bg-[#166199] text-white pl-[12px] pt-[6px] pb-[5px] pr-[12px] rounded-[10px]'>
                        Yuklab olish
                    </button>
                </div>
                <div className='flex items-center w-[464px] h-[57px] rounded-[15px] pl-[25px] border-[#DBDBDB] border-[1px]'>
                    <Icons.pdf className='w-[24px] h-[22px] text-[#166199]' />
                    <p className='ml-[21px] text-[#A098AE] text-[18px] mr-[72px]'>
                        Kirish, Prezdentatsiya
                    </p>
                    <button className='bg-[#166199] text-white pl-[12px] pt-[6px] pb-[5px] pr-[12px] rounded-[10px]'>
                        Yuklab olish
                    </button>
                </div>
                <div className='flex items-center w-[464px] h-[57px] rounded-[15px] pl-[25px] border-[#DBDBDB] border-[1px]'>
                    <Icons.zip className='text-[#166199]' />
                    <p className='ml-[21px] text-[#A098AE] text-[14px] mr-[12px]'>
                        Kirish qo’llanilgan materiallar
                    </p>
                    <button className='bg-[#166199] text-white pl-[12px] pt-[6px] pb-[5px] pr-[12px] rounded-[10px]'>
                        Yuklab olish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilesPage;
