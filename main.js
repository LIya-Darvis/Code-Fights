import './style.css';

import * as THREE from 'https://unpkg.com/three@0.148.0/build/three.module.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

// console.log(scene);
// console.log(camera);
// console.log(renderer);

renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x22fafa });
const box = new THREE.Mesh(geometry, material);
scene.add(box);


const orbit = new OrbitControls(camera, renderer.domElement);


const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.set(4, 1, 4);

orbit.update();

renderer.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);

  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
