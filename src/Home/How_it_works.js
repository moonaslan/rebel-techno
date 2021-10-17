import React from 'react'
import { NavLink } from 'react-router-dom';

export default function How_it_works() {
    return (
        <>
            <div className="main-section how_it_worksfull">
                <h2 className="main-title">How it works</h2>
                <div className="row">
                    <div className="left-section">
                        <section>
                            <h2>The standard Lorem Ipsum passage, used since the 1500s dummy</h2>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </section>
                    </div>
                    <div className="right-section">
                        <div className="tech-table">
                            <div className="tech-table-cell">
                            <h3>Lorem Ipsum Membership</h3>
                                <ul>
                                    <li style={{ paddingLeft: 15 }}><img src="/images/bullet-shape.png" alt="" /> Access more obscure Latin</li>
                                    <li style={{ paddingLeft: 30 }}><img src="/images/bullet-shape.png" alt="" /> Access to words, consectetur</li>
                                    <li style={{ paddingLeft: 45 }}><img src="/images/bullet-shape.png" alt="" /> Levels of opposed to using</li>
                                    <li style={{ paddingLeft: 60 }}><img src="/images/bullet-shape.png" alt="" /> Randomised words</li>
                                    <li style={{ paddingLeft: 75 }}><img src="/images/bullet-shape.png" alt="" /> Level of generators on the Internet</li>
                                    <li style={{ paddingLeft: 90 }}><img src="/images/bullet-shape.png" alt="" /> Liquidity handful of model sentence</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
