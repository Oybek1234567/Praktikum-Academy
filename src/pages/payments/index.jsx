import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Upload } from "antd";
import PaymentsTable from "./table";

const Payments = () => {
    return (
        <div className='bg-white p-6 shadow-md rounded-lg'>
            <h1 className="-translate-y-36 text-[36px] font-bold">Mening to`lovlarim</h1>
            <div className='flex justify-between items-center border-b pb-4 mb-4'>
                <h2 className='text-[#166199] text-2xl font-semibold'>
                    Barcha To`lovlar
                </h2>
                <div className='flex gap-4'>
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
                    <button
                        type='button'
                        className='px-4 py-2 bg-[#f0f0f0] text-gray-700 rounded-md hover:bg-gray-200 transition-all'
                        style={{
                            backgroundColor: "rgba(41, 160, 227, 0.1)",
                            color: "#29a0e3",
                        }}>
                        Filter
                    </button>
                </div>
            </div>
                    <PaymentsTable />
        </div>
    );
};

export default Payments;
