
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function CyberpunkBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    
    // Create a grid of neon lines (representing a digital world)
    const gridSize = 20;
    const gridDivisions = 20;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0xa259ff, 0x00f7ff);
    scene.add(gridHelper);
    gridHelper.position.y = -2;
    gridHelper.rotation.x = Math.PI / 8;
    
    // Add VR headset wireframe model
    const vrHeadsetGeometry = new THREE.SphereGeometry(1, 16, 16);
    const wireframeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffd700, 
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const vrHeadset = new THREE.Mesh(vrHeadsetGeometry, wireframeMaterial);
    scene.add(vrHeadset);
    
    // Add floating particles representing data/digital elements
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 15;
      posArray[i + 1] = (Math.random() - 0.5) * 15;
      posArray[i + 2] = (Math.random() - 0.5) * 15;
      
      // Colors - alternate between purple, teal and gold
      const colorChoice = Math.floor(Math.random() * 3);
      if (colorChoice === 0) {
        // Purple
        colorsArray[i] = 0.64; // r (162/255)
        colorsArray[i + 1] = 0.35; // g (89/255)
        colorsArray[i + 2] = 1.0; // b (255/255)
      } else if (colorChoice === 1) {
        // Teal
        colorsArray[i] = 0.0; // r
        colorsArray[i + 1] = 0.97; // g (247/255)
        colorsArray[i + 2] = 1.0; // b (255/255)
      } else {
        // Gold
        colorsArray[i] = 1.0; // r
        colorsArray[i + 1] = 0.85; // g (215/255)
        colorsArray[i + 2] = 0.0; // b
      }
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    
    const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleMesh);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Mouse tracking handler
    const handleMouseMove = (event: MouseEvent) => {
      // Calculate normalized mouse coordinates (-1 to 1)
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({ x, y });
    };
    
    // Add mouse event listener
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate grid slightly based on mouse position
      gridHelper.rotation.z += 0.001;
      gridHelper.rotation.y = mousePosition.x * 0.1;
      gridHelper.rotation.x = Math.PI / 8 + mousePosition.y * 0.1;
      
      // VR headset follows mouse
      vrHeadset.rotation.y += 0.005;
      vrHeadset.rotation.x += 0.002;
      vrHeadset.position.x = mousePosition.x * 1.5;
      vrHeadset.position.y = mousePosition.y * 1.5;
      
      // Particles follow mouse subtly
      particleMesh.rotation.y += 0.0005;
      particleMesh.position.x = mousePosition.x * 0.8;
      particleMesh.position.y = mousePosition.y * 0.8;
      
      // Camera slight movement with mouse for parallax effect
      camera.position.x = mousePosition.x * 0.5;
      camera.position.y = mousePosition.y * 0.5;
      camera.lookAt(scene.position);
      
      // Pulse effect for particles
      const time = Date.now() * 0.0005;
      particlesMaterial.size = 0.05 + 0.03 * Math.sin(time);
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      vrHeadsetGeometry.dispose();
      wireframeMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [mousePosition]);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 -z-10" 
      style={{ pointerEvents: "none" }}
    />
  );
}
