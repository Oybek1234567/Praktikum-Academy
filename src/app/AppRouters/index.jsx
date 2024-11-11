import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Link, Route, Routes } from "react-router-dom";
import { menu } from "../../constants/menu";
import { Router } from "../../constants/router";
import SMSIcon from "../../assets/images/sms-icon.svg";
import SettingsIcon from "../../assets/images/setting-icon.svg";
import NatificationIcon from "../../assets/images/natification-icon.svg";
import ProfileIcon from "../../assets/images/profile.svg";
import Logo from "../../assets/images/logo.svg";

const AppRouters = () => {
    return (
        <div>
            <Layout style={{ width: "100%", height: "100vh" }}>
                <Sider
                    trigger={null}
                    width={"345px"} // 20% da kichkina bo'lib qoldi
                    style={{ backgroundColor: "#FFFFFF" }}>
                    <div className='demo-logo-vertical' />
                    <Link to={"/"}>
                        <img
                            src={Logo}
                            alt='logo'
                            className='ml-[51px] mt-[35px]'
                        />
                    </Link>
                    <Menu
                        mode='inline'
                        defaultSelectedKeys={["1"]}
                        items={menu.map(({ id, title, path, icon }) => ({
                            key: id,
                            label: (
                                <Link to={path} className=''>
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
                            marginTop: "53px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            border: "none",
                        }}
                    />
                </Sider>
                <Layout style={{ backgroundColor: "#F6F6F8", height: "100vh" }}>
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
                            padding: "40px",
                            minHeight: "auto",
                            background: "#F6F6F8",
                            position: "relative",
                            zIndex: 2,
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
