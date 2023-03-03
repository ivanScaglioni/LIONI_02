import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useContext, useEffect, useState } from "react";
import { AppContextLioni } from "@/context/AppContext";
import { AppContextLioniType } from "@/types/types.contex";
import Layout from "@/layout";
import image from "public/code2.png";
import Home from "@/components/view/Home";
import Projects from "@/components/view/Projects";


import { TouchEvent } from "react";

export default function Lioni() {
  const { elevatorRef, changeView } = useContext(AppContextLioni) as AppContextLioniType;

  let coorStart = [0, 0];

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
   
    coorStart[0] = e.changedTouches[0].clientX;
    coorStart[1] = e.changedTouches[0].clientY;
  
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {

    const deltaX = Math.abs(coorStart[0] - e.changedTouches[0].clientX);
    const deltaY = Math.abs(coorStart[1] - e.changedTouches[0].clientY);

    if( deltaY > deltaX && deltaY > 50 ){
     
      if(coorStart[1] - e.changedTouches[0].clientY > 0 ){

        changeView("UP")

      }else{

        changeView("HELL")

      }
    }
  };

  return (
    <>
      <Head>
        <title>Ivan Scaglioi</title>
        <meta name="description" content="web developer fullstack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
   
        <Layout imagen={image.src}>

          <div
            id="elevator"
            ref={elevatorRef}
            onTouchEnd={(e) => handleTouchEnd(e)}
            onTouchStart={(e) => handleTouchStart(e)}
      
          >
 
            <Home  />


            <Projects />
          </div>
        </Layout>
      </main>
    </>
  );
}
