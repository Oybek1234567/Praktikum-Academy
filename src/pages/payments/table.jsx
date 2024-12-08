import { Table, Button } from "antd";
import { Data } from "./data"; 
import { Link } from "react-router-dom";

const PaymentsTable = () => {
    const columns = [
        {
            title: "#",
            dataIndex: "id",
            key: "id", 
        },
        {
            title: "Guruh nomi",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Guruh",
            dataIndex: "group",
            key: "group",
        },
        {
            title: "Jami to'lov",
            dataIndex: "payment",
            key: "payment",
            render: (payment) => `${payment} UZS`,
        },
        {
            title: "Qarzdorlik",
            dataIndex: "debt",
            key: "debt",
            render: (debt) => `${debt} UZS`, 
        },
        {
            title: "Guruh holati",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <span style={{ color: "green" }}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
            ),
        },
        {
            title: "To'lov vaqti",
            dataIndex: "time",
            key: "time",
        },
        {
            title: "Amal",
            dataIndex: "action",
            key: "action",
            render: (a, record) => (
                <Link to={"/payments/all"}>
                <Button
                    type='link'
                    style={{
                        color: "green",
                        backgroundColor: "rgba(0, 142, 118, 0.1)",
                    }}
                    onClick={() => console.log("Edit:", record.id)}>
                    {a}
                </Button>
                </Link>
            ),
        },
    ];

    return (
        <div style={{ padding: "16px" }}>
            <Table
                columns={columns}
                dataSource={Data}
                rowKey='id' 
                bordered
                pagination={{ pageSize: 10 }}
            />
            
        </div>
    );
};

export default PaymentsTable;
