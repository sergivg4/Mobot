console.clear();

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.js";
import {OrbitControls} from "https://cdn.jsdelivr.net/npm/three@0.127.0/examples/jsm/controls/OrbitControls.js";

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, 800 / 800, 1, 1000);
camera.position.set(5, 8, 13).setLength(15);
let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true});
renderer.setSize(800, 800);
renderer.setClearColor( 0x000000, 0 ); // the default
//document.body.appendChild(renderer.domElement);
document.getElementById('blue_sphere').appendChild(renderer.domElement);

let controls = new OrbitControls(camera, renderer.domElement);

let gpt = new THREE.IcosahedronGeometry(5, 3);
let mpt = new THREE.PointsMaterial({size: 0.08, color: 0x00ffff});
let pt = new THREE.Points(gpt, mpt);
let angulo = 0;
scene.add(pt)


let gpl = new THREE.PlaneGeometry(20, 20, 100, 100);
gpl.rotateX(Math.PI * -0.5);


let mpl = new THREE.PointsMaterial({size:0.05, color: 0xaaaaaa});
let pl = new THREE.Points(gpl, mpl);
//scene.add(pl);
bendThePlane(5, 3, 10); // magic is here

window.addEventListener( 'resize', onWindowResize );

renderer.setAnimationLoop( _ => {
	renderer.render(scene, camera);
})

function bendThePlane(radius, pHeight, smoothness){
	let pos = gpl.attributes.position;
 	let v3 = new THREE.Vector3();
   //console.log("test");
  for(let i = 0; i < pos.count; i++){
  	v3.fromBufferAttribute(pos, i);
    let a = pHeight; // level of the plane (on Y-axis)

    let b = getSphereCone(v3, -3, radius);
    
    let sm = smoothfunc(a, b, smoothness);
    
    pos.setY(i, sm);
  }
    
    //gpl.rotateX(angulo)
    //angulo +=1
}

function loop(){
  //gpl.rotation.x += 0.1;
  //console.log(gpl.rotation.);
  // renderer.render(scene, camera);
  // angulo +=1;
  // console.log(angulo);
  // pt.rotateX(angulo);
  
  loop();
}
loop();
function getSphereCone(p, h, r){

	let dist = Math.hypot(p.x, p.z);
  
  let limR = Math.sqrt(r*r - h * h);
  
  let res = 0;
  if (dist <= limR){
  	res = Math.sqrt(r*r - dist*dist) * Math.sign(h);
  }
  else {
  	res = h - (dist - limR) * (limR / h);
  }
  
  return res;
}

function smoothfunc(a, b, k){
	let h = Math.max(0, Math.min(1, ((b - a) / k) + 0.5));
  let m = h * (1 - h) * k;
  return (h * a) + ((1 - h) * b) - (m * 0.5);
}

function onWindowResize() {

  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( innerWidth, innerHeight );

}