import React, { useState } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const navigate = useNavigate()


  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>

        <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </Button>
      </div>

      <Menu
        theme='dark'
        onClick={({ key }) => {
          navigate(key)
        }}
        items={[
          { label: 'Home', key: '/', icon: <HomeOutlined /> },
          { label: 'Cryptocurrencies', key: '/cryptocurrencies', icon: <FundOutlined /> },
          { label: 'Exchanges', key: '/exchanges', icon: <MoneyCollectOutlined /> },
          { label: 'News', key: '/news', icon: <BulbOutlined /> },
        ]}
      >

      </Menu>

      {/* {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )} */}
    </div>
  )
}

export default Navbar