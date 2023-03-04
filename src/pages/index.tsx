import { useContext, useEffect, useState} from "react"

import Head from "next/head";
import { AppContextLioni } from "@/context/AppContext";
import { AppContextLioniType } from "@/types/types.contex";

import Layout from "@/layout";
import image from "public/code2.jpg";
import Home from "@/components/view/Home";
import Projects from "@/components/view/Projects";
import UAParser from "ua-parser-js";

export default function Lioni() {

  const { elevatorRef } = useContext(
    AppContextLioni
  ) as AppContextLioniType;

  const [isMobil, setIsMobil] = useState(false);

  useEffect(() => {
    // obtener la cadena de agente de usuario del navegador del visitante
    const userAgentString: string = window.navigator.userAgent;

    // analizar la cadena de agente de usuario
    const parser: UAParser = new UAParser(userAgentString);
    const result: UAParser.IResult = parser.getResult();

    // obtener información sobre el dispositivo
    const device: UAParser.IDevice = result.device;

    
    if (result.device.type === "mobile" || result.device.type === "tablet") {
      setIsMobil(true);
    }
   
  }, []);


  const layout = isMobil ? (
    <Layout isMobile={true} imagen={image.src}>
      <div id="elevator" ref={elevatorRef}>
        <Home />
        <Projects />
      </div>
    </Layout>
  ) : (
    <Layout isMobile={false} imagen={image.src}>
      <div id="elevator" ref={elevatorRef}>
        <Home />
        <Projects />
      </div>
    </Layout>
  );




  

  return (
    <>
      <Head>
        <title>Ivan Scaglioi</title>
        <meta name="description" content="web developer fullstack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{layout}</main>
    </>
  );
}
