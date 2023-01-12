import {Button, Layout, Menu} from "antd";
import './Homepage.css'

import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import {useEffect, useState} from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import RenderSubPage from "../../components/RenderSubPage/RenderSubPage";

const Homepage = (props) => {

    const [pageToRender, setPageToRender] = useState(0);


    return (
        <div style={{display: 'flex', marginTop: '80px'}}>
            <SideMenu setPageToRender={setPageToRender}></SideMenu>
            <RenderSubPage customers={props.customers} pageId={pageToRender}></RenderSubPage>
        </div>
    )

}
export default Homepage;
