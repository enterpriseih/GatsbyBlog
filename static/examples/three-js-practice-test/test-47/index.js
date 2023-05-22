import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const fov = 75;
  const aspect = 2; // the canvas default
  const near = 1.1;
  const far = 20;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 7;

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0, 0);
  controls.update();

  const scene = new THREE.Scene();

  {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  const labelContainerElem = document.querySelector('#labels');

  function makeInstance(geometry, color, x, name) {
    const material = new THREE.MeshPhongMaterial({ color });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.x = x;

    const elem = document.createElement('div');
    elem.textContent = name;
    labelContainerElem.appendChild(elem);

    return { cube, elem };
  }

  const cubes = [
    makeInstance(geometry, 0x44aa88, 0, 'Aqua Colored Box'),
    makeInstance(geometry, 0x8844aa, -2, 'Purple Colored Box'),
    makeInstance(geometry, 0xaa8844, 2, 'Gold Colored Box')
  ];

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

  const tempV = new THREE.Vector3();
  const raycaster = new THREE.Raycaster();

  function render(time) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    cubes.forEach((cubeInfo, ndx) => {
      const { cube, elem } = cubeInfo;
      const speed = 1 + ndx * 0.1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;

      // get the position of the center of the cube
      cube.updateWorldMatrix(true, false);
      cube.getWorldPosition(tempV);

      // get the normalized screen coordinate of that position
      // x and y will be in the -1 to +1 range with x = -1 being
      // on the left and y = -1 being on the bottom
      tempV.project(camera);

      // ask the raycaster for all the objects that intersect
      // from the eye toward this object's position
      raycaster.setFromCamera(tempV, camera);
      const intersectedObjects = raycaster.intersectObjects(scene.children);
      // We're visible if the first intersection is this object.
      const show = intersectedObjects.length && cube === intersectedObjects[0].object;

      if (!show || Math.abs(tempV.z) > 1) {
        // hide the label
        elem.style.display = 'none';
      } else {
        // unhide the label
        elem.style.display = '';

        // convert the normalized position to CSS coordinates
        const x = (tempV.x * 0.5 + 0.5) * canvas.clientWidth;
        const y = (tempV.y * -0.5 + 0.5) * canvas.clientHeight;

        // move the elem to that position
        elem.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;

        // set the zIndex for sorting
        elem.style.zIndex = ((-tempV.z * 0.5 + 0.5) * 100000) | 0;
      }
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
