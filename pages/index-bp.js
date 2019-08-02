import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

import "../assets/css/main.scss";

const Home = () => ( <
    div >
    <
    Head >
    <
    link rel = "icon"
    href = "../static/favicon.ico"
    sizes = "32x32"
    type = "image/png" / >
    <
    title > 🐱Chetito < /title> <
    /Head>

    <
    div className = 'hero' >

    <
    h1 className = 'title' > Sorry < /h1> <
    p className = 'description' > My cat is working on this web page🐱 < /p>

    <
    /div>

    <
    style jsx > {
        `
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
        background: linear-gradient(270deg, #30cfd0, #fb6767, #8a80d7, #d7b680);
        background-size: 800% 800%;
        animation: AnimationName 15s ease infinite;
        font-family: sans-serif;
        margin: 0;
        text-align: center;
        text-transform: uppercase;
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
      @-webkit-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
      }
      @-moz-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
      }
      @keyframes AnimationName { 
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
      }
    `
    } < /style> <
    /div>
)

export default Home
