var camera, scene, renderer;
var geometry, material, mesh;
var uniforms;

var aspect = window.innerWidth / window.innerHeight;

function init() {
  setup();

  uniforms = {
    res: {type: 'vec2', value: new THREE.Vector2(window.innerWidth, window.innerHeight)},
    aspect: {type: 'float', value: aspect}
  };

  geometry = new THREE.PlaneBufferGeometry(2, 2);
  material = new THREE.ShaderMaterial({
    uniforms: uniforms,
  });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  animate();
}

function animate(){
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
function setup(){
  camera = new THREE.OrthographicCamera( -1, 1, 1, -1, -1, 1);
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer( { antialias: false,   precision:'highp' } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
}

init();
