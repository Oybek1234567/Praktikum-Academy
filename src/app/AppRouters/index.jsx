import { useState } from "react";
import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Link, Route, Routes } from "react-router-dom";
import { menu } from "../../constants/menu";
import { Router } from "../../constants/router";
import SMSIcon from "../../assets/images/sms-icon.svg";
import SettingsIcon from "../../assets/images/setting-icon.svg";
import ProfileIcon from "../../assets/images/profile.svg";
import Logo from "../../assets/images/logo.svg";
import { Icons } from "../../assets";
import Market from "../../pages/market";
import Notification from "../../pages/notification";
const AppRouters = () => {
    const [notificationCount, setNotificationCount] = useState(0);
    const [likedCards, setLikedCards] = useState([]); 

    return (
        <div>
            <Layout style={{ width: "100%", height: "100vh" }}>
                <Sider
                    trigger={null}
                    width={"345px"}
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
                        className="mt-20 text-[20px]"
                        mode='inline'
                        defaultSelectedKeys={["1"]}
                        items={menu.map(
                            ({ id, title, path, icon, children }) => {
                                if (children) {
                                    return {
                                        key: id,
                                        label: (
                                            <Link
                                                to={path}
                                                style={{
                                                    display: "inline-block",
                                                }}>
                                                {title}
                                            </Link>
                                        ),
                                        icon: icon,
                                        children: [
                                            {
                                                key: children.id,
                                                label: (
                                                    <Link to={children.path}>
                                                        {children.title}
                                                    </Link>
                                                ),
                                                icon: children.icon,
                                            },
                                        ],
                                    };
                                }
                                return {
                                    key: id,
                                    label: <Link to={path}>{title}</Link>,
                                    icon: icon,
                                };
                            }
                        )}
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
                            <Link
                                to={"/notification"}
                                className='cursor-pointer'>
                                <Icons.notification />
                                {notificationCount > 0 && (
                                    <span
                                        style={{
                                            position: "absolute",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            top: "23px",
                                            right: "136px",
                                            color: "white",
                                            backgroundColor: "#166199",
                                            width: "15px",
                                            height: "15px",
                                            borderRadius: "50%",
                                            fontSize: "8px",
                                        }}>
                                        {notificationCount}
                                    </span>
                                )}
                            </Link>
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
                            {Router.map(({ path, element, id, children }) => (
                                <Route path={path} element={element} key={id}>
                                    {children &&
                                        children.map((child) => (
                                            <Route
                                                path={child.path}
                                                element={child.element}
                                                key={child.id}
                                            />
                                        ))}
                                </Route>
                            ))}
                            <Route
                                path='/market'
                                element={
                                    <Market
                                        setNotificationCount={
                                            setNotificationCount
                                        }
                                        setLikedCards={setLikedCards}
                                    />
                                }
                            />
                            <Route
                                path='/notification'
                                element={<Notification liked={likedCards} />}
                            />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default AppRouters;
