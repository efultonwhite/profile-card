import React from 'react'
import "../styles/Card.css"
import Header from './Header'
import Info from './Info'
import Links from './Links'

function Card() {
    return (
        <div className="Card">
            <Header/>
            <Info/>
            <Links/>
        </div>
    )
}

export default Card
