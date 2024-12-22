import { Table } from "antd";
import { Data } from "./data";

const PaymentsAllTable = () => {
    const columns = [
        {
            title: "#",
            dataIndex: "key",
            key: "id",
        },
        {
            title: "O`quvchi ID raqami",
            dataIndex: "number",
            key: "number",
        },
        {
            title: "F.I.SH",
            dataIndex: "name",
        },
        {
            title: "O`quv kursi",
            dataIndex: "course",
        },
        {
            title: "To`lov summasi",
            dataIndex: "payment",
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text) => {
                if (text.length === 11) {
                    return (
                        <p className='text-[#166199] font-semibold'>{text}</p>
                    );
                } else if (text.includes("To’langan")) {
                    return (
                        <p className='text-[#008E76] font-semibold'>{text}</p>
                    );
                } else {
                    return (
                        <p className='text-[#FF5252] font-semibold '>{text}</p>
                    );
                }
            },
        },
        {
            title: "To`lov vaqti",
            dataIndex: "time",
            render: (text) => {
                return <p className='text-center'>{text}</p>;
            },
        },
        {
            title: "Amal",
            dataIndex: "action",
            render: (text, record) => { 
                let colorClass = "";
                if (record.status.includes("To’langan")) {
                    colorClass = "text-[#008E76] font-semibold";
                } else if (
                    record.status.includes("Qarzdorlik")
                ) {
                    colorClass = "text-[#FF5252] font-semibold";
                } else {
                    colorClass = "text-[#166199] font-semibold";
                }
                return <a className={colorClass}>{text}</a>;
            },
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={Data} rowKey='id' bordered />
        </div>
    );
};

export default PaymentsAllTable;
