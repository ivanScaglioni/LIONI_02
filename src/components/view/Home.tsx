

import { useContext } from "react";
import { AppContextLioni } from "@/context/AppContext"
import {  AppContextLioniType } from "@/types/types.contex"
import {BsGithub,BsLinkedin,BsTelegram  } from "react-icons/bs"
import { MdAlternateEmail } from "react-icons/md"






export default function Home() {


  const {homeRef} = useContext(AppContextLioni) as AppContextLioniType;
  

  return (
    <>
      <div id='home' className='flex w-screen h-screen justify-center items-center -z-10'>
        
        <div className="card-home rounded-lg " ref={homeRef} draggable={true} >
          
          
          <div className="name  font-bold rounded-md  text-5xl">
            IVAN SCAGLIONI
          </div>

          


          <div className="web flex  justify-center rounded-sm  text-lg ">
            web developer
          </div>
    

    
          <div className="flex w-full place-content-around">
            <a className="icon" href="https://github.com/ivanScaglioni" target="_blank" rel="noopener noreferrer">
            <BsGithub  size={40}  />  
            </a>

          <a className="icon" href="https://www.linkedin.com/in/ivan-scaglioni-6b7719221/" target="_blank" rel="noopener noreferrer">
           <BsLinkedin size={40} />
           </a>

           <a className="icon" href="mailto:ivanscargentino@gmail.com">
           <MdAlternateEmail  size={40} />
           </a>


            <a className="icon" href="https://t.me/IvanScaglioni" target="_blank" rel="noopener noreferrer">
            <BsTelegram  size={40} />
           
            </a>

           


          </div>

        </div >
          
      </div>
        
    </>
  )
}

