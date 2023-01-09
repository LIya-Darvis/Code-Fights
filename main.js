import './style.css';

import * as THREE from 'https://unpkg.com/three@0.148.0/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// =========== КОНСТАНТЫ ===========

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// =========== ОБЪЕКТЫ ===========

const orbit = new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x22fafa });
const box = new THREE.Mesh(geometry, material);
scene.add(box);




// =========== ОСИ КООРДИНАТ ===========

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// =========== КАМЕРА ===========

camera.position.set(-10, 30, 30);
orbit.update();

// =========== ФИНАЛЬНЫЙ РЕНДЕР ===========

renderer.render(scene, camera);

// =========== АНИМАЦИЯ ===========

function animate() {
  requestAnimationFrame(animate);

  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
