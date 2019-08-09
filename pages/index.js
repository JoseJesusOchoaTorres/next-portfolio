import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import Nav from '../components/nav'
import Header from '../components/header'

import "../assets/css/main.scss";

const Home = () => (
	<div>
		<Head>
      		<link rel="icon" href="../static/favicon.ico" sizes="32x32" type="image/png" />
      		<title>Jose Jesus &#8226; Software engineer</title>
    	</Head>

		<Header></Header>

		<style jsx global>{`
			:root {
				--black: #000;
				--white: #FFF;
				--gray-light-1: #FAFAFA;
				--gray-light-2: #EFEFEF;
				--gray-1: #999999;
				--gray-2: #888888;
				--gray-3: #666666;
				--gray-dark-1: #444444;
				--gray-dark-2: #333333;
				--gray-dark-3: #111111;
				--blue-1: #408bfc;
				--blue-2: #0062ff;
				--blue-3: #054ada;
			}

			body {
				background-color: var(--white);
				font-family: sans-serif, arial;
				color: var(--gray-dark-2);
				font-weight: lighter;
				font-size: 16px;
				line-height: 1;
			}
		`}</style>
  	</div>
)

export default Home
