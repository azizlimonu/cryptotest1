import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Navbar, News } from './components';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/exchanges' element={<Exchanges />} />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className='footer'>
          <Space size={8}>
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
              Copyright © 2021 {" "}
              <Link to="/">
                Cryptoverse Inc.
              </Link> <br />
              All Rights Reserved.
            </Typography.Title>
          </Space>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>

      <div className='footer'>

      </div>
    </div>
  );
}

export default App;