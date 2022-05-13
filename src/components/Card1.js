import React from "react";
import { Link } from "react-router-dom";
import "../styles/Search.css";

const Card1 = () => (
    <Link to="/about-pro">
    <div className="search-card">

        <div className="image-card">
            <img src={require('../images/download.png')} className="profile-pic" />

        </div>
        <div className="title-card">
            <h3>John Joe</h3>
        </div>
        <div className="des-card">
            <p>Ratings : 4.5/5</p>
            {/* <button>Read More...</button> */}
        </div>
    </div>
    </Link>
)

export default Card1