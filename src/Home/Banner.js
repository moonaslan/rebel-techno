import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Banner() {
    const maintitle= "Scrambled it to make a type specimen book";
    var bannerimg= "/images/rocket.png";
    var listOne = [
        {list:"45 BC, making"},
        {list:"An unknown printer took"},
        {list:"Remaining essentially unchanged"},
        {list:"Editors now use Lorem Ipsum"},
    ];
    return (
        <>
            <div className="banner-warpper" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/banner-bg.png'})`}}>
                <div className="container">
                    <div className="banner-caption">
                        <div className="tech-table">
                            <div className="tech-table-cell">
                                <h1>{maintitle}</h1>
                                <ul className="list-one">
                                    { listOne.map((data)=><li>{data.list}</li>) }
                                </ul>
                                <NavLink className="banner-btn" to="/contact">Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="banner-img"><img src={bannerimg} alt="" /></div>
                </div>
            </div>
        </>
    )
}
