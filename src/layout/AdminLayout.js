import '../css/common.css'

import { Outlet } from 'react-router-dom';
import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import DashNavbar from '../component/common/DashNavbar';

function AdminLayout() {

    return (
        <>
            <Header />
            <div className='admin-content'>
                <DashNavbar />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default AdminLayout;