import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Home from "@/components/Home";
import Card from '@/components/Card';
import Layout from '@/layout';
import image from "public/red.jpg"



export default function Lioni() {
  return (
    <>
      <Head>
        <title>Ivan Scaglioi</title>
        <meta name="description" content="web developer fullstack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Layout  imagen={image.src}>

          <Home />
          
        
        </Layout>
        {/* <Card  imagen={image.src} /> */}
      

   

      </main>
    </>
  )
}
