import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

import "../assets/css/main.scss";

const Home = () => (
  <div>
    <Head>
      <link rel="stylesheet" type="text/css" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
      <title>🐱Chetito</title>
    </Head>

    <div className='hero'>
      
      <h1 className='title'>Sorry</h1>
      <p className='description'>My cat is working on this page 🐱</p>
      
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right, #FDFBFB, #EBEDEE 70%);
      }
      .title {
        font-family: sans-serif;
        margin: 0;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
        webkit-background-clip: text;
        background-clip: text;
        webkit-text-fill-color: transparent;
        -webkit-background-clip: text;  
        color: transparent;
        font-size: 15vmin;
      }
      .description {
        font-family: sans-serif;
        font-size: 1rem;
      }
    `}</style>
  </div>
)

export default Home
