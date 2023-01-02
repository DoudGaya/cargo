import React from "react";
// import AboutBanner from "./about/AboutBanner";
import AboutTheCompany from "./about/AbousTheCompany";
import Records from "./about/Records";
import Company from "./home/Company";
import PageBanner from './generals/Banner'
import Partners from "./about/Partners";



const officeSections = [    
    {
        title: 'Turkey Office',
        firstSection: false,
        description: ' suscipit neque non ex nobis qui. Molestias inventore corporis harum non magnam blanditiis, at aut quia suscipit, enim aspernatur fugit minima?',
        email: 'turkey@afrikaglobal.com',
        phone: '234 66 32234 00'
    },


    {
        title: 'Nigerian Office',
        firstSection: true,
        description: ' suscipit neque non ex nobis qui. Molestias inventore corporis harum non magnam blanditiis, at aut quia suscipit, enim aspernatur fugit minima?',
        email: 'turkey@afrikaglobal.com',
        phone: '234 66 32234 00'
    }
]





const About = () => {




    return (
        <>
            <div className="">
                <PageBanner banner="About" />
                <AboutTheCompany />
                <Partners />
                <Company />
                <Records />
            </div>
        </>
    )
}
export default About