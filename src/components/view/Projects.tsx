import { useEffect, useState, useContext, TouchEvent } from "react";
import Image from "next/image";
import { projectType } from "@/types/types.project";
import { AppContextLioni } from "@/context/AppContext";
import { AppContextLioniType } from "@/types/types.contex";
import projectsDB from "@/db/projects.json";

interface Project {
  title: string;
  description: string;
  image: string;
  repo?: string | null;
  website?: string | null;
}

export default function Projects() {

  const [projects, setProjects] = useState(projectsDB);

  const { projectViewRef, changeProject } = useContext(
    AppContextLioni
  ) as AppContextLioniType;

  let coorStart = [0, 0];

  useEffect(() => {
    const data = async () => {
      const res = await fetch(
        "https://sheet.best/api/sheets/6a28288c-03f1-4f51-a250-d62ff29bfa6c"
      );
      
      if (res.status < 400) {
        const allProject = await res.json();
        setProjects(allProject);
      }
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
                <div className="project flex  ">
                  <div className="img-project min-w-max  h-full object-cover">
                    {project.image && (
                      <Image
                        className="object-cover img-project"
                        alt=""
                        src={project.image}
                        width={450}
                        height={200}
                      />
                    )}
                  </div>

                  <div className="body max-w-[450px] min-w-[400px] flex flex-wrap">
                    <div className="title-project">{project.title}</div>

                    <div className="description-project">
                      {project.description}
                    </div>

                        <div className="links-project flex">
                          {project.website && (
                            <a
                              href={project.website}
                              className="link"
                              target="_blank"
                              rel="noreferrer"
                            >
                              WebSite
                            </a>
                          )}

                          {project.repo && (
                            <a
                              href={project.repo}
                              className="link"
                              target="_blank"
                              rel="noreferrer"
                            >
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
