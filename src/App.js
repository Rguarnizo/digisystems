import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./App.css";
import gsap from "gsap";
import NavBar from "./components/NavBar";
import { Torus,SpotLight, OrbitControls} from "@react-three/drei";


function Scene() {
  
  const torus = useRef()
  let phone = useLoader(GLTFLoader, "Models/Phone2/Phone.gltf");
  let camera = useLoader(GLTFLoader, "Models/Camera2/Camera.gltf");

  useEffect(()=>{
    phone.scene.scale.set(0.1,0.1,0.1);
    phone.scene.rotation.set(Math.PI/4,Math.PI,0);
    camera.scene.scale.set(3,3,3);
    camera.scene.rotation.set(0,Math.PI/2,0);

    console.log(phone);
    console.log(camera);
  },[])

  useFrame(()=>{
    phone.scene.rotation.x += 0.01
    phone.scene.rotation.y += 0.01
    camera.scene.rotation.x += 0.01
    camera.scene.rotation.y += 0.01
    phone.scene.position.x -= 0.05
    camera.scene.position.x += 0.05
    if(camera.scene.position.x >= 12){
      camera.scene.position.set(-12,0,0);
    }
    if(phone.scene.position.x <= -11){
      phone.scene.position.set(11,0,0);
    }

  });

  return (
    <>
      <primitive object={phone.scene} />
      <primitive object={camera.scene} />
    </>
  );
}

function App() {

  return (
    <div className="main exo-2">
      <div className="flex m-auto text-center w-min h-screen items-center z-10 t-2xl">
        <span style={{zIndex:2}}>DIGISYS</span><span style={{zIndex:0}}>TEMS</span>
      </div>
      <div className="absolute w-screen h-screen top-0 left-0" style={{zIndex:1}}>
        <Canvas >
        
        {/* <pointLight intensity={1} position={[0,2,0]} visible/>
        <pointLight intensity={1} position={[0,-2,0]} visible/>
        <pointLight intensity={1} position={[2,0,0]} visible/>
        <pointLight intensity={1} position={[-2,0,0]} visible/> */}
        <directionalLight shadow/> 
        <hemisphereLight/>    
          <Suspense fallback={null}>
              <Scene/>
          </Suspense>
        </Canvas>
        <div className="h-screen w-screen"></div>
      </div>
    </div>
  );
}

export default App;
