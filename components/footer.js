import React from 'react'
import Text from './text'

const Footer = () => (
    <footer className="footer background-color-gray-light-1 padding-r1 flex xs-between">

        <div className="container-fluid">
            <div className="row">
            
                <div className="footer__information flex col-xs-6">
                    <h2 className="h1 footer__name text-color-black light flex xs-middle">Jose Jesus</h2>
                    <ul className="footer__social margin-top-0">
                        <li className="text-uppercase text-color-black padding-bottom-2">Social</li>
                        <li><a href="https://www.linkedin.com/in/jjot93/" target="__blank" className="social__link flex text-color-gray-3">Linkedin</a></li>
                        <li><a href="https://twitter.com/jjot93"  target="__blank" className="social__link flex text-color-gray-3">Twitter</a></li>
                        <li><a href="https://www.instagram.com/jose.jesus.ochoa.torres/" target="__blank" className="social__link flex text-color-gray-3">Instagram</a></li>
                        <li><a href="https://github.com/JoseJesusOchoaTorres" target="__blank" className="social__link flex text-color-gray-3">Github</a></li>
                    </ul>

                    <ul className="footer__personal margin-top-0">
                        <li className="text-uppercase text-color-black padding-bottom-2">Personal information</li>
                        <li><a href="mailto:jose.jesus.ochoa.torres@gmail.com" target="__blank" className="social__link flex text-color-gray-3">jose.jesus.ochoa.torres@gmail.com</a></li>
                        <li><a href="tel:+524525290255"  target="__blank" className="social__link flex text-color-gray-3">(+52) 4525290255</a></li>
                    </ul>

                    <ul className="footer__developers margin-top-0">
                        <li className="text-uppercase text-color-black padding-bottom-2">Development</li>
                        <li><a href="#" target="__blank" className="social__link flex text-color-gray-3">Design and grid system</a></li>
                        <li><a href="#"  target="__blank" className="social__link flex text-color-gray-3">Github source code</a></li>
                    </ul>
                </div>

                <div className="footer__newsletter col-xs-6">
                    <form>
                        <label for="email" className="flex text-uppercase text-color-black padding-bottom-2">Would you like to know when I publish a new article?</label>
                        <input id="email" type="email" />
                        <input type="submit" value="Subscribe" />
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
