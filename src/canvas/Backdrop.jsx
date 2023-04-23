import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import React, { useRef } from "react";

const Backdrop = () => {
  const shadows = useRef();
  return (
    //shawods
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      //black shadows behind the shirt postion and the light
      <RandomizedLight
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
