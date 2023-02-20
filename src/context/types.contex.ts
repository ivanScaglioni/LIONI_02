import { RefObject } from "react"

 export type  AppContextLioniType = {
    cardRef: RefObject<HTMLDivElement>,
    reflexRef: RefObject<HTMLDivElement> ,
    card:HTMLDivElement |null,
    reflex:HTMLDivElement | null,
    calculateAngle:(e:any)=>void,
    leave:()=>void,
    flip:()=>void

 }