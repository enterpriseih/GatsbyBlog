import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const fov = 75;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 25;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0.5, 1, 0.5);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0, 0);
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('white');

  function addLight(x, y, z) {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(x, y, z);
    scene.add(light);
  }
  addLight(-1, 2, 4);
  addLight(1, -1, -2);

  const planeWidth = 1;
  const planeHeight = 1;
  const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);

  const loader = new THREE.TextureLoader();

  function makeInstance(geometry, color, rotY, url) {
    const texture = loader.load(url, render);
    const material = new THREE.MeshPhongMaterial({
      color,
      map: texture,
      alphaTest: 0.5,
      transparent: true,
      side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    mesh.rotation.y = rotY;
  }

  makeInstance(geometry, 'white', 0, '/GATSBY_PUBLIC_DIR/images/tree-01.png'); /* threejs.org: url */
  makeInstance(geometry, 'white', Math.PI * 0.5, '/GATSBY_PUBLIC_DIR/images/tree-02.png'); /* threejs.org: url */

  class AllMaterialPropertyGUIHelper {
    constructor(prop, scene) {
      this.prop = prop;
      this.scene = scene;
    }

    get value() {
      const { scene, prop } = this;
      let v;
      scene.traverse((obj) => {
        if (obj.material && obj.material[prop] !== undefined) {
          v = obj.material[prop];
        }
      });
      return v;
    }

    set value(v) {
      const { scene, prop } = this;
      scene.traverse((obj) => {
        if (obj.material && obj.material[prop] !== undefined) {
          obj.material[prop] = v;
          obj.material.needsUpdate = true;
        }
      });
    }
  }

  const gui = new GUI();
  gui
    .add(new AllMaterialPropertyGUIHelper('alphaTest', scene), 'value', 0, 1)
    .name('alphaTest')
    .onChange(requestRenderIfNotRequested);
  gui
    .add(new AllMaterialPropertyGUIHelper('transparent', scene), 'value')
    .name('transparent')
    .onChange(requestRenderIfNotRequested);

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

  let renderRequested = false;

  function render() {
    renderRequested = undefined;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
  }
  render();

  function requestRenderIfNotRequested() {
    if (!renderRequested) {
      renderRequested = true;
      requestAnimationFrame(render);
    }
  }

  controls.addEventListener('change', requestRenderIfNotRequested);
  window.addEventListener('resize', requestRenderIfNotRequested);
}

main();
