import * as THREE from 'three'
import {
  OrbitControls,
  OrthographicCamera,
  Shadow,
  Text,
} from "@react-three/drei";
import { useMemo, useRef } from "react";
import { Canvas, createPortal, useFrame } from "react-three-fiber";

import Main from "../../components/organisms/Main";
import './about.css'
function Sphere({ children }) {
  const cam = useRef();
  const [scene, target] = useMemo(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("white");
    const target = new THREE.WebGLMultisampleRenderTarget(2048, 2048, {
      format: THREE.RGBFormat,
      stencilBuffer: false,
    });
    target.samples = 8;
    return [scene, target];
  }, []);

  useFrame((state) => {
    state.gl.setRenderTarget(target);
    state.gl.render(scene, cam.current);
    state.gl.setRenderTarget(null);
  });

  return (
    <>
      <OrthographicCamera ref={cam} position={[0, 0, 10]} zoom={5} />
      {createPortal(
        <Text
          color="#171717"
          fontSize={4}
          maxWidth={500}
          lineHeight={1.5}
          letterSpacing={0.1}
          textAlign="center"
          text={children}
        
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
        >
          {children}
        </Text>,
        scene
      )}
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
        <meshStandardMaterial attach="material" map={target.texture} />
      </mesh>
      {/* <Shadow
        scale={[2, 2, 1]}
        opacity={0.2}
        position={[0, -2.1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      /> */}
      {/* <Shadow
        color="#C12020"
        scale={[4, 4, 1]}
        opacity={0.2}
        position={[0, -2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      /> */}
    </>
  );
}

const About = () => {
  return (
    <Main>
      <Canvas
        colorManagement
        pixelRatio={window.devicePixelRatio}
        camera={{ position: [0, 0, 10], fov: 20}}
      >
        <ambientLight intensity={0.75} />
        <spotLight position={[10, 10, 10]} angle={0.2} color="red" penumbra={1} intensity={2}/>
        <pointLight position={[-10, -10, -5]} color="blue" intensity={1.5} />
        <pointLight position={[0, -10, 0]} color="black" intensity={2.5} />
        
        <Sphere>
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
            Nhìn cái đb  Nhìn cái đb  Nhìn cái đb  Nhìn cái đb 
        </Sphere>
        <OrbitControls />
      </Canvas>
    </Main>
  );
};
export default About;
