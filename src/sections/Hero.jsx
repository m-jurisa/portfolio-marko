import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useFrame } from '@react-three/fiber';





import Model from '../components/Model.jsx'; 


const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col-reverse sm:flex-col relative ">

            <div className="w-full mx-auto flex flex-col mb-32 cspace gap-3 sm:mt-32">
                 
                    <p className="sm:text-3xl text-xl font-medium text-center font-general-sans text-white">
                    Hi, ich bin Marko <span className="bouncing-emoji">👋</span>
                    </p>
                    <p className="hero_tag"> Fachinformatiker für <br />
                    Anwendungsentwicklung</p> 
            </div>
            <div className="absolute inset-0 sm:z-0 sm:mt-48 ">
        <Canvas className=" mt-16 max-w-[100%] max-h-[70%] m-auto sm:max-h-[100%]">
          <PerspectiveCamera makeDefault position={[-5, 2.5, -3.5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} />
          <EffectComposer>
                    <Bloom
                        intensity={15}  // Adjust the strength of the bloom effect
                        luminanceThreshold={-1}  // Set the threshold for the effect
                        luminanceSmoothing={0.9}  // Smooth out the bloom
                        height={500}  // Height of the bloom effect
  />
                     <Model className=""/>
            </EffectComposer>
        </Canvas>
      </div>
     
        </section>
    );
};

export default Hero;
