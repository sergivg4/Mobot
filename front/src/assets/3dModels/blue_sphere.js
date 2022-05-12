import * as THREE from 'three'

import { OrbitControls, MapControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js';


window.three = THREE;
window.robot_parts = [];
window.camera = null;
window.dae_obj = null;
window.boxHelper  = null;
window.robot = null;
let pivot0 = new THREE.Object3D();
let pivot1 = new THREE.Object3D();
let pivot2 = new THREE.Object3D();
let pivot3 = new THREE.Object3D();
let pivot4 = new THREE.Object3D();

(function () {
    // point light
    var pl = new THREE.PointLight(0xffffff);
    var pl2 = new THREE.PointLight(0xffffff);
    var pl3 = new THREE.PointLight(0xffffff);
    var pl4 = new THREE.PointLight(0xffffff);
    pl.position.set(30, 60, 40);
    pl2.position.set(-40, 10, -40);
    pl3.position.set(-30, 10, 30);
    pl4.position.set(30, 10, -30);

    const sphereSize = 1;
    const pointLightHelper = new THREE.PointLightHelper( pl2, sphereSize, 0x000000 );
    // scene
    var scene = new THREE.Scene();
    scene.add(pl);
    scene.add(pl2);
    scene.add(pl3);
    scene.add(pl4);
    //scene.add( pointLightHelper );

    // camera
    const model = document.getElementById('model');
    var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight
      );
    // camera.position.set( 70, 10, 70);
    camera.position.set( 50, 10, 50);
    scene.add(camera);
    window.camera = camera;

    // render
    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias:true});
    renderer.setClearColor( 0x000000, 0 ); // the default
    renderer.setSize(840 , 840); //840/840
    document.getElementById('model').appendChild(renderer.domElement);
    renderer.render(scene, camera);
    // controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
 
    // app loop
    var loop = function () {
        requestAnimationFrame(loop);
        renderer.render(scene, camera);
        controls.update();
        pt.rotation.y += 0.005;
        pivot0.rotation.y += 0.005;
        
    };
 
    // CREATE A COLLADALOADER INSTANCE
    var loader = new ColladaLoader()
    loader.load("/models/ur10_2.dae", function (result) {
        window.robot = result.scene
        let componentsArray = []
        
        componentsArray = getRobotItems(window.robot, componentsArray)
        console.log(componentsArray)
        scene.add(pivot0)
        pivot0.add(componentsArray.ArmBase)
        componentsArray.ArmBase.add(componentsArray.ArmBase2)
        componentsArray.ArmBase2.add(pivot1)
        pivot1.add(componentsArray.ArmBase3)
        componentsArray.ArmBase3.add(pivot2)
        pivot2.add(componentsArray.ArmBase4)
        componentsArray.ArmBase4.add(pivot3)
        pivot3.add(componentsArray.ArmBase5)
        componentsArray.ArmBase5.add(pivot4)
        pivot4.add(componentsArray.SubArm5)

        pivot0.position.set( 0, -30, 0);
        componentsArray.ArmBase.position.set(0,0,0);
        pivot1.position.set( 0, 5, 0);
        componentsArray.ArmBase3.position.set( 0, -5, 0);
        pivot2.position.set( 0, 29.35, 0);
        componentsArray.ArmBase4.position.set( 0, -29.35, 0);
        pivot3.position.set( 0, 51.9, 0);
        componentsArray.ArmBase5.position.set( 0, -51.9, 0);
        pivot4.position.set( 0, 56, -6.45);
        componentsArray.SubArm5.position.set( 0, -56, 6.45);

        loop()
    })
    
    let gpt = new THREE.IcosahedronGeometry(40, 3);
    let mpt = new THREE.PointsMaterial({size: 0.2, color: 0x00ffff});
    let pt = new THREE.Points(gpt, mpt);
    pt.position.set( 0, 0, 0);
    scene.add(pt)
}
    ());

//Funcion recursiva a la cual le pasamos el robot, y a si misma. 
//Devuelve una array con los distintos componentes de tipo grupo
function getRobotItems(object_group, componentsArray){
        object_group.children.forEach(function (item){
            var temp_componentsArray = []
            if(item.type=="Group" && !item.name.includes("ur10")){
                componentsArray[item.name] = item
                temp_componentsArray = getRobotItems(item, componentsArray)
            }
            componentsArray = Object.assign({},componentsArray, temp_componentsArray)
        })
        return componentsArray
}


