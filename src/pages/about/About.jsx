import React from "react";
import AboutBanner from "./AboutBanner";
import AboutTheCompany from "./AbousTheCompany";
import TurkeyOffice from "./TurkeyOffice";
import NigerianOffice from "./NigerianOffice";

const officeSections = [
    {
        title: 'Turkey Office',
        description: 'Tempora natus enim, aliquam doloremque voluptates eum illum. Sed consectetur quam reiciendis porro in quibusdam, iusto, ab corporis praesentium ipsam quae deleniti. Ullam sed nesciunt perferendis iusto dignissimos, eligendi nisi harum beatae obcaecati sequi optio vero ratione dolores cumque suscipit neque non ex nobis qui. Molestias inventore corporis harum non magnam blanditiis, at aut quia suscipit, enim aspernatur fugit minima?',
        email: 'turkey@afrikaglobal.com',
        phone: '234 66 32234 00'
    },

    {
        title: 'Nigerian Office',
        description: 'Tempora natus enim, aliquam doloremque voluptates eum illum. Sed consectetur quam reiciendis porro in quibusdam, iusto, ab corporis praesentium ipsam quae deleniti. Ullam sed nesciunt perferendis iusto dignissimos, eligendi nisi harum beatae obcaecati sequi optio vero ratione dolores cumque suscipit neque non ex nobis qui. Molestias inventore corporis harum non magnam blanditiis, at aut quia suscipit, enim aspernatur fugit minima?',
        email: 'turkey@afrikaglobal.com',
        phone: '234 66 32234 00'
    }
]

const About = () => {
    return (
        <>
        <div className="">
            <AboutBanner />
            <AboutTheCompany />
            <TurkeyOffice />
            <NigerianOffice />
        </div>
        </>
    )
}
export default About