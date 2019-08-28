import React from 'react'
import Button from './button'

const Footer = () => (
    <footer className="footer background-color-gray-light-1 padding-top-r1 padding-bottom-r1 flex xs-between">

        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-2 text-center">
                    <h2 className="h1 footer__name text-color-black light flex xs-middle padding-right-3">Jose Jesus</h2>
                </div>
            
                <div className="footer__information flex col-xs-12 col-sm-5 col-md-6 col-lg-6 col-xs-last xs-between sm-left md-left lg-left">
                    <ul className="footer__social nospacing padding-boottom-1 padding-right-2 padding-top-2">
                        <li className="text-uppercase text-color-black padding-bottom-2">Social</li>
                        <li><a href="https://www.linkedin.com/in/jjot93/" target="__blank" className="social__link flex text-color-gray-3">Linkedin</a></li>
                        <li><a href="https://twitter.com/jjot93"  target="__blank" className="social__link flex text-color-gray-3">Twitter</a></li>
                        <li><a href="https://www.instagram.com/jose.jesus.ochoa.torres/" target="__blank" className="social__link flex text-color-gray-3">Instagram</a></li>
                        <li><a href="https://github.com/JoseJesusOchoaTorres" target="__blank" className="social__link flex text-color-gray-3">Github</a></li>
                    </ul>

                    <ul className="footer__personal nospacing padding-boottom-1 padding-right-2 padding-top-2">
                        <li className="text-uppercase text-color-black padding-bottom-2">Personal information</li>
                        <li><a href="mailto:jose.jesus.ochoa.torres@gmail.com" target="__blank" className="social__link flex text-color-gray-3">jose.jesus.ochoa.torres@gmail.com</a></li>
                        <li><a href="tel:+524525290255"  target="__blank" className="social__link flex text-color-gray-3">(+52) 4525290255</a></li>
                    </ul>

                    <ul className="footer__developers nospacing padding-boottom-1 padding-right-2 padding-top-2">
                        <li className="text-uppercase text-color-black padding-bottom-2">Development</li>
                        <li><a href="#" target="__blank" className="social__link flex text-color-gray-3">Design and grid system</a></li>
                        <li><a href="#"  target="__blank" className="social__link flex text-color-gray-3">Github source code</a></li>
                    </ul>
                </div>

                <div className="footer__newsletter col-xs-12 col-sm-5 col-md-4 col-lg-4 col-sm-last col-md-last col-lg-last">
                    <form className="padding-top-2">
                        <label htmlFor="email" className="flex text-uppercase text-color-black padding-bottom-2">Would you like to know when I publish a new article?</label>
                        <div className="flex nowrap">
                            <input className="input--text fullwidth" id="email" type="email" placeholder="Email" />
                            <input type="submit" className="button button--primary button--input" value="Subscribe" />
                        </div>
                    </form>
                </div>

            </div>
        </div>

    <style jsx>{`
            .footer {
                border-top: 1px solid var(--gray-light-2);
            }

                    .footer__name {
                        background: linear-gradient(to right, var(--blue-3) 0%, var(--black) 100%);
                        font-family: 'Nothing You Could Do';
                        -webkit-text-fill-color: transparent;
                        -webkit-background-clip: text;
                        display: inline-block;
                        transform: rotate(-20deg);
                    }

                    .footer__social, .footer__personal, .footer__developers {
                        list-style: none;
                    }

                        .social__link {
                            padding-bottom: 0.5rem;
                        }

                        .social__link:hover {
                            color: var(--blue-3);
                        }
        `}</style>
    </footer>
)

export default Footer
