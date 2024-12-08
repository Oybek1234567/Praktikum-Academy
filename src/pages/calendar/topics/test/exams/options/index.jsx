import { Icons } from "../../../../../../assets";
import bgImg from "../../../../../../assets/images/bg-img.jpg";
const Options = () => {
    return (
        <div>
            <div className='flex'>
                <div className='max-w-[1492px] w-[92%] h-[20px] rounded-[12px] bg-[#D2EAFC]'>
                    <div className='w-[327px] h-[20px] bg-[#166199] rounded-[12px]'></div>
                </div>
                <p className='ml-[24px]'>24% tugatildi</p>
            </div>
            <p className='mt-[67px] text-center text-[26px] font-bold mb-[50px]'>
                Lorem Ipsum is simply dummy text of the printing ?
            </p>
            <div className='flex'>
                <div
                    className='w-[650px] h-[400px] bg-white'
                    style={{
                        boxShadow: "4px 5px 20px rgba(96, 96, 96, 0.11)",
                    }}>
                    <img
                        src={bgImg}
                        alt='bg-img'
                        className='ml-[158px] mt-[60px]'
                    />
                </div>
                <ul className='ml-[60px] mt-[74px]'>
                    <li
                        className='flex items-center w-[400px] h-[48px] bg-white mb-[20px] pl-[18px] rounded-[11px]'
                        style={{ boxShadow: "rgba(0, 0, 0, 0.39)" }}>
                        Lorem Ipsum is simply dummy text{" "}
                        <Icons.circle className='ml-auto mr-[12px]' />
                    </li>
                    <li
                        className='flex items-center w-[400px] h-[48px] bg-white mb-[20px] pl-[18px] rounded-[11px]'
                        style={{ boxShadow: "rgba(0, 0, 0, 0.39)" }}>
                        Lorem Ipsum is simply dummy text{" "}
                        <Icons.circle className='ml-auto mr-[12px]' />
                    </li>{" "}
                    <li
                        className='flex items-center w-[400px] h-[48px] bg-[#166199] text-white mb-[20px] pl-[18px] rounded-[11px]'
                        style={{ boxShadow: "rgba(0, 0, 0, 0.39)" }}>
                        Lorem Ipsum is simply dummy text{" "}
                        <Icons.outlinedCheck className='ml-auto mr-[12px]' />
                    </li>{" "}
                    <li
                        className='flex items-center w-[400px] h-[48px] bg-white  pl-[18px] rounded-[11px]'
                        style={{ boxShadow: "rgba(0, 0, 0, 0.39)" }}>
                        Lorem Ipsum is simply dummy text{" "}
                        <Icons.circle className='ml-auto mr-[12px]' />
                    </li>
                </ul>
            </div>
            <div
                className='flex items-center text-center max-w-[290px] pt-[49px] pb-[48px] pl-[28px] mt-[182px] bg-white ml-[30%] rounded-full'
                style={{
                    boxShadow: "4px 5px 20px rgba(96, 96, 96, 0.11)",
                }}>
                <div
                    className='w-[70px] h-[70px] rounded-full'
                    style={{
                        border: "7px solid #ffa900",
                        borderTop: "7px solid white",
                    }}>
                    <div>
                        <p className='text-[18px] font-bold mt-[16px] ml-[4px]'>
                            8:35
                        </p>
                    </div>
                    <button className='w-[120px] h-[56px] bg-[#166199] translate-x-10 -translate-y-10 text-white text-[18px] ml-[50px] rounded-[56px]'>
                        Keyingisi
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Options;
