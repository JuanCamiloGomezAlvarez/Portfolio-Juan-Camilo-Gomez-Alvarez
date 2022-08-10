import React from "react";
import "./Header.css"
import InteractiveText from "./InteractiveText";

export default function Header(){
    return(
        <header>
            <div className = "profile">
                <img className = "profile-img" src="/public/images/profile-photo.jpg" alt="profile-photo"/>
                <div className = "profile-greetings">
                    <p>Hi! I'm Juan</p>
                    <span><InteractiveText /></span>
                </div>
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Social Media</a>
                <a href="/">Projects</a>
            </nav>
        
        </header>
    )
}

