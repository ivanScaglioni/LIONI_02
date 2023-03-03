import { useEffect, useState,useContext, TouchEvent } from "react";
import Image from "next/image";
import { projectType } from "@/types/types.project";
import { AppContextLioni } from "@/context/AppContext";
import { AppContextLioniType } from "@/types/types.contex";
export default function Projects() {
  const [projects, setProjects] = useState<projectType[] | null>(null);

  const {projectViewRef, changeProject} = useContext(AppContextLioni) as AppContextLioniType;

  const project = {
    title: "goodfood",
    description:
      "esta es la descripcion loremdddd asdasd asasdd ddasdsf sdf sda dsf dsa ",
    repo: "youtube.com",
    website: "github.com",
    image:
      "https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b",
  };

  let coorStart = [0, 0];

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
   
    coorStart[0] = e.changedTouches[0].clientX;
    coorStart[1] = e.changedTouches[0].clientY;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {

    const deltaX = Math.abs(coorStart[0] - e.changedTouches[0].clientX);
    const deltaY = Math.abs(coorStart[1] - e.changedTouches[0].clientY);

    if( deltaY < deltaX && deltaX > 50 ){
     
      if(coorStart[0] - e.changedTouches[0].clientX > 0 ){
        changeProject("RIGHT")
        
      }else{
        changeProject("LEFT")
      }


    }
  };

  return (
    <>

    <div
      id="project"
      className="flex  h-screen w-auto  items-center"
      ref={projectViewRef}
      onTouchEnd={(e)=>handleTouchEnd(e)}
      onTouchStart={(e)=>handleTouchStart(e)}

    >
        <div className="min-w-[100vw]">
          <div className=" flex items-center justify-center">
            <div className="project flex  justify-center  items-center">
                <div className="img-project">
                  <Image alt="" src={project.image} width={450} height={250}/>
                </div>
              
                <div className="max-w-[450px]">
                  <div className="title-project">{project.title}</div>
                  <div className="description-project">{project.description}</div>
                </div>
          
            </div>

          </div>
        </div>
                
        <div className="min-w-[100vw]">
          <div className="flex flex-wrap items-center justify-center">
            <div>

              <Image alt="" src={project.image} width={300} height={100}/>
              <div className="w-92">
                <div>{project.title}</div>
                <div>{project.description}</div>
              </div>
            </div>

          </div>
        </div>

        <div className="min-w-[100vw]">
          <div className="flex flex-col w-full items-center">
          <Image alt="" src={project.image} width={500} height={300}/>
            <div>{project.title}</div>
            <div>{project.description}</div>
          </div>
        </div>
                

        {/* {projects !== null &&
          projects.map((project, index) => (
            <div key={index}>

              <div>{project.title}</div>
            </div>
          ))} */}
      




    </div>
    </>

    
  );
}
