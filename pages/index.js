import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Header from '../components/Header'


const Home = () => (
  <div>
    <Head>
      <title>daniel.dev</title>
      <link rel='icon' href='/favicon.ico' />
      <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap" rel="stylesheet"></link>
    </Head>
    <Nav/>
    <Header/>

    
    <style jsx global>{`
      body{
        background: #ffffff;
        margin: 0;
        font-family: 'Noto Sans', sans-serif;
        padding: 0;
      }
      }


    `}</style>
  </div>
)

export default Home
