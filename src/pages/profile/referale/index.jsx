import React from "react";import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Upload, Card } from "antd";
import ReferaleTable from "./table";

const Referale = () => {
    return (
        <div>
            <h1 className='absolute -translate-y-[120px] text-[36px] font-bold'>
                Mening to'lovlarim
            </h1>
            <Card className='py-[26px] px-[30px]'>
                <div className="flex">
                    <p className='text-[20px] text-[#166199] font-medium'>
                        Mening referallarim
                    </p>
                    <div className='absolute right-0 mr-[46px] flex gap-4'>
                        <Upload>
                            <button className='flex items-center gap-2 px-4 py-2 bb-white text-[#166199] rounded-md transition-all'>
                                Export Excel
                                <DownloadOutlined />
                            </button>
                        </Upload>
                        <Input
                            type='search'
                            addonAfter={<SearchOutlined />}
                            placeholder='Izlash'
                            className='w-[300px] rounded-md border border-gray-300 '
                        />
                    </div>
                </div>
            </Card>
            <ReferaleTable />
        </div>
    );
};

export default Referale;
