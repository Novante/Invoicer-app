import {Table} from "antd";
import {useEffect, useState} from "react";

const Customers = ({customers}) => {

    const [cus, setCus] = useState(null)

    useEffect(() => {
        if (customers !== null){
            const cus = customers.map((test, index) => {
                test.key = index
            })
            setCus(customers)
        }

    }, [customers])

    const columns = [
        {
            title: 'customerNumber',
            dataIndex: 'customerNumber',
            key: 'customerNumber',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Company Name',
            dataIndex: 'name',
            key: 'name',
        }]


    return (<>
        {cus !== null && cus[1].key}
        <Table columns={columns} dataSource={cus}></Table>
    </>)
}
export default Customers;
