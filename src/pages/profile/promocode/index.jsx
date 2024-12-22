import React from "react";
import Share from "../../../assets/images/share.svg";
import Copy from "../../../assets/images/copy.svg";
import PromocodeTable from "./table";
const Promocode = () => {
    return (
        <div>
            <h1 className='absolute -translate-y-[120px] text-[36px] text-[#374557] font-bold'>
                Profil
            </h1>
            <p className="text-[30px] cursor-pointer" onClick={() => window.history.back()}>←</p>

            <div className='flex gap-[20px] mb-[20px]'>
                <div className='bg-white rounded-[16px] flex items-center gap-[44px] max-w-[252px] py-[12px] px-[32px]'>
                    <div>
                        <small className='text-[16px] text-[#a098ae]'>
                            Promokod
                        </small>
                        <p className='text-[#374557] text-[24px] font-medium'>
                            4RF5S
                        </p>
                    </div>
                    <div className='flex gap-[16px]'>
                        <img
                            src={Share}
                            alt='Share'
                            className='cursor-pointer'
                        />
                        <img src={Copy} alt='Copy' className='cursor-pointer' />
                    </div>
                </div>
                <div className='bg-white rounded-[16px] max-w-[196px] py-[12px] px-[32px]'>
                    <small className='text-[#a098ae] text-[16px]'>
                        Yozilganlar soni
                    </small>
                    <p className='text-[24px] text-[#374557]'>4 ta</p>
                </div>
            </div>
            <PromocodeTable />
        </div>
    );
};

export default Promocode;
