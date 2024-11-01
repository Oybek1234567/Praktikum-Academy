// import { Layout, Menu } from "antd";
// import { Content } from "antd/es/layout/layout";
// import Sider from "antd/es/layout/Sider";
// import { Link, Route, Routes } from "react-router-dom";
// import { menu } from "../../constants/menu";
// import { Router } from "../../constants/router";

// const Dashboard = () => {
//     return (
//         <div>
//             <Layout style={{ width: "100%", height: "120vh" }}>
//                 <Sider
//                     trigger={null}
//                     width={"20%"}
//                     style={{ backgroundColor: "" }}>
//                     <div className='demo-logo-vertical' />
//                     <Link to={"/"}></Link>
//                     <Menu
//                         theme='dark'
//                         mode='inline'
//                         defaultSelectedKeys={["1"]}
//                         items={menu.map(
//                             ({ id, title, path, icon, }) => {
//                                 // if (children) {
//                                 //     return {
//                                 //         key: id,
//                                 //         label: <Link to={path}>{title}</Link>,
//                                 //         icon: icon,
//                                 //     };
//                                 // }
//                                 return {
//                                     key: id,
//                                     label: <Link to={path}>{title}</Link>,
//                                     icon: icon,
//                                 };
//                             }
//                         )}
//                         style={{
//                             marginTop: "150px",
//                             backgroundColor: "inherit",
//                             fontSize: "18px",
//                             letterSpacing: "2px",
//                             width: "80%",
//                             marginLeft: "20px",
//                             marginRight: "20px",
//                         }}
//                     />
//                 </Sider>
//                 <Layout style={{ backgroundColor: "#F6F6F8" }}>
//                     <HeaderPage />
//                     <Content
//                         style={{
//                             marginTop: "100px",
//                             padding: 24,
//                             minHeight: 280,
//                             background: "#F6F6F8",
//                             // borderRadius: borderRadiusLG,
//                         }}>
//                         <Routes>
//                             {Router &&
//                                 Router.map((item) => (
//                                     <Route
//                                         path={item.path}
//                                         element={item.element}
//                                         key={item.id}
//                                     />
//                                 ))}
//                         </Routes>
//                     </Content>
//                 </Layout>
//             </Layout>
//         </div>
//     );
// };

// export default Dashboard;
