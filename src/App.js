import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./App.css";
import gsap from "gsap";
import NavBar from "./components/NavBar";
import { Torus, SpotLight, OrbitControls } from "@react-three/drei";

function Scene() {
  const torus = useRef();
  let phone = useLoader(GLTFLoader, "Models/Phone2/Phone.gltf");
  let camera = useLoader(GLTFLoader, "Models/Camera2/Camera.gltf");
  let alarm = useLoader(GLTFLoader, "Models/Alarm/Alarm.gltf");
  let keyboard = useLoader(GLTFLoader, "Models/Alarm/Keyboard.gltf");
  let time = useLoader(GLTFLoader, "Models/Alarm/Time.gltf");

  useEffect(() => {
    alarm.scene.scale.set(15, 15, 15);
    time.scene.rotation.set(0, -Math.PI / 6, 0);
    time.scene.scale.set(15, 15, 15);
    keyboard.scene.rotation.set(0, Math.PI / 6, 0);
    keyboard.scene.scale.set(15, 15, 15);
  }, []);

  useFrame(() => {
    alarm.scene.rotation.x += 0.01;
    alarm.scene.rotation.y += 0.01;
    alarm.scene.rotation.z += 0.01;

    time.scene.rotation.x += 0.01;
    time.scene.rotation.y += 0.01;
    time.scene.rotation.z += 0.01;

    keyboard.scene.rotation.z += 0.01;
    keyboard.scene.rotation.x += 0.01;
    keyboard.scene.rotation.y += 0.01;

    time.scene.position.x -= 0.05;
    keyboard.scene.position.x += 0.03;
    alarm.scene.position.x -= 0.04;

    if (keyboard.scene.position.x >= 12) {
      keyboard.scene.position.set(-12, 0, 0);
    }
    if (time.scene.position.x <= -11) {
      time.scene.position.set(11, 0, 0);
    }
    if (alarm.scene.position.x <= -11) {
      alarm.scene.position.set(11, 0, 0);
    }
  });

  return (
    <>
      <primitive object={time.scene} />
      <primitive object={keyboard.scene} />
      <primitive object={alarm.scene} />
    </>
  );
}

function App() {
  return (
    <div className="main exo-2">
      <h3 className="flex m-auto text-center w-min h-screen items-center z-10 t-2xl">
        <span style={{ zIndex: 2 }}>DIGISYS</span>
        <span style={{ zIndex: 0 }}>TEMS</span>
      </h3>
      <div className="absolute top-0 right-0 m-16 text-2xl z-40">
        <a href="#contacto">Contactenos</a>
      </div>
      <section
        className="absolute w-screen h-screen top-0 left-0"
        style={{ zIndex: 1 }}
      >
        <Canvas>
          {/* <pointLight intensity={1} position={[0,2,0]} visible/>
        <pointLight intensity={1} position={[0,-2,0]} visible/>
        <pointLight intensity={1} position={[2,0,0]} visible/>
        <pointLight intensity={1} position={[-2,0,0]} visible/> */}
          <directionalLight shadow />
          <hemisphereLight />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </section>
      <section id="Servicios" className="h-auto w-screen relative">

          <img
            className="object-scale-down top-0 left-0"
            src={"citofono.jpg"}
            title="citofonos"
          ></img>
          <div className="w-max px-10 t-l absolute top-0 left-0 text-white">
            <h2>
              Suministro <br /> Instalación <br /> Reparación
            </h2>
          </div>
          <h1 className="t-m flex text-center">
            <div className="divider flex-1">Citofonos</div>
            <div className="divider flex-1">Camaras CCTV</div>
            <div className="divider flex-1">Alarmas</div>
          </h1>
        

        <div className="flex space-x-10 m-auto my-20">
          <h4 className="t-s text-right flex-1">
            Trabajamos con las mejores<br/> tecnologías del mercado,
            <br /> con el mejor diseño y <br /> al mejor precio.
          </h4>
          <div className="flex-1"><img src="VideoCitofono.jpeg" className="object-scale-down" alt="" /></div>
        </div>
        <div className="flex w-screen items-center px-10 py-5">
          <div className="h-full flex-1">
            <img className="object-scale-down " src="elvox.png" alt="elvox" />
          </div>
          <div className="h-full flex-1">
            <img
              className="object-scale-down "
              src="aiphone.png"
              alt="aiphone"
            />
          </div>
          <div className="h-full flex-1">
            <img
              className="object-scale-down "
              src="intelbras.png"
              alt="intelbras"
            />
          </div>
          <div className="h-full flex-1">
            <img
              className="object-scale-down "
              src="bticino.png"
              alt="bticino"
            />
          </div>
        </div>
        <div className="flex w-screen items-center px-10 my-10">
          <div className="h-full flex-1">
            <img
              className="object-scale-down "
              src="panasonic.png"
              alt="panasonic"
            />
          </div>
          <div className="h-full flex-1">
            <img className="object-scale-down " src="fermax.png" alt="fermax" />
          </div>
          <div className="h-full flex-1">
            <img
              className="object-scale-down "
              src="hikvision.png"
              alt="hikvision "
            />
          </div>
          <div className="h-full flex-1 justify-center flex">
            <img className="object-scale-down " src="sonika.png" alt="sonika" />
          </div>
        </div>
      </section>      



      <footer id="#contacto" class="p-10 footer bg-base-200 text-base-content">
  <div >
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current">
      <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg> 
    <p><span className="text-2xl">Digisystems </span>
      <br/>30 años de experiencia
    </p>
  </div> 
  <div>
    <span class="footer-title">Servicios</span> 
    <a class="link link-hover">Camaras CCTV</a> 
    <a class="link link-hover">Alarmas</a> 
    <a class="link link-hover">Citofonos</a> 
    <a class="link link-hover">Control de acceso</a>
  </div> 
  <div>
    <span class="footer-title">Contactenos</span> 
    <a class="link link-hover">Celular: 3005515256</a> 
    <a class="link link-hover">Telefono: 2938888</a> 
    <a class="link link-hover">Correo: Joseurielguarnizo@hotmail.com</a> 
  </div> 
  <div>
    <span class="footer-title">Otros servicios</span> 
    <a class="link link-hover">Software</a> 
    <a class="link link-hover">Paginas web</a> 
    <span class="footer-title"></span> 
  </div>
</footer>

    </div>
  );
}

export default App;
