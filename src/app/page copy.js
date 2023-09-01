"use client"
import React,{useEffect,useState} from "react";
import ScrollControllerGlobal from "../../CorgiUI/Controller/ScrollControllerGlobal";
import MovingMotion from "../../CorgiUI/Motion/MovingMotion";
import CorgiDiv from "../../CorgiUI/Components/CorgiDiv";

export default function Homepage() {

  const [scrollController, setScrollController] = useState(
    new ScrollControllerGlobal
  );

  return (
    <div className = "absolute w-[100vw] h-[100vh] bg-white">

     <CorgiDiv className= "absolute w-[200px] h-[200px] bg-black top-[200px] left-[200px] rotate-12 origin-center"
        motions={[
          {
            input: scrollController,
            motion: new MovingMotion(
              20,
              30,
              "px",
              0,
              0.8,
              [0.39, 0.575, 0.565, 1]
            ),
          }
        ]}
     >
     </CorgiDiv>
    </div>

  )
}
