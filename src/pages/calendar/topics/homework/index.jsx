import { Icons } from "../../../../assets";

const HomeworkPage = () => {
  return (
    <div className="max-w-[843px]">
          <p className="text-[18px] mb-[47px]">
              1.Dribbble.com saytida dizaynlarni kuzatish, yaxshi dizayn va
              yomon dizayn farqlarini o’rganish dizaynlar orasidan o’zingizda
              yoqqan 3ta dizaynni tanlash va izohlab berish.
          </p>
          <div className='flex items-center w-[464px] h-[57px] rounded-[15px] pl-[25px] border-[#DBDBDB] border-[1px]'>
              <Icons.zip className='text-[#166199]' />
              <p className='ml-[21px] text-[#A098AE] text-[14px] mr-[50px]'>
                  uyga vazifa uchun materiallar
              </p>
              <button className='bg-[#166199] text-white pl-[12px] pt-[6px] pb-[5px] pr-[12px] rounded-[10px]'>
                  Yuklab olish
              </button>
          </div>
      </div>
  );
}

export default HomeworkPage
