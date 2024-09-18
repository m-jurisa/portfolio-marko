import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense } from "react";
import Model from "../components/Model.jsx";
import CanvasLoader from '../components/Loading.jsx';
import Button from '../components/Button.jsx';




const Hero = () => {
  return (
    <section className="hero-section min-h-screen h-full flex flex-col-reverse sm:flex-col relative">
      <div className="max-w-7xl w-full mx-auto flex flex-col mb-32 cspace gap-3 sm:mt-48">
        <p className="sm:text-3xl text-xl font-medium text-center font-general-sans text-white">
          Hi, ich bin Marko <span className="bouncing-emoji">👋</span>
        </p>
        <p className="hero_tag">
          Fachinformatiker für <br />
          Anwendungsentwicklung
        </p>
      </div>

      <div className="absolute inset-0 sm:z-0 sm:mt-48">
        <Canvas className="mt-16 sm:m-0 max-w-[100%] max-h-[70%] m-auto sm:max-h-[100%]">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[-5, 2.5, -3.5]} />
            <ambientLight intensity={2} /> 
            <pointLight position={[10, 10, 10]} />
            <OrbitControls
              enableZoom={false} 
              minDistance={4.15} 
              maxDistance={7.85} 
            />
            <EffectComposer>
              <Bloom
                intensity={20} 
                luminanceThreshold={-0.2} 
                luminanceSmoothing={0.9} 
                height={500} 
              />
              
              <Model />
              
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>
      <div className="max-w-7xl mx-auto absolute bottom-7 left-0 right-0 w.full z-10 c-space">
        <a href="#about" className="w-fit">
            <Button name="Gemeinsam Großes erschaffen!" isBeam containerClass="hover:bg-orange-600/50 hover:text-base hover:font-bold; smm:w-fit w-full sm:min.w-96"	/>
        </a>
      </div>
    </section>
  );
};

export default Hero;
