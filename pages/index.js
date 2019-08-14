import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/header'
import Nav from '../components/nav'

import About from '../components/about'

import "../assets/css/main.scss";

const Home = () => (
	<div>
		<Head>
      		<link rel="icon" href="../static/favicon.ico" sizes="32x32" type="image/png" />
      		<title>Jose Jesus &#8226; Software engineer</title>
    	</Head>

		<Header></Header>
		<Nav></Nav>

		<About></About>
		<div style={{ height: '500vh', background: 'gray'}}></div>

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
				background-color: var(--white, white);
				font-family: sans-serif, arial;
				color: var(--gray-3, gray);
				font-weight: lighter;
				font-size: 13px;
				line-height: 1;
			}
		`}</style>
  	</div>
)

export default Home
