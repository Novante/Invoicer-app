import {Table} from "antd";
import {useEffect, useRef, useState} from "react";
import './Customers.css'
import CustomerModal from "../../components/CustomersModal/CustomerModal";
import {useClickOutsideModal} from "../../utils/hooks";

const Customers = ({customers}) => {

    const [cus, setCus] = useState(null)
    const [renderModal, setRenderModal] = useState(false)
    const modalRef = useRef()

    useEffect(() => {
        if (customers !== null) {
            const cus = customers.map((test, index) => {
                test.key = index
            })
            setCus(customers)
        }
    }, [customers])

    useClickOutsideModal(modalRef, () => setRenderModal(false))



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

    const hideModal = () => {
        setRenderModal(false)
    }


    return (
        <div style={{width: '80%'}}>
            <Table onRow={(record, rowIndex) => {
                return {
                    onClick: (e) => {
                        setRenderModal(true)
                    }
                }
            }
            } bordered="true" expandable="false" columns={columns} dataSource={cus} size={"small"}></Table>
            <div style={{position: "relative", height: '80%', width: '100%'}} ref={modalRef}>
                <CustomerModal show={renderModal} hideModal={hideModal}>

                </CustomerModal>
            </div>

        </div>)
}
export default Customers;
