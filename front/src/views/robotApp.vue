<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
body {
  background: linear-gradient(180deg, #000001, #011439) !important;
  font-family: 'Inter', sans-serif;
  color: white;
  height: 100%;
}
#vue_app, #app, .content{
  height: 100%;
}
header{
  top: 0px;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 50px;
}
#buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 50px;
}
.logoMobot{
  width: 230px;
}
#robotApp{
  width: 100%;
  height: 100%;
}
#modelApp{
  display: flex;
  height: 75%;
}
#modelApp canvas{
  max-width: 100%;
  max-height: 115%;
  margin-top: -40px;
}
.hablar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 0 5px rgb(0 89 255 / 90%), 0 0 0 10px rgb(0 89 255 / 70%), 0 0 0 15px rgb(0 89 255 / 50%), 0 0 0 20px rgb(0 89 255 / 30%), 0 0 0 25px rgb(0 89 255 / 10%);
}
.hablar:active {
  border-radius: 0%;
}

</style>
<template>
  <div id="robotApp">
    <header>
      <img class="logoMobot" src="https://www.kevinbeerse.com/wp-content/uploads/2020/10/logo_12.png" alt="logo">
    </header>
    <!-- <div id="modelApp"></div> -->
    <div id="modelApp" ref="canvas"></div>
    <div id="buttons">
      <span class="hablar" @click="ToggleMic(this.pivot1)"></span>
    </div>
  </div>
