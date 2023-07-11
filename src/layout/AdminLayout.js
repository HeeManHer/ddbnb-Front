import '../css/common.css';
import '../css/admin.css';
import '../css/dashboard.css';
import { Outlet } from 'react-router-dom';
import Footer from "../component/common/Footer";
import AdminHeader from "../component/common/AdminHeader";
import AdminNavbar from "../component/common/AdminNavbar";

function AdminLayout() {

    return (
        <>
            <AdminHeader />
            <div className='admin-content main-width'>
                <AdminNavbar />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default AdminLayout;