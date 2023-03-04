import { useEffect, useState, useContext, TouchEvent } from "react";
import Image from "next/image";
import { projectType } from "@/types/types.project";
import { AppContextLioni } from "@/context/AppContext";
import { AppContextLioniType } from "@/types/types.contex";

export default function Projects() {
  const [projects, setProjects] = useState<projectType[] | null>(null);

  const { projectViewRef, changeProject } = useContext(
    AppContextLioni
  ) as AppContextLioniType;

  let coorStart = [0, 0];

  useEffect(() => {
    const data = async () => {
      const res = await fetch(
        "https://sheet.best/api/sheets/6a28288c-03f1-4f51-a250-d62ff29bfa6c"      );
      const allProject = await res.json();
      console.log(allProject)
      setProjects(allProject);
    };
    data();
  
  }, []);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    coorStart[0] = e.changedTouches[0].clientX;
    coorStart[1] = e.changedTouches[0].clientY;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const deltaX = Math.abs(coorStart[0] - e.changedTouches[0].clientX);
    const deltaY = Math.abs(coorStart[1] - e.changedTouches[0].clientY);

    if (deltaY < deltaX && deltaX > 50) {
      if (coorStart[0] - e.changedTouches[0].clientX > 0) {
        changeProject("RIGHT");
      } else {
        changeProject("LEFT");
      }
    }
  };

  return (
    <>
      <div
        id="project"
        className="flex  h-screen w-auto  items-center"
        ref={projectViewRef}
        onTouchEnd={(e) => handleTouchEnd(e)}
        onTouchStart={(e) => handleTouchStart(e)}
      >
        {projects !== null &&
          projects.length > 0 &&
          projects.map((project, index) => (
            <div className="min-w-[100vw]" key={index}>
              <div className=" flex items-start justify-center">
                <div className="project flex  justify-center gap-7  items-center">
                  <div className="img-project min-w-max ">
                    {project.image &&
                        <Image
                        alt=""
                        src={project.image}
                        width={450}
                        height={200}
                      />
                    }
                    
                  </div>

                  <div className="max-w-[450px] min-w-[400px]">


                    <div className="title-project">{project.title}</div>
                    <div className="description-project">
                      {project.description}
                    </div>
                    <div className="links-project flex gap-5 justify-center m-6">
                      {project.website && (
                        <a href={project.website} target="_blank">
                        
                          website
                        </a>
                      )}
                      {project.repo && (
                        <a href={project.repo} target="_blank">
                        
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
