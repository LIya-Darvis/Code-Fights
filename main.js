import './style.css';

import * as THREE from 'https://unpkg.com/three@0.148.0/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

// console.log(scene);
// console.log(camera);
// console.log(renderer);

renderer.setSize(innerWidth, innerHeight);
document.body.appendChild( renderer.domElement );
renderer.render( scene, camera );


			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry( 2, 3, 1.5 );
			const material = new THREE.MeshBasicMaterial( { color: 0x22fafa } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

      // cube.rotation.x += 54;
			// cube.rotation.y += 23;
			// cube.rotation.z += 13;

      renderer.render( scene, camera );

			function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();
