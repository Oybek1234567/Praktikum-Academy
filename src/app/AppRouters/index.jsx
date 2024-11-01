import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Link, Route, Routes } from "react-router-dom";
import { menu } from "../../constants/menu";
import { Router } from "../../constants/router";
import SMSIcon from "../../images/sms-icon.svg";
import SettingsIcon from "../../images/setting-icon.svg";
import NatificationIcon from "../../images/natification-icon.svg";
import ProfileIcon from "../../images/profile.svg";

const AppRouters = () => {
    return (
        <div>
            <Layout style={{ width: "100%", height: "100vh" }}>
                <Sider
                    trigger={null}
                    width={"20%"}
                    style={{ backgroundColor: "#FFFFFF" }}>
                    <div className='demo-logo-vertical' />
                    <Link to={"/"}></Link>
                    <Menu
                        mode='inline'
                        defaultSelectedKeys={["1"]}
                        items={menu.map(({ id, title, path, icon }) => ({
                            key: id,
                            label: (
                                <Link to={path} className=' '>
                                    {title}
                                </Link>
                            ),
                            icon: icon,
                        }))}
                        style={{
                            backgroundColor: "inherit",
                            fontSize: "18px",
                            letterSpacing: "2px",
                            width: "95%",
                            marginLeft: "10px",
                            marginRight: "10px",
                            border: "none",
                        }}
                    />
                </Sider>
                <Layout style={{ backgroundColor: "#F6F6F8" }}>
                    <Header
                        style={{
                            display: "flex",
                            height: "100px",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "0 20px",
                            background: "#FFF",
                        }}>
                        <h2 className='text-lg font-semibold'></h2>
                        <div className='flex items-center gap-5'>
                            <div>
                                <img src={SMSIcon} alt='img' />
                            </div>
                            <div>
                                <img src={NatificationIcon} alt='img' />
                            </div>
                            <div>
                                <img src={SettingsIcon} alt='img' />
                            </div>
                            <div>
                                <img src={ProfileIcon} alt='img' />
                            </div>
                        </div>
                    </Header>
                    <Content
                        style={{
                            padding: 40,
                            minHeight: 280,
                            background: "#F6F6F8",
                        }}>
                        <Routes>
                            {Router &&
                                Router.map((item) => (
                                    <Route
                                        path={item.path}
                                        element={item.element}
                                        key={item.id}
                                    />
                                ))}
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default AppRouters;
