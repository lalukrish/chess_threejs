import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Chess from "./Chess";
import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      //fov is postion of the camera on the shirt
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <Backdrop />
        <Center />
        <Chess />
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
