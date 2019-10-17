import React from 'react'
import Head from 'next/head'
import Construccion from '../components/Construccion'


const Home = () => (
  <div>
    <Head>
      <title>daniel.dev</title>
      <link rel='icon' href='/favicon.ico' />
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet"></link>
    </Head>
   <Construccion/>
    
    <style jsx global>{`
      body{
        background: #0D0D0D;
        margin: 0;
        color: #fff;
        font-family: 'Noto Sans', sans-serif;
      }
      .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 739px;

      }


    `}</style>
  </div>
)

export default Home
