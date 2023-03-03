import { RefObject } from "react";

export type AppContextLioniType = {
  cardRef: RefObject<HTMLDivElement>;
  reflexRef: RefObject<HTMLDivElement>;
  card: HTMLDivElement | null;
  reflex: HTMLDivElement | null;
  elevatorRef: RefObject<HTMLDivElement>;
  projectViewRef: RefObject<HTMLDivElement>;
  homeRef:RefObject<HTMLDivElement>;
  changeView: (view: string) => void;
  changeProject: (accion: string) => void;
  calculateAngle: (e: React.MouseEvent<HTMLDivElement>) => void;
  leave: () => void;
};
