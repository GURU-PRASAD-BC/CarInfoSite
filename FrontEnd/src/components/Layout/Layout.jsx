
import React, { Fragment } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Chat from '../Footer/Chat';
import Routers from '../../routers/Routers';


const Layout = () => {
  return <Fragment>
    <Header/>
    <div>
        <Routers/>
    </div>
    <Chat/>
    <Footer/>
  </Fragment>
}

export default Layout;