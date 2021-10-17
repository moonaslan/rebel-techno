import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Advisory() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '60px',
        arrows: true,
        // prevArrow: "<span class='slick-arrow-left'>{arrowLeft}</span>",
        // nextArrow: "<span class='slick-arrow-right'>{arrowRight}</span>",
        slidesToShow: 3,
        slidesToScroll: 1
      };

    const partnerSlide = [
        {img:'images/partner1.png', title:'Byron Cunningham', des: 'UX Designer', about: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account system'},
        {img:'images/partner1.png', title:'Byron Cunningham', des: 'UX Designer', about: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account system'},
        {img:'images/partner1.png', title:'Byron Cunningham', des: 'UX Designer', about: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account system'},
        {img:'images/partner1.png', title:'Byron Cunningham', des: 'UX Designer', about: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account system'},
        {img:'images/partner1.png', title:'Byron Cunningham', des: 'UX Designer', about: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account system'},
    ]
    return (
        <>
            <div className="main-section partner-sliderfull">
                <div className="container">
                    <div className="detailed-title">
                        <h2 className="main-title">Advisory & Partners</h2>
                        <p>ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas <br/> molestias excepturi sint occaecati cupiditate non provident</p>
                        <img src="/images/logo1.png" alt="" />
                        <img src="/images/logo2.png" alt="" />
                    </div>
                    <Slider className="partner-slider" {...settings}>
                        {partnerSlide.map((data)=>
                            <div className="slider-layer">
                                <div className="partner-slider-text">
                                    <img src={data.img} alt="" />
                                    <h3>{data.title}</h3>
                                    <span>({data.des})</span>
                                    <p>{data.about}</p>
                                </div>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </>
    )
}
