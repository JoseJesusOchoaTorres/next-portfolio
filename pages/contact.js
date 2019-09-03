import React from 'react'
import Head from 'next/head'
import Footer from '../containers/footer'

import "../assets/css/main.scss";

const Contact = props => (
	<div>
		<Head>
			<link rel="icon" href="../static/favicon.ico" sizes="32x32" type="image/png" />
			<link href="https://fonts.googleapis.com/css?family=Nothing+You+Could+Do&display=swap" rel="stylesheet" />
      		<title>Jose Jesus &#8226; Contact</title>
    	</Head>

        <Footer></Footer>
  	</div>
)

export default Contact