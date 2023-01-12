import './SideMenu.css'

import {useState} from "react";
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined, MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined
} from "@ant-design/icons";
import {Button, Menu} from "antd";
import {useNavigate} from "react-router-dom";

const SideMenu = (props) => {

    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const items = [
        getItem('Kunder', '1', <PieChartOutlined/>),
        getItem('Option 2', '2', <DesktopOutlined/>),
        getItem('Option 3', '3', <ContainerOutlined/>),
        getItem('Navigation One', 'sub1', <MailOutlined/>, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
            getItem('Option 7', '7'),
            getItem('Option 8', '8'),
        ]),
        getItem('Navigation Two', 'sub2', <AppstoreOutlined/>, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
            getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
        ]),
    ];


    return (
        <div className="wrapper">
            <div className="homepageMenu"
            >

                <Menu
                    style={{height: '100vh'}}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                    onClick={(e) => props.setPageToRender(e.key)}
                />
                <Button
                    type="primary"
                    onClick={toggleCollapsed}
                    style={{
                        marginBottom: 16,
                    }}
                >
                    {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </Button>
            </div>
        </div>
    )
}

export default SideMenu


