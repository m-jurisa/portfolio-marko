import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Model = () => {
  const modelRef = useRef();
  const { scene, error } = useGLTF('/models/PrimaryIonDrive.glb', true);

  useEffect(() => {
    if (error) {
      console.error('Error loading model:', error);
    }
    if (scene) {
      modelRef.current = scene; 
    }
  }, [scene, error]);


  function applyRotationRecursively(object) {
    if (object.name === 'circle') {
        object.rotation.x -= 0.005;
    }
  
    if (object.name === 'geo1') {
        object.rotation.z -= 0.005;  

    }
  
    if (object.name === 'circle1') {
        object.rotation.x += 0.01;  

    }
  
    if (object.name === 'circle2') {
        object.rotation.x -= 0.03;  

    }
  
    if (object.children && object.children.length > 0) {
      object.children.forEach((child) => {
        applyRotationRecursively(child);
      });
    }
  }
  
  useFrame(() => {
    if (modelRef.current) {
      const rootNode = modelRef.current.children[0]; // RootNode
  
      modelRef.current.rotation.y += 0.012;
  
      // Apply rotation recursively to all children
      applyRotationRecursively(rootNode);
    }
  });
  
  


  if (!scene) return null; // Render nothing if the model isn't ready

  return <primitive object={scene} />;
};

export default Model;