</template>
<script >
import axios from "../helpers/axios_import";
import * as THREE from "three";
import { GUI } from "dat.gui";
import {OrbitControls,MapControls,} from "three/examples/jsm/controls/OrbitControls";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";
//import { ref, onMounted } from 'vue'
export default {
	name: "robotApp",
	data: function () {
		return {
		};
	},
	methods: {
		init() {
			this.sphereSize=1,
			this.look_x=0,
			this.look_y= 35,
			this.look_z= 0,
			this.scene = new THREE.Scene();
			this.three = THREE;
			//CAMERA
			this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
			this.loader = new ColladaLoader();

			//PIVOTS
      		this.pivot0 = new THREE.Object3D();
			this.pivot1 = new THREE.Object3D();
			this.pivot2 = new THREE.Object3D();
			this.pivot3 = new THREE.Object3D();
			this.pivot4 = new THREE.Object3D();

			this.loadCollada() 
      this.loadBlueSphere() 
			this.createLight() 
			this.createCamera()
			this.createRender()
			this.render()
      this.configOrbitControls()
	  this.movePivot1()
		},
		ToggleMic(pivote1) {
			let recognition = new webkitSpeechRecognition() || new SpeechRecognition();
			recognition.lang = 'es-ES';
			recognition.continous = true;
			this.isRecording = false;
			recognition.interimResults = false;

			if (this.isRecording) {
				recognition.stop()
			} else {
				recognition.start()
			}

			recognition.onstart = () => {
				console.log('SR Started')
				this.isRecording = true
			};

			recognition.onend = () => {
				console.log('SR Stopped')
				this.isRecording = false
			};

			recognition.onresult = (event) => {
				const results = event.results;
				const frase = results[results.length -1 ][0].transcript;
				console.log(frase);

				for (let i = 0; i < event.results.length; i++) {
					const result = event.results[i]
					if (result.isFinal) CheckForCommand(result)
				}
			};

			const CheckForCommand = (result) => {
				const t = result[0].transcript;
				if (t.includes('para de grabar')) {
					recognition.stop()
				} else if (
					t.includes('qué hora es') ||
					t.includes('what\'s the time')
				) {
					recognition.stop()
					alert(new Date().toLocaleTimeString())
					setTimeout(() => recognition.start(), 100)
				} else if (
					t.includes('saluda') ||
					t.includes('mobot saluda')
				) {
					recognition.stop()
					let counter = 0;
					const h = setInterval(function(){
						console.log(counter);
						//pivote1.rotation.z += 0.1;
						if (window.pivot0.rotation.y < 0.8) {
							window.pivot0.rotation.y += 0.1;
						}else if(window.pivot0.rotation.y > 0.8){
							window.pivot0.rotation.y -= 0.1;
						}
						 //window.movePivot1()
						//this.pivot1.rotation.z += 0.01;
						counter++;
						if(counter === 25) {
							clearInterval(h);
						}
					}, 10);
				}
			};
			
		},
		movePivot1(){
			// THIS.pivot1.rotation.z += 0.01;
			//console.log(this.pivot1.rotation.z);
			//this.pivot1.rotation.z += 1;
			//this.pivot1.rotation.z = 10;
		},
    loadBlueSphere() {
      this.gpt = new THREE.IcosahedronGeometry(40, 3);
      this.mpt = new THREE.PointsMaterial({size: 0.2, color: 0x00ffff});
      this.pt = new THREE.Points(this.gpt, this.mpt);
      this.pt.position.set( 0, 0, 0);
      this.scene.add(this.pt)
    },
		loadCollada() {
			const THIS = this
			const loader = new ColladaLoader()
			loader.load("/models/ur10_2.dae", function (result) {
				window.robot = result.scene;
				let componentsArray = [];
				console.log(THIS.scene)
				componentsArray = THIS.getRobotItems(robot, componentsArray, THIS);
				console.log(componentsArray);
        		THIS.scene.add(THIS.pivot0)
				THIS.pivot0.add(componentsArray.ArmBase);
				componentsArray.ArmBase.add(componentsArray.ArmBase2);
				componentsArray.ArmBase2.add(THIS.pivot1);
				THIS.pivot1.add(componentsArray.ArmBase3);
				componentsArray.ArmBase3.add(THIS.pivot2);
				THIS.pivot2.add(componentsArray.ArmBase4);
				componentsArray.ArmBase4.add(THIS.pivot3);
				THIS.pivot3.add(componentsArray.ArmBase5);
				componentsArray.ArmBase5.add(THIS.pivot4);
				THIS.pivot4.add(componentsArray.SubArm5);

				//var AxisHelperP1 = new window.three.AxesHelper(10);
				//THIS.pivot4.add(AxisHelperP1);
				window.pivot0 = THIS.pivot0;
				window.pivot1 = THIS.pivot0;
				window.pivot2 = THIS.pivot0;
				window.pivot3 = THIS.pivot0;
				window.pivot4 = THIS.pivot0;

				THIS.pivot0.position.set( 0, -30, 0);
				componentsArray.ArmBase.position.set(0,0,0);
				THIS.pivot1.position.set( 0, 5, 0);
				componentsArray.ArmBase3.position.set( 0, -5, 0);
				THIS.pivot2.position.set( 0, 29.35, 0);
				componentsArray.ArmBase4.position.set( 0, -29.35, 0);
				THIS.pivot3.position.set( 0, 51.9, 0);
				componentsArray.ArmBase5.position.set( 0, -51.9, 0);
				THIS.pivot4.position.set( 0, 56, -6.45);
				componentsArray.SubArm5.position.set( 0, -56, 6.45);

				// THIS.pivot1.rotation.z.onChange(() => {
				// 	console.log("pivot1: "+THIS.pivot1.rotation.z);
				// });

				const gui = new GUI();
				gui.add(componentsArray.ArmBase2.rotation, "y", 0, Math.PI * 2).name("Base");
				gui.add(THIS.pivot1.rotation, "z", 0, Math.PI * 2).name("Brazo 1")
				gui.add(THIS.pivot2.rotation, "z", 0, Math.PI * 2).name("Brazo 2");
				gui.add(THIS.pivot3.rotation, "z", 0, Math.PI * 2).name("Brazo 3");
				gui.add(THIS.pivot4.rotation, "y", 0, Math.PI * 2).name("Brazo 4");
				THIS.loop();
			});
		},
		loop() {
			requestAnimationFrame(this.loop);
			this.renderer.render(this.scene, this.camera);
      		this.orbitControls.update();
      		this.pt.rotation.y+= 0.001;
		},
		createLight() {    
      var pl = new THREE.PointLight(0xffffff);
      var pl2 = new THREE.PointLight(0xffffff);
      var pl3 = new THREE.PointLight(0xffffff);
      var pl4 = new THREE.PointLight(0xffffff);
      pl.position.set(30, 60, 40);
      pl2.position.set(-40, 10, -40);
      pl3.position.set(-30, 10, 30);
      pl4.position.set(30, 10, -30);
      this.scene.add(pl);
      this.scene.add(pl2);
      this.scene.add(pl3);
      this.scene.add(pl4);
		},
		createCamera() {    
			this.camera.position.set(50, 10, 50)
			this.camera.lookAt(this.look_x, this.look_y, this.look_z)
			this.scene.add(this.camera)
		},
		createRender() {
       		this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias:true });
			this.$refs.canvas.appendChild(this.renderer.domElement);
		},
		render() {
      this.renderer.setClearColor( 0x000000, 0 );
			this.renderer.setSize(840 , 840); //840/840
      this.renderer.render(this.scene, this.camera);
		},
		getRobotItems(object_group, componentsArray, that) {
			object_group.children.forEach(function (item) {
				var temp_componentsArray = [];
				if (item.type == "Group" && !item.name.includes("ur10")) {
					componentsArray[item.name] = item;
					temp_componentsArray = that.getRobotItems(item, componentsArray, that);
				}
				componentsArray = Object.assign(
					{},
					componentsArray,
					temp_componentsArray
				);
			});
			return componentsArray;
		},
    configOrbitControls() {
      this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);
      this.orbitControls.enablePan = false;
      this.orbitControls.enableZoom = false;
    },
	},
	created: function () {
	},
	mounted: function () {
		this.init();
	},
}
</script>
<!--
    IMPLEMENTO API
    GUARDO STRING EN VARIABLE
    PASAR VARIABLE POR AXIOS AL CONTROLADOR
    ---CONTROLLER----
    COMPROBAR STRING EN BBDD IF COINCIDE EJECUTA MOVIMIENTO ELSE ERROR(MENSAJE)
 -->