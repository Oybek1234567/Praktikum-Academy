import { Table } from "antd";
import React from "react";
import { Data } from "./data";

const PromocodeTable = () => {
    const columns = [
        {
            title: "#",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Ism familiya",
            dataIndex: "fullName",
            key: "id",
        },
        {
            title: "Telefon raqam",
            dataIndex: "phone",
            key: "id",
            render: (text) => <p className='text-[#29a0e3]'>{text}</p>,
        },
        {
            title: "Kurs",
            dataIndex: "course",
            key: "id",
        },
        {
            title: "To'lov miqdori",
            dataIndex: "payment",
            key: "id",
        },
        {
            title: "Vaqti",
            dataIndex: "time",
            key: "id",
        },
    ];
    return (
        <div>
            <Table
                columns={columns}
                dataSource={Data}
                rowKey={"id"}
                pagination={{ pageSize: 10 }}
            />
        </div>
    );
};

export default PromocodeTable;
