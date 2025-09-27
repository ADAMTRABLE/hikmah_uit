import { Outlet } from 'react-router-dom'
import Header from '../components/AdminHeader'

const AdminLayout = () => {
    return (
        <>
            <Header />
            <h1>Dashbaord Structure</h1>
            <Outlet />
        </>
    )
}

export default AdminLayout