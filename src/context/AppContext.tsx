import {
  createContext,
  useRef,
  useState,
  useEffect,
TouchEvent
} from "react";

import { AppContextLioniType } from "../types/types.contex";

export const AppContextLioni = createContext<AppContextLioniType | null>(null);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // cubo 3D
  const [card, setCard] = useState<HTMLDivElement | null>(null);
  const [reflex, setReflex] = useState<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const reflexRef = useRef<HTMLDivElement>(null);
  //home
  const [home, setHome] = useState<HTMLDivElement | null>(null)
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCard(cardRef.current);
    setReflex(reflexRef.current);
    setElevator(elevatorRef.current);
    setProjectView(projectViewRef.current);
    setHome(homeRef.current);
    // window.addEventListener("keydown",(e)=>(handleKeyDown(e)))
    
  }, []);

  const calculateAngle = (e: React.MouseEvent<HTMLDivElement>) => {
    
    
    
    if (!card || !reflex || !home) return;
    // if (!card) return;
    // Get the x position of the users mouse, relative to the button itself
    const x = Math.abs(card.getBoundingClientRect().x - e.clientX);
    // Get the y position relative to the button
    const y = Math.abs(card.getBoundingClientRect().y - e.clientY);
    // Calculate half the width and height
    const halfWidth = card.getBoundingClientRect().width / 2;
    const halfHeight = card.getBoundingClientRect().height / 2;
    // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
    // Changing these numbers will change the depth of the effect.
    const calcAngleX = (x - halfWidth) / (1 * (window.innerWidth / 100));
    const calcAngleY = (y - halfHeight) / (1.5 * (window.innerHeight / 100));
    const gX = (1 - x / (halfWidth * 2)) * 100;
    const gY = (1 - y / (halfHeight * 2)) * 100;
    // Add the glare at the reflection of where the user's mouse is hovering
    reflex.style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgba(199, 198 ,243 ,0.2), transparent)`;
    // Set the cards transform CSS property
    card.style.transform = `rotateY(${-calcAngleX}deg) rotateX(${calcAngleY}deg) scale(1.04)`;
    home.style.transform = `rotateY(${-calcAngleX}deg) rotateX(${calcAngleY}deg) scale(1.04)`;
  };

  const leave = () => {
    if (card && home) {

      card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1.01) translateZ(-4px)`;
      home.style.transform = `rotateY(0deg) rotateX(0deg) scale(1.01) translateZ(-4px)`;
    }
  };



  // variables y constantes para poder cambiar los projectos en la app
  const countProject = 3; // home and projects
  let currentProject = 0;



  const [projectView, setProjectView] = useState<HTMLDivElement | null>(null);
  const projectViewRef = useRef<HTMLDivElement>(null);

  const changeProject = (accion: string) => {
    if(currentView != 1) return;
    if (!projectView) return;
    if (accion === "LEFT") {
      if (currentProject === 0) {
        projectView.style.transform = `translateX(${(countProject-1)*(-100)}vw)`;
        currentProject = countProject - 1;

      } else {

        currentProject--;
        projectView.style.transform = `translateX(${currentProject*(-100)}vw)`;

      }
    } else {
      if (currentProject === countProject - 1) {
        projectView.style.transform = `translateX(0%)`;
        currentProject = 0;

      } else {

        currentProject++;
          projectView.style.transform = `translateX(${ currentProject*(-100)}vw)`;
  
     }


    }



  };

  // variables y constantes para poder subir y bajar en la app

  const [elevator, setElevator] = useState<HTMLDivElement | null>(null);
  const elevatorRef = useRef<HTMLDivElement>(null);
  const countView = 2; // home and projects
  let currentView = 0;



  const changeView = (accion: string) => {
  
    if (!elevator) return;
    if (accion === "UP") {
      if (currentView === 0) {

        elevator.style.transform = `translateY(${(countView-1) *(-100)}vh)`;
        currentView = countView - 1;
    
     
      } else {

        currentView--;
        elevator.style.transform = `translateY(${currentView * (-100)}vh)`;
  
      }
    } else {

      if (currentView == countView-1) {
        elevator.style.transform = `translateY(0%)`;
        currentView = 0

      } else {
  
        currentView++;
        elevator.style.transform = `translateY(${currentView*(-100)}vh)`;

      }
    }


  };



  return (
    <AppContextLioni.Provider
      value={{
        elevatorRef,
        cardRef,
        reflexRef,
        projectViewRef,
        homeRef,
        card,
        reflex,
        changeView,
        changeProject,
        calculateAngle,
        leave,
      }}
    >
      {children}
    </AppContextLioni.Provider>
  );
}
