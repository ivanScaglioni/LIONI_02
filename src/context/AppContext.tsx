import {createContext,  useRef, useState, useEffect} from 'react'
import { AppContextLioniType } from './types.contex';


export const AppContextLioni = createContext<AppContextLioniType | null>(null);

export function AppContextProvider({children}:{children:React.ReactNode}) {
    const [card, setCard] = useState<HTMLDivElement | null>(null);
    const [reflex, setReflex] = useState<HTMLDivElement | null>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const reflexRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        setCard(cardRef.current);
        setReflex(reflexRef.current);
    }, []);

    const calculateAngle = (e: any) => {
        if (!card || !reflex) return;
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
    
        const calcAngleX = (x - halfWidth) / (1.5 * (window.innerWidth / 100));
        const calcAngleY = (y - halfHeight) / (1.5 * (window.innerHeight / 100));
    
        const gX = (1 - x / (halfWidth * 2)) * 100;
        const gY = (1 - y / (halfHeight * 2)) * 100;
    
        // Add the glare at the reflection of where the user's mouse is hovering
        reflex.style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgba(199, 198 ,243 ,0.2), transparent)`;
    
        // Set the cards transform CSS property
    
        card.style.transform = `rotateY(${-calcAngleX}deg) rotateX(${calcAngleY}deg) scale(1.04)`;
    };

    const leave = () => {
        if (card) {
        card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
        card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1.01) translateZ(-4px)`;
        }
    };

    const flip = ()=>{
        
        // card?.style.
    }

  return (
    <AppContextLioni.Provider value={{
        cardRef,
        reflexRef,
        card,
        reflex,
        calculateAngle,
        leave,
        flip
    }}>
        
        {children}

    </AppContextLioni.Provider>
  )
}

