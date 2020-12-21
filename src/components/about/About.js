import React, { Fragment, useState } from 'react';
import Footer from '../footer/Footer';
import './about.css';

export const About = () => {
    const [change, setChange] = useState(false);

    const handleClick = () => {
        const temp = change;
        setChange(!temp);
    }

    return (
        <Fragment>
            <div className="about">
                {!change ? <button className="change-button" onClick={handleClick}>Change Color</button> : <button className="change-button-yellow" onClick={handleClick}>Change Color</button>}
                {!change ? <h1 className="about-header">Levan Abuladze</h1> : <h1 className="about-header-yellow">Levan Abuladze</h1>}
                <p className="about-position">Backend Developer</p>
                <p className="about-summary">I’m an enthusiastic, responsible and hard-working IT person. I am able to work well both in a team environment as well as using own initiative. Experience in Java programming. I am able to write clean and high quality code. Good in Georgian and English.</p>
                {!change ? <h1 className="about-header about-detail">Personal Details</h1> : <h1 className="about-header-yellow about-detail">Personal Details</h1>}
                <div className="flexit">
                    <p>levan.abuladze.1@btu.edu.ge</p>
                    <p style={{marginTop: "-4px"}}>Tbilisi, Georgia</p>
                </div>
                {!change ? <h1 className="about-header">Experience</h1> : <h1 className="about-header-yellow">Experience</h1>}
                <div className="flexit">
                    <p>Backend Developer - Orient Logic</p>
                    <p style={{marginTop: "-12px"}}>2020 - Present</p>
                    <p>Web Administrator - Tbilisi State University</p>
                    <p style={{marginTop: "-12px"}}>2018 - Present</p>
                </div>
                {!change ? <h1 className="about-header">Education</h1> : <h1 className="about-header-yellow">Education</h1>}
                <div className="flexit">
                    <p>Informational Technologies - Business and Technology University</p>
                    <p style={{marginTop: "-12px"}}>Bachelor's Degree 2017 - 2021</p>
                    <p style={{color: "#f6d70b", marginTop: "4px"}}>GPA - 3.32</p>
                </div>
                {!change ? <h1 className="about-header">Professional Skills</h1> : <h1 className="about-header-yellow">Professional Skills</h1>}
                <div className="flexit">
                    <p>Java SE, Java EE (CDI, EJB, JAX-RS, JPA, JMS, Security)</p>
                    <p style={{marginTop: "-12px"}}>Spring Boot, Spring Data JPA</p>
                    <p style={{marginTop: "-12px"}}>HTML, CSS, JavaScript, React</p>
                    <p style={{marginTop: "-12px"}}>Git, AWS (S3, EC2, VPC)</p>
                </div>
                {!change ? <h1 className="about-header">Social Links</h1> : <h1 className="about-header-yellow">Social Links</h1>}
                <div style={{marginBottom: "18px"}} className="flexit">
                    <a target="_blank" rel="noreferrer" href="https://github.com/levanabuladzee" className="link">Github</a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/levan-abuladze-
6b1359164/" className="link">Linkedin</a>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
} 

export default About;