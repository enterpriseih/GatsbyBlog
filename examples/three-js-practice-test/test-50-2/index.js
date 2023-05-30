import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const fov = 75;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 2, 5);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 2, 0);
  controls.minPolarAngle = 0;
  controls.maxPolarAngle = Math.PI / 2;
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('lightblue');

  function addLight(position) {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(...position);
    scene.add(light);
    scene.add(light.target);
  }

  addLight([-3, 1, 1]);
  addLight([2, 1, 0.5]);

  const trunkRadius = 0.2;
  const trunkHeight = 1;
  const trunkRadialSegments = 12;
  const trunkGeometry = new THREE.CylinderGeometry(trunkRadius, trunkRadius, trunkHeight, trunkRadialSegments);

  const topRadius = trunkRadius * 4;
  const topHeight = trunkHeight * 2;
  const topSegments = 12;
  const topGeometry = new THREE.ConeGeometry(topRadius, topHeight, topSegments);

  const trunkMaterial = new THREE.MeshPhongMaterial({ color: 'brown' });
  const topMaterial = new THREE.MeshPhongMaterial({ color: 'green' });

  function makeTree(x, z) {
    const root = new THREE.Object3D();
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = trunkHeight / 2;
    root.add(trunk);

    const top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.y = trunkHeight + topHeight / 2;
    root.add(top);

    root.position.set(x, 0, z);
    scene.add(root);

    return root;
  }

  for (let z = -50; z <= 50; z += 10) {
    for (let x = -50; x <= 50; x += 10) {
      makeTree(x, z);
    }
  }

  // add ground
  {
    const size = 400;
    const geometry = new THREE.PlaneGeometry(size, size);
    const material = new THREE.MeshPhongMaterial({ color: 'gray' });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = Math.PI * -0.5;
    scene.add(mesh);
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;

    if (needResize) {
      renderer.setSize(width, height, false);
    }

    return needResize;
  }

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
