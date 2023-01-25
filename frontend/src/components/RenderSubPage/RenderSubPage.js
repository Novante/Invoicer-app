import Customers from "../../pages/Customers/Customers";
import {useEffect} from "react";

const RenderSubPage = ({pageId, customers}) => {

    const renderSwitch = () => {
        switch(pageId){
            case '2':
                return (<Customers customers={customers}></Customers>)
            default:
                return null;
        }
    }


        return (
            <>
                {renderSwitch()}
            </>
        )



}
export default RenderSubPage
