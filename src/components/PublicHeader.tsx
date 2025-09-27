// src/components/PublicHeader.tsx
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
    FaHome,
    FaUserCircle,
    FaBook,
    FaBookReader,
    FaCalendar,
    FaChevronDown
} from "react-icons/fa"
import logo from "../assets/images/hikimalogo2.png"

const PublicHeader = () => {
    const location = useLocation();
    
    // Function to check if a link is active
    const isActiveLink = (path: string) => {
        return location.pathname === path;
    }

    return (
        <header className="public-header">
            <div className="logo">
                <div className="logo-icon">
                    <img src={logo} alt="Hikmah Logo" className="logo-img" />
                </div>
                <div className="logo-text">
                    <h2>Hikmah Premier Institute</h2>
                    <span>Online Islamic Education</span>
                </div>
            </div>
            
            <div className="nav-links">
                <div className={`nav-item ${isActiveLink("/") ? "active" : ""}`}>
                    <div className="nav-icon">
                        <FaHome className="link-icon" />
                    </div>
                    <div className="nav-link">
                        <Link to="/" className="link">Home</Link>
                    </div>
                </div>

                <div className={`nav-item ${isActiveLink("/courses") ? "active" : ""}`}>
                    <div className="nav-icon">
                        <FaBookReader className="link-icon" />
                    </div>
                    <div className="nav-link">
                        <Link to="/courses" className="link">Courses</Link>
                    </div>
                </div>
                
                <div className={`nav-item ${isActiveLink("/library") ? "active" : ""}`}>
                    <div className="nav-icon">
                        <FaBook className="link-icon" />
                    </div>
                    <div className="nav-link">
                        <Link to="/library" className="link">Library</Link>
                    </div>
                </div>
                
                <div className={`nav-item ${isActiveLink("/events") ? "active" : ""}`}>
                    <div className="nav-icon">
                        <FaCalendar className="link-icon" />
                    </div>
                    <div className="nav-link">
                        <Link to="/events" className="link">Events</Link>
                    </div>
                    
                </div>
            </div>
            
            <div className="user-account">
                <span>Account</span>
                <FaUserCircle className="user-icon" />
            </div>
        </header>
    )
}

export default PublicHeader