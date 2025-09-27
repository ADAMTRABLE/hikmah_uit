import logo from "../assets/images/hikimalogo2.png"

import {
    FaUserCircle,
} from "react-icons/fa"

const AdminHeader = () => {
    return (
        <>
            <header className="admin-header">
                <div className="logo">
                    <div className="logo-icon">
                        <img src={logo} alt="Hikmah Logo" className="logo-img" />
                    </div>
                    <div className="logo-text">
                        <h2>Hikmah Premier Institute</h2>
                        <span>Online Islamic Education</span>
                    </div>
                </div>
                <div className="user-account">
                    <span>Account</span>
                    <FaUserCircle className="user-icon" />
                </div>
            </header>

        </>
    )
}

export default AdminHeader;