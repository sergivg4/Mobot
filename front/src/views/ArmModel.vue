<style>
#arm_canvas{
  width:100%;
  height: 23rem;
  display: flex;
  align-items:center;
  justify-content: center;
}
#arm_canvas canvas{
  width: 100% !important;
  height: 46rem !important;
}
</style>
<template>
    <div id="arm_canvas" ref="canvas"></div>
</template>
<script>
import * as THREE from "three";
import { GUI } from "dat.gui";
import {
  OrbitControls,
  MapControls,
} from "three/examples/jsm/controls/OrbitControls";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";
export default {
  name: "ArmModel",
  data: function () {
    return {};
  },
  methods: {
    init() {
      let gpt = new THREE.IcosahedronGeometry(33, 3);
      let mpt = new THREE.PointsMaterial({
        size: 0.6,
        color: 0x00ffff,
      });
      let gpt2 = new THREE.IcosahedronGeometry(30,1);
      let mpt2 = new THREE.PointsMaterial({
        size: 0.2,
        color: 0x00ffff,
      });
      (this.pt2 = new THREE.Points(gpt2, mpt2)),
      (this.pt = new THREE.Points(gpt, mpt)),
        (this.sphereSize = 1),
        (this.look_x = 0),
        (this.look_y = 35),
        (this.look_z = 0),
        (this.scene = new THREE.Scene());
      this.three = THREE;
      //CAMERA
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight
      );
      //RENDER
      this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      //PointLight
      // loader
      this.loader = new ColladaLoader();
      //PIVOTS
      this.pivot1 = new THREE.Object3D();
      this.pivot2 = new THREE.Object3D();
      this.pivot3 = new THREE.Object3D();
      this.pivot4 = new THREE.Object3D();
      this.pivot0 = new THREE.Object3D();

      this.createScene();
      this.loadCollada();
      this.createLight();
      this.createCamera();
      this.createRender();
      this.createControls();
      this.render();
    },

    createScene() {
      //if you want any color
      //this.scene.background = new THREE.Color("");
    },
    loadCollada() {
      const THIS = this;
      const loader = new ColladaLoader();
      loader.load("/models/ur10_2.dae", function (result) {
        window.robot = result.scene;
        let componentsArray = [];
        componentsArray = THIS.getRobotItems(robot, componentsArray, THIS);
        THIS.pivot0.add(componentsArray.ArmBase);
        THIS.scene.add(componentsArray.ArmBase);
        componentsArray.ArmBase.add(componentsArray.ArmBase2);
        componentsArray.ArmBase2.add(THIS.pivot1);
        THIS.pivot1.add(componentsArray.ArmBase3);
        componentsArray.ArmBase3.add(THIS.pivot2);
        THIS.pivot2.add(componentsArray.ArmBase4);
        componentsArray.ArmBase4.add(THIS.pivot3);
        THIS.pivot3.add(componentsArray.ArmBase5);
        componentsArray.ArmBase5.add(THIS.pivot4);
        THIS.pivot4.add(componentsArray.SubArm5);

      /*   var AxisHelperP1 = new THREE.AxesHelper(10);
        var AxisHelperP2 = new THREE.AxesHelper(10);
        var AxisHelperP3 = new THREE.AxesHelper(10);
        var AxisHelperP4 = new THREE.AxesHelper(10);
        THIS.pivot1.add(AxisHelperP1);
        THIS.pivot2.add(AxisHelperP2);
        THIS.pivot3.add(AxisHelperP3);
        THIS.pivot4.add(AxisHelperP4); */

        THIS.pivot0.position.set(0, 0, 0);
        componentsArray.ArmBase.position.set(0, -30, 0);
        THIS.pivot1.position.set(0, 5, 0);
        componentsArray.ArmBase3.position.set(0, -5, 0);
        THIS.pivot2.position.set(0, 29.35, 0);
        componentsArray.ArmBase4.position.set(0, -29.35, 0);
        THIS.pivot3.position.set(0, 51.9, 0);
        componentsArray.ArmBase5.position.set(0, -51.9, 0);
        THIS.pivot4.position.set(0, 56, -6.45);
        componentsArray.SubArm5.position.set(0, -56, 6.45);

        //const gui = new GUI();
        /*       gui.add(componentsArray.ArmBase2.rotation, "y", 0, Math.PI * 2).name("Base");
      gui.add(THIS.pivot1.rotation, "z", 0, Math.PI * 2).name("Brazo 1");
      gui.add(THIS.pivot2.rotation, "z", 0, Math.PI * 2).name("Brazo 2");
      gui.add(THIS.pivot3.rotation, "z", 0, Math.PI * 2).name("Brazo 3");
      gui.add(THIS.pivot4.rotation, "y", 0, Math.PI * 2).name("Brazo 4"); */
        THIS.loop();
      });

      this.pt.position.set(0, 0, 0);
      this.scene.add(this.pt);
      this.scene.add(this.pt2);
    },
    loop() {
      requestAnimationFrame(this.loop);
      this.renderer.render(this.scene, this.camera);
      //this.controls.update();
      this.pt.rotation.y += 0.005;
      this.pivot1.rotation.y += 0.005;
    },
    createLight() {
      var pl2 = new THREE.PointLight(0xffffff);
      var pl3 = new THREE.PointLight(0xffffff);
      var pl4 = new THREE.PointLight(0xffffff);
      var pl = new THREE.PointLight(0xffffff);

      pl.position.set(30, 60, 40);
      pl2.position.set(-10, 10, -40);
      pl3.position.set(-30, 10, 30);
      pl4.position.set(30, 10, -30);
      this.scene.add(pl);
  /*     var pointLightHelper = new THREE.PointLightHelper(
        pl2,
        this.sphereSize,
        0x000000
      ); */
     /*  var pointLightHelper = new THREE.PointLightHelper(
        base_light,
        this.sphereSize,
        0x000000
      ); 
      this.scene.add(pointLightHelper);*/
    },
    createCamera() {
      // PerspectiveCamera( fov, aspect, near, far )
       if(window.innerWidth>=800){
          this.camera.position.set(60, 0, 60);
        }else this.camera.position.set(70, 0, 70);
      window.addEventListener("resize", () => {
        if(window.innerWidth>=800){
          this.camera.position.set(70, 0, 70);
        }else this.camera.position.set(70, 0, 70);
      });
      
      //this.camera.lookAt(this.look_x, this.look_y, this.look_z)
      this.scene.add(this.camera);
    },
    createRender() {
      var width_arm=this.$refs.canvas.clientWidth;
      var height_arm=this.$refs.canvas.clientHeight+20;
      this.renderer.setSize(width_arm-50,height_arm); //840/840
      this.renderer.setClearColor(0x000000, 0); // the default
      this.$refs.canvas.appendChild(this.renderer.domElement);
    },
    render() {
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.render);
    },
    createControls() {
      this.oControls = new OrbitControls(this.camera, this.renderer.domElement);
      this.oControls.enablePan = false;
      this.oControls.enableZoom = false;
      //this.controls = new MapControls(this.camera, this.renderer.domElement);
      //this.controls.target.set(this.look_x, this.look_y, this.look_z);
      //this.controls.update();
    },

    getRobotItems(object_group, componentsArray, that) {
      object_group.children.forEach(function (item) {
        var temp_componentsArray = [];
        if (item.type == "Group" && !item.name.includes("ur10")) {
          componentsArray[item.name] = item;
          temp_componentsArray = that.getRobotItems(
            item,
            componentsArray,
            that
          );
        }
        componentsArray = Object.assign(
          {},
          componentsArray,
          temp_componentsArray
        );
      });
      return componentsArray;
    },
  },
  created: function () {},
  mounted: function () {
    this.init();
  },
};
</script>
