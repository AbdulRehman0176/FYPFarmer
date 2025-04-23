import { useState } from 'react';
import profile from './assets/profile.png';
import './App.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import SignUp from './pages/signup';
import Login from './pages/Login';
import GovtScheme from './pages/GovtScheme';
import ProfilePage  from './pages/ProfilePage';
import Machinery from './pages/Machinery';
import MyPost from './pages/MyPost';
import { Route, Routes } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    // <>
    // <Layout style={{ height: '100vh', overflow: 'hidden',  marginLeft: collapsed ? 80 : 50  }}>
    //   <Sider trigger={null} collapsible collapsed={collapsed} width={250} style={{ height: '100vh', position: 'fixed', left: 0 }}>
    //     <div style={{ textAlign: 'center', padding: '16px', margin:'14px', borderRadius:"4%", background: 'green', display:'flex', alignItems:'center' }}>
    //       <img 
    //         src= {profile}
    //         alt="Minahil" 
    //         style={{ width: '50px', height: '50px', borderRadius: '50%' }}
    //       />
    //       <div style={{ color: 'white', marginTop: '8px', marginLeft:'8px', fontSize: '16px', fontWeight: 'bold' }}>Minahil Tahir</div>
    //     </div>
    //     <Menu
    //       theme="dark"
    //       mode="inline"
    //       defaultSelectedKeys={['1']}
    //       items={[
    //         { key: '1', icon: <UserOutlined />, label: 'Govt Schemes' },
    //         { key: '2', icon: <VideoCameraOutlined />, label: 'Machinery' },
    //         { key: '3', icon: <UploadOutlined />, label: 'Land' },
    //         { key: '4', icon: <UploadOutlined />, label: 'Seeds' },
    //         { key: '5', icon: <UploadOutlined />, label: 'Shops' },
    //         { key: '6', icon: <UploadOutlined />, label: 'Deceased' },
    //         { key: '7', icon: <UploadOutlined />, label: 'Rate' },
    //       ]}
    //     />
    //   </Sider>
    //   <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
    //     <Header
    //       style={{
    //         padding: 0,
    //         background: colorBgContainer,
    //         position: 'fixed',
    //         width: '100%',
    //         zIndex: 1000,
    //       }}
    //     >
    //       {/* <Button
    //         type="text"
    //         icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    //         onClick={() => setCollapsed(!collapsed)}
    //         style={{ fontSize: '16px', width: 64, height: 64, marginLeft: collapsed ? 30 : 30 }}
    //       /> */}
    //     </Header>
    //     <Content
    //       style={{
    //         margin: '80px 16px 24px',
    //         padding: 24,
    //         minHeight: 'calc(100vh - 80px)',
    //         background: colorBgContainer,
    //         borderRadius: borderRadiusLG,
    //         overflow: 'auto',
    //       }}
    //     >
    //       Content 'yaha pr content ana ha'
          
    //     </Content>
    //   </Layout>
    // </Layout>
    // </>
    
    
    <>
    <Routes>
     <Route path='/login' element={<Login />} />
     <Route path='/machine' element={<Machinery />} /> 
     <Route path='/signup' element={<SignUp />} />
     <Route path='/profile' element={<ProfilePage />} />
     <Route path='/' element={<MyPost/>} />
    </Routes>
    {/* <GovtScheme/> */}
    {/* <ProfilePage/> */}
    {/* <Machinery/> */}
    </>
  );
}

export default App;
