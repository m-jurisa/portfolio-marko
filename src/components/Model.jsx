import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Model = () => {
  const modelRef = useRef();
  const { scene, error } = useGLTF('/models/gltf/PrimaryIonDrive.glb', true);

  useEffect(() => {
    if (error) {
      console.error('Error loading model:', error);
    }
    if (scene) {
      modelRef.current = scene; // Set the model reference
    }
  }, [scene, error]);

  useFrame(() => {
    if (modelRef.current) {
      // Check if children exist before applying rotations
      if (modelRef.current.children.length > 0) {
        modelRef.current.rotation.y += 0.01; // Rotate the whole model

        // Rotate specific children (ensure index exists)
        if (modelRef.current.children[0]) {
          modelRef.current.children[0].rotation.x += 0.01;
        }

        if (modelRef.current.children[3]) {
          modelRef.current.children[3].rotation.y -= 0.01;
        }
      }
    }
  });

  if (!scene) return null; // Render nothing if the model isn't ready

  return <primitive object={scene} />;
};

export default Model;
