import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Layout , Typography, Space} from 'antd';
import {Navbar,Exchanges,Homepage,Cryptocurrencies,News,CryptoDetails,Footer} from './components';
import './App.css';
import 'antd/dist/reset.css';
const App = () => {
  return (
    <div className="app">
      <div className='navbar'>
            <Navbar></Navbar>
      </div>
      <div className='main'>
              <div className='routes'>
                <Switch>
                  <Route exact path='/'>
                        <Homepage/>
                  </Route>
                  <Route exact path='/exchanges'>
                        <Exchanges/>
                  </Route>
                  <Route exact path='/cryptocurrencies'>
                        <Cryptocurrencies/>
                  </Route>
                  <Route exact path='/crypto/:coinId'>
                        <CryptoDetails/>
                  </Route>
                  <Route exact path='/news'>
                        <News/>
                  </Route>
                </Switch>
              </div>
      <div className='footer'>
        <Typography.Title  level={5} style={{color:'white',textAlign:'center'}}>
          Cryptoverse<br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/news'>News</Link>
        </Space>
      </div>
      </div>
    </div>
  )
}

export default App