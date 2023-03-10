import { useState, useEffect, useRef, useContext } from "react";
import { AppContextLioni } from "@/context/AppContext";
import { AppContextLioniType } from "@/types/types.contex";

import Navbar from "@/components/Navbar";

function Layout({
  children,
  imagen,
  isMobile,
}: {
  imagen: string;
  children: React.ReactNode;
  isMobile: boolean;
}) {
  const { leave, calculateAngle, cardRef, reflexRef } = useContext(
    AppContextLioni
  ) as AppContextLioniType;

  return (
    <div onMouseMove={!isMobile ? calculateAngle : undefined} onMouseLeave={!isMobile ? leave : undefined}>
      <div id="card" ref={cardRef} className="cube absolute">
        <span
          id="reflex"
          ref={reflexRef}
          className="face face-reflex absolute w-screen h-screen z-[100]"
        ></span>
        <div className="face float">
          <Navbar />
          {children}
        </div>
        <div className="face front">
          <img
            className="fixed w-screen h-screen object-cover "
            src={imagen}
            alt=""
          />
        </div>
        {!isMobile && (

          <>
              <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
          </>
        )

        }

      </div>
    </div>
  );
}
export default Layout;
