import React from 'react'

import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

import Header from '../containers/header'
import Nav from '../components/nav'

import About from '../containers/about'
import Articles from '../containers/articles'

import Footer from '../components/footer'

import "../assets/css/main.scss";

const Home = props => (
	<div>
		<Head>
			<link rel="icon" href="../static/favicon.ico" sizes="32x32" type="image/png" />
			<link href="https://fonts.googleapis.com/css?family=Nothing+You+Could+Do&display=swap" rel="stylesheet" />

      		<title>Jose Jesus &#8226; Software engineer</title>
    	</Head>

		<Header></Header>
		<Nav></Nav>

		<About></About>
		<Articles data={props.articles}></Articles>

		<Footer></Footer>
  	</div>
)

Home.getInitialProps = async function () {
	const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kyle.robert.gill');
	const data = await res.json();

	return {
		articles: data
	}
}

export default Home
