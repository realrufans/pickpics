import React, { useEffect, useRef, useState } from "react";

function Hover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
     if(ref.current!==null){
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)
     }
    
    return () => {    
       if(ref.current !==null){
        ref.current.removeEventListener("mouseenter", enter)
        ref.current.removeEventListener("mouseleave", leave)
       }
    } 
}, [ref])

return [hovered, ref]
}

export default Hover;
