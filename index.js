var THREE = require('three');

var scene, camera, renderer, pointLight, time = 0;

var geometry, material, mesh, sphereG, sphereMesh;

init();
animate();


function init () {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth/ window.innerHeight, 0.1, 1000);
  pointLight = new THREE.PointLight(0xFFFFFF);

  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;
  scene.add(pointLight);

  geometry = new THREE.BoxGeometry(200, 200, 200);
  material = new THREE.MeshBasicMaterial({color: 0xff00ff, wireframe: true});
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  sphereG = new THREE.Sphere(undefined, 400);
  var sphereM = new THREE.MeshBasicMaterial({
    color: THREE.ColorKeywords.greenyellow,
    wireframe: true
  });
  sphereMesh = new THREE.Mesh(sphereG, sphereM);

  scene.add(sphereMesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var newGeom = new THREE.Geometry();

  var meshI = new THREE.Mesh( newGeom, new THREE.MeshNormalMaterial());
  scene.add( meshI);
}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.001;
  mesh.rotation.y += 0.002;
  camera.position.z += 0.1;
  renderer.render(scene, camera);
}

function handleInput (e) {
  switch (e.keyIdentifier) {
    case "Up":
    camera.position.y += 1;
    break;
    case "Down":
    camera.position.y -= 1;
    break;
    case "Left":
    camera.position.x -= 1;
    break;
    case "Right":
    camera.position.x += 1;
    break;
  }

    e.stopPropagation();
}

window.addEventListener('keydown', handleInput);
