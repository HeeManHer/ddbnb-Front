import '../css/common.css';

import { Outlet } from 'react-router-dom';
import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import Navbar from '../component/common/Navbar';

function Layout() {

    return (
        <>
            <Header />
            <div className='content main-width'>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout;