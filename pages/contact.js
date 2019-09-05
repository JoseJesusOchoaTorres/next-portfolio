import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Text from '../components/text'
import Footer from '../components/footer'

import "../assets/css/main.scss";

const Contact = props => (
	<div>
		<Head>
			<link rel="icon" href="../static/favicon.ico" sizes="32x32" type="image/png" />
			<link href="https://fonts.googleapis.com/css?family=Nothing+You+Could+Do&display=swap" rel="stylesheet" />
      		<title>Jose Jesus &#8226; Contact</title>
		</Head>
		<Nav></Nav>
		<section className="contact-section light padding-top-r3 padding-bottom-r3">
			<div className="container">
				<div className="row xs-around">
					<div className="col-xs-12 col-sm-5 col-md-4 col-lg-4">
						<Text tag="h2" cssClass="h1 text-color-black nospacing padding-bottom-1">Contact to me</Text>
						<Text tag="p" cssClass="h4 text-uppercase light">Hey there, are you still here?</Text>
						<Text tag="p" cssClass="text-color-gray-3">Maybe you have seen something and liked it, or maybe you have a proposal, idea or need on the internet. Do not hesitate to contact me to resolve any questions.</Text>
						<Text tag="p" cssClass="text-color-gray-3">If you need to talk about a project that you have in mind or you just want to tell me "Hello, how are you?" You can contact me.</Text>
						<Text tag="p" cssClass="text-color-gray-3">
							Send me an email to <a href="mailto:jose.jesus.ochoa.torres@gmail.com" target="__blank">jose.jesus.ochoa.torres@gmail.com</a> 
							or fill out the form and you will receive your response shortly, but if you prefer to use social networks don't be shy and contact to me there.
						</Text>
					</div>

					<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
						<form className="flex xs-right">
							<input className="input--text width-100 margin-bottom-2" id="name" type="text" placeholder="Name" />
							<input className="input--text width-100 margin-bottom-2" id="email" type="email" placeholder="Email *" required />
							<input className="input--text width-100 margin-bottom-2" id="subject" type="text" placeholder="Subject" />
							<textarea className="input--text width-100 margin-bottom-2" rows="5" id="message" type="text" placeholder="Message *" required />
							<Text tag="p" cssClass="small text-color-gray-1 nospacing width-100">All fields with * are required</Text>
							<input type="submit" className="button button--primary" value="Subscribe" />
						</form>
					</div>
				</div>
			</div>
		</section>
		<Footer></Footer>

		<style jsx>{`
			.contact-section {
				// height: 90vh;
			}
		`}</style>
  	</div>
)
export default Contact