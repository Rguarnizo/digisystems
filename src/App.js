import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./App.css";
import gsap from "gsap";
import NavBar from "./components/NavBar";

function Phone() {
  let gltf = useLoader(GLTFLoader, "Models/Phone/Phone.gltf");

  useEffect(() => {
    gltf.scene.scale.set(25, 25, 25);
    gltf.scene.position.set(-0.5, -0.5, 0);
    gltf.scene.rotation.set(Math.PI / 6, -Math.PI / 4, 0);
  });

  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
}

function App() {
  const venueImageWrap = useRef();
  const venueImage = useRef();

  useEffect(() => {
    venueImageWrap.current = document.querySelector(".container-img-wrap");
    venueImage.current = document.querySelector(".container-img");
    let services = gsap.utils.toArray(".service");
    services.forEach((service) => {
      service.addEventListener("mouseenter", venueHover);
      service.addEventListener("mouseleave", venueHover);
      service.addEventListener("mousemove", moveVenueImage);
    });
  }, []);

  function moveVenueImage(e) {
    let xpos = e.clientX;
    let ypos = e.clientY;
    const tl = gsap.timeline();
    tl.to(venueImageWrap.current, {
      x: xpos,
      y: ypos,
    });
  }

  function venueHover(e) {
    if (e.type === "mouseenter") {
      const targetImage = e.target.dataset.class;
      const tl = gsap.timeline();
      tl.set(venueImage.current, {
        backgroundImage: `url(/${targetImage}.jpg)`,
      }).to(venueImageWrap.current, {
        duration: 0.5,
        autoAlpha: 1,
      });
    } else if (e.type === "mouseleave") {
      const tl = gsap.timeline();
      tl.to(venueImageWrap.current, {
        duration: 0.5,
        autoAlpha: 0,
      });
    }
  }

  return (
    <>
      <NavBar />

      <div className="w-max m-auto text-center">
        <div className="text-r exo-2 cursor-pointer visible">
          <div className="container-img-wrap">
            <div className="container-img"></div>
          </div>
          <div className="service" data-class="Citofono">
            <span className="services" data-class="Citofono">
              Citofonos <br />
            </span>
          </div>
          <div className="service" data-class="Camara">
            <span className="services" data-class="Camara">
              Camaras (CCTV) <br />
            </span>
          </div>
          <div className="service" data-class="Alarma">
            <span className="services" data-class="Alarma">
              Alarmas <br />
            </span>
          </div>
          <div className="service" data-class="Access">
            <span className="services" data-class="Access">
              Control de Acceso
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
