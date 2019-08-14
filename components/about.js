import React from 'react'
import Card from './card'
import Title from './title'

const About = () => (
    <section id="about" className="about-section container-fluid">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-ms-6 col-lg-7">
               
            </div>

            <div className="col-xs-12 col-sm-12 col-ms-6 col-lg-5">
                <Card>
                    <Title tag="p" cssClass="h2">Personal Information</Title>
                </Card>
            </div>
        </div>

        <style jsx>{`
            .about-section {
                background-image: linear-gradient(-90deg, var(--white), var(--gray-light-2));
                padding: 6vmin 0;
            }
        `}</style>
    </section>
)

export default About
