import React from 'react';
import Banner from './Banner';
import About from './About';
import How_it_works from './How_it_works';
import Advisory from './Advisory';
import Register_form from './Register_form';
import Roadmap from './Roadmap';

export default function Home() {
    return (
        <>
            <Banner/>
            <About/>
            <How_it_works/>
            <Advisory/>
            <Roadmap/>
            <Register_form/>
        </>
    )
}
