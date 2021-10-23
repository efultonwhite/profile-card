import React from 'react'
import "../styles/Card.css"
import "../styles/Header.css"
import headerImage from "../images/headerImage.jpg"
import profilePhoto from "../images/profilePhoto.jpg"



function Header() {
    return (
        <div className="Header">
        <div>
            <img className="header-image" src={headerImage} />
        </div>
        <div>
            <img className="profile-image" src={profilePhoto} alt="" />
        </div>
        </div>
    )
}

export default Header
