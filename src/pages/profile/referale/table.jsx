import { Table } from "antd";
import React from "react";
import { Data } from "./data";
import { ignore } from "antd/es/theme/useToken";

const ReferaleTable = () => {
    const columns = [
        {
            title: "#",
            dataIndex: "key",
            key: "id",
        },
        {
            title: "F.I.O",
            dataIndex: "fullName",
            key: "fullName",
        },
        {
            title: "Ro'yhatdan o'tgan vaqti",
            dataIndex: "registerTime",
            key: "registerTime",
        },
        {
            title: "Qaysi kursga",
            dataIndex: "whichCourse",
            key: "whichCourse",
        },
        {
            title: "Holat",
            dataIndex: "action",
            key: "action",
            render: (text) => {
                if (text.includes("O’qishni rad qildi")) {
                    return <p className='text-[#FF5252] font-medium'>{text}</p>;
                } else if (text.includes("O’qishni boshlagan")) {
                    return <p className='text-[#008E76] font-medium'>{text}</p>;
                } else if (text.includes("Guruhga yozildi")) {
                    return <p className='text-[#166199] font-medium'>{text}</p>;
                }
                return <p className='font-medium'>{text}</p>;
            },
        },
        {
            title: "Tasdiqlash vaqti",
            dataIndex: "accessTime",
            key: "accessTime",
        },
        {
            title: "To'lov statusi",
            dataIndex: "paymentStatus",
            key: "paymentStatus",
            render: (text, record) => {
                if (record.action.includes("Guruhga yozildi")) {
                    return (
                        <p
                            className='px-[23px] py-[6px] max-w-[135px] rounded-[5px] text-[#166199] font-medium text-center'
                            style={{
                                backgroundColor: "rgba(22, 97, 153, 0.1)",
                            }}>
                            {text}
                        </p>
                    );
                } else if (text.includes("Rad qilindi")) {
                    return (
                        <p
                            className='px-[23px] py-[6px] max-w-[135px] rounded-[5px] text-[#FF5252] font-medium text-center'
                            style={{
                                backgroundColor: "rgba(255, 82, 82, 0.1)",
                            }}>
                            {text}
                        </p>
                    );
                } else if (text.includes("T")) {
                    return (
                        <p
                            className='px-[23px] py-[6px] max-w-[135px] rounded-[5px] text-[#008E76] font-medium text-center'
                            style={{
                                backgroundColor: "rgba(0, 142, 118, 0.1)",
                            }}>
                            {text}
                        </p>
                    );
                } else {
                    return (
                        <p
                            className='px-[23px] py-[6px] max-w-[135px] rounded-[5px] text-[#232323] font-medium text-center'
                            style={{
                                backgroundColor: "rgba(35, 35, 35, 0.1)",
                            }}>
                            {text}
                        </p>
                    );
                }
            },
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={Data}
                rowKey={(record) => record.id}
            />
        </div>
    );
};

export default ReferaleTable;
