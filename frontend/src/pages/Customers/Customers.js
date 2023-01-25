import {Table} from "antd";
import {useEffect, useState} from "react";
import './Customers.css'

const Customers = ({customers}) => {

    const [cus, setCus] = useState(null)

    useEffect(() => {
        if (customers !== null) {
            const cus = customers.map((test, index) => {
                test.key = index
            })
            setCus(customers)
        }

    }, [customers])

    const columns = [
        {
            title: () => { // title är resultatet av funktionen som utförs
                return <div>Kundnummer</div>
            },
            dataIndex: 'customerNumber',
            key: 'customerNumber',
            render: (text) => <a>{text}</a>,
            width: '8%'
        },
        {
            title: 'Namn',
            dataIndex: 'name',
            key: 'name',
            width: '25%'
        },
        {
            title: 'Referens',
            dataIndex: 'reference',
            key: 'reference',
            width: '20%'
        },
        {
            title: 'Telefonnummer',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            width: '15%'
        },
        {
            title: 'Fordran',
            dataIndex: 'claim',
            key: 'claim'
        },
        {
            title: 'Kreditgräns',
            dataIndex: 'creditLimit',
            key: 'creditLimit'
        }]


    return (
        <div style={{width: '80%'}}>
            <Table onRow={(record, rowIndex) => {
                return {
                    onClick: (e) => {
                        console.log(record)
                    }
                }
            }
            } bordered="true" expandable="false" columns={columns} dataSource={cus} size={"small"}></Table>
        </div>)
}
export default Customers;
