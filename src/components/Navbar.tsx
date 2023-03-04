import { useContext } from "react";
import { AppContextLioniType } from "@/types/types.contex";
import { AppContextLioni } from "@/context/AppContext";

import {
  RxThickArrowDown,
  RxThickArrowUp,
  RxThickArrowLeft,
  RxThickArrowRight,
} from "react-icons/rx";

function Navbar() {
  const { changeView, changeProject} = useContext(
    AppContextLioni
  ) as AppContextLioniType;

  return (

     <div
      id="navbar"
      className="absolute flex w-full z-50 bottom-0  justify-center "
    >
      
      <div className="grid grid-cols-3 gap-x-3 gap-y-3 grid-rows-2 m-5 hover:cursor-pointer">
        <button
          role="button"
          className="button-67 rounded-full col-start-1 col-end-4  flex justify-self-center"
          onClick={() => changeView("UP")}
        >
          <RxThickArrowUp size={30} />
        </button>

        <button className="button-67" onClick={() => changeProject("LEFT")}>
          <RxThickArrowLeft size={30} />
        </button>

        <button className="button-67 " onClick={() => changeView("HELL")}>
          <RxThickArrowDown size={30} />
        </button>
        <button className="button-67 " onClick={() => changeProject("RIGHT")}>
          <RxThickArrowRight size={30} />
        </button>
      </div>
    </div>

   
  );
}

export default Navbar;
