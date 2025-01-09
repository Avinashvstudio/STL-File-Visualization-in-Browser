import * as THREE from './threejs/three.module.js';
import { STLLoader } from './threejs/STLLoader.js';
import { OrbitControls } from './threejs/OrbitControls.js';

let scene, camera, renderer, object;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xd3d3d3);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 0, 10);
    scene.add(light);

    const light2 = new THREE.DirectionalLight(0xffffff);
    light2.position.set(0, 0, -10);
    scene.add(light2);

    window.addEventListener('resize', onWindowResize);
    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function loadModelFromData(data) {
    const loader = new STLLoader();
    const geometry = loader.parse(data);

    if (object) {
        scene.remove(object);
    }

    object = new THREE.Mesh(
        geometry,
        new THREE.MeshLambertMaterial({ color: 0x00ff00 })
    );

    geometry.computeBoundingBox();
    const bbox = geometry.boundingBox;

    const center = new THREE.Vector3();
    bbox.getCenter(center);

    object.position.set(-center.x, -center.y, -center.z);

    const maxDim = Math.max(bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y, bbox.max.z - bbox.min.z);
    const scaleFactor = 5 / maxDim;
    object.scale.set(scaleFactor, scaleFactor, scaleFactor);

    object.position.set(0, 0, 0);
    object.rotation.set(0, 0, 0);

    scene.add(object);

    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);
}

document.getElementById('load-btn').addEventListener('click', () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    const spinner = document.getElementById('loading-spinner');

    if (file) {
        spinner.style.display = 'block';

        const reader = new FileReader();

        reader.onload = function (event) {
            try {
                loadModelFromData(event.target.result);
            } finally {
                spinner.style.display = 'none';
            }
        };

        reader.readAsArrayBuffer(file);
    } else {
        alert("Please select a file.");
    }
});

init();
