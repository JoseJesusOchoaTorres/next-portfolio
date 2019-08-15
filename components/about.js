import React from 'react'
import Card from './card'
import Text from './text'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedinIn,  faTwitter, faInstagram, faFacebookF, faGithub} from '@fortawesome/free-brands-svg-icons/'
//import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons/faLinkedinIn'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => (
    <section id="about" className="about-section container-fluid background-color-gray-light-1 text-color-black light padding-top-r1 padding-bottom-r1">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-ms-6 col-lg-7">
               <Card>
                    <Text tag="h2" cssClass="h3 nospacing padding-bottom-1">Who am I?</Text>
                    <Text tag="h1" cssClass="h4 text-uppercase text-color-blue-3">Jose Jesus Ochoa Torres</Text>
                    <Text tag="p" cssClass="text-color-gray-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo ante, sodales id nibh sed, dictum commodo arcu. Nulla commodo at tellus non vehicula. Pellentesque at efficitur eros. Cras auctor elementum est quis consequat. Fusce dignissim turpis in massa pretium, sed pulvinar velit vulputate. Vestibulum congue et leo vel tincidunt. Quisque congue molestie lacus tincidunt fermentum. Praesent aliquam pellentesque lorem, vitae lacinia velit pulvinar vehicula. Vivamus dignissim sagittis leo ut blandit. Nam auctor dui ut enim maximus, sit amet malesuada odio finibus. Nulla ut bibendum nibh, eu semper metus. In auctor risus at diam rutrum, eget hendrerit metus porttitor.</Text>
                </Card>
            </div>

            <div className="col-xs-12 col-sm-12 col-ms-6 col-lg-5">
                <Card>
                    <Text tag="h2" cssClass="h3 nospacing padding-bottom-1">Personal Information</Text>
                    <Text tag="h1" cssClass="h4 text-uppercase">Would you like to be in touch with me?</Text>
                    <ul className="text-color-gray-3">
                        <li><span className="text-color-black">Adresse:</span> Guadalajara, Jal. México</li>
                        <li><span className="text-color-black">Birthdate:</span> 30/03/1993</li>
                        <li><span className="text-color-black">Email:</span> <a href="mailto:jose.jesus.ochoa.torres@gmail.com" target="__blank">jose.jesus.ochoa.torres@gmail.com</a></li>
                        <li><span className="text-color-black">Cellphone:</span> <a href="tel:+524525290255" target="__blank">(+52) 4525290255</a></li>
                    </ul>

                    <ul className="social-container flex nospacing padding-top-2">
                        <li className="margin-right-1"><a href="#" target="__blank" className="social__anchor text-color-white background-color-black">Linkedin</a></li>
                        <li className="margin-right-1"><a href="#" target="__blank" className="social__anchor text-color-white background-color-black">Twitter</a></li>
                        <li className="margin-right-1"><a href="#" target="__blank" className="social__anchor text-color-white background-color-black">Instagram</a></li>
                        <li><a href="#" target="__blank" className="social__anchor text-color-white background-color-black">Facebook</a></li>
                    </ul>
                </Card>
            </div>
        </div>

        <style jsx>{`
            .social-container {
                border-top: 1px solid var(--gray-light-2);
                list-style: none;
            }

                .social__anchor {
                    padding: 0.3rem 0.8rem;
                    border-radius: 0.2rem;
                }
                
                    .social__anchor:hover {
                       background-color: var(--blue-3);
                       color: var(--white, white);
                    }
        `}</style>
    </section>
)

export default About
