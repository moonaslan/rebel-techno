import React from 'react'
import { NavLink } from 'react-router-dom';

export default function About() {
    const aboutList = [
        {icon: "/images/icon1.png", title:"The Problem"},
        {icon: "/images/icon2.png", title:"Startup Launch"},
        {icon: "/images/icon3.png", title:"Project Idea"}
    ];
    return (
        <>
            <div className="main-section about-full">
                <div className="container">
                    <h2 className="main-title">About Us</h2>
                    <div className="about-us">
                        <ul>
                            {aboutList.map((data)=>
                            <li>
                                <span style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/aboutshape.png'})`}}></span>
                                <img src={data.icon} alt="" />
                                <h3>{data.title}</h3>
                            </li>
                            )}
                        </ul>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, anything embarrassing hidden in the middle of text.</p>
                        <br />
                        <NavLink to="">Read More</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
