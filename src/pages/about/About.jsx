import React from "react";
import AboutBanner from "./AboutBanner";
import AboutTheCompany from "./AbousTheCompany";
import OfficeAddress from "./OfficeAddress";
import NigerianOffice from "./NigerianOffice";
import Records from "./Records";
import Company from "../home/Company";
import Partners from "./Partners";

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

    // const office = officeSections.map( ofc => <OfficeAddress office={ofc} key={ofc.title} /> )
    return (
        <>
        <div className="">
            <AboutBanner />
            <AboutTheCompany />
             {/* <OfficeAddress office={officeSections} /> */}
            <Partners />
            <Company />
            <Records />
        </div>
        </>
    )
}
export default About