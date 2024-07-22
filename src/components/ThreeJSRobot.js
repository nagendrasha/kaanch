// components/ThreeJSRobot.js
"use client";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const ThreeJSRobot = () => {
  const mountRef = useRef(null);
  const [shape, setShape] = useState('cube');

  useScrollPosition(({ currPos }) => {
    const yPos = currPos.y * -1;
    if (yPos < 500) {
      setShape('cube');
    } else if (yPos < 1000) {
      setShape('coin');
    } else if (yPos < 1500) {
      setShape('brain');
    } else {
      setShape('default');
    }
  });

  useEffect(() => {
    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Robot Shape
    let geometry;
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    if (shape === 'cube') {
      geometry = new THREE.BoxGeometry();
    } else if (shape === 'coin') {
      geometry = new THREE.CylinderGeometry(1, 1, 0.2, 32);
    } else if (shape === 'brain') {
      geometry = new THREE.SphereGeometry();
    } else {
      geometry = new THREE.BoxGeometry(); // Default shape
    }

    const robot = new THREE.Mesh(geometry, material);
    scene.add(robot);

    // Animation
    const animate = function () {
      requestAnimationFrame(animate);

      robot.rotation.x += 0.01;
      robot.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, [shape]);

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
};

export default ThreeJSRobot;
