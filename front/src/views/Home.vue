<style>
#home{width: 100%;height: 100%;}

/* MOBILE HOME CSS */
#home-mobile {background: #191a1f;background: linear-gradient(#191a1f 57%,rgba(7, 6, 93, 1) 104%,rgba(16, 16, 185, 1) 81%);display: flex;height: 100%;width: 100%;flex-flow: column; /* background: linear-gradient(#191A1F, #0754F1 175%); */}
#home-header {height: 15vh;width: 100%;display: flex;flex-flow: row;align-items: center;}
#home-arm-container {height: 24rem;width: 100%;}
#home-bottom {width: 100%;height: 18rem;display: flex;align-items: center;flex-flow: column;}
.home-bottom-header {padding-bottom: 15px;padding-top: 5px;font-size: 9px;color: white;letter-spacing: 2px;width: 19rem;}
.home-bottom-body {padding-left: 15px;padding-right: 15px;position: relative;width: 19rem;}
.home-bottom-body p {font-size: 15px;color: #cbcbcb;letter-spacing: 2px;}
.home-bottom-body span {cursor: pointer;border-bottom: 1px solid rgb(255, 255, 255);padding-bottom: 0.2px;font-size: 15px;color: #cbcbcb;letter-spacing: 2px;margin-top: 15px;position: absolute;}
.home-title {padding-left: 30px;padding-top: 5px;color: rgb(255, 255, 255, 1.5);}

/* HOME DESKTOP */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
body {background: linear-gradient(180deg, #000001, #011439) !important;font-family: 'Inter', sans-serif;color: white;height: 100%;}
#vue_app, #app, .content{height: 100%;}
.content{/* height: 100%; */}
header{top: 0px;height: 10%;display: flex;align-items: center;margin: 0px 50px;}
.headerPart1{width: 300px;}
.headerPart2{width: 100%;display: flex;justify-content: flex-end;}
.logoMobot{width: 230px;}
.nav-menu{display: flex;align-items: end;list-style:none;}
.info span{display: flex;align-items: center;cursor: pointer;}
.nav-menu li{padding: 10px 30px;margin: 0px 15px;cursor: pointer;font-size: 16px;border: solid 1px transparent;font-weight: 600;}
.signInBtn{border: solid 1px white !important;}
.content{display: flex;}
.info, #model{width: 50%;height: 90%;display: flex;align-items: center;}
.info h1{font-size: 60px;font-weight: 900;text-transform: uppercase;}
.info h2{color: #97979D;font-size: 22px;font-weight: 600;}
.info a, .info .lnr{text-decoration: none;color: white;font-size: 24px;line-height: 40px;font-weight: 400;}
.info .lnr{padding: 2px 0px 0px 10px;}
.txtBlock{margin: 0px 0px 0px 200px;}
#model{display: flex;}
#model canvas{max-width: 100%;max-height: 50%;}
.cool-link::after {content: '';display: block;width: 0;height: 2px;background: rgb(255, 255, 255);transition: width .3s;}
.cool-link:hover::after {width: 50%;transition: width .3s;}
</style>
<template>
  <div id="home">
    <!--  -->
    <div id="home-mobile"  v-if="this.mobile==true">
      <div id="home-header">
        <div class="home-title">
          <h1>MOOBOT</h1>
        </div>
        <div class="mobile-nav-trigger">
          <!-- ICON TO DROP DOWN THE THE MENU -->
        </div>
      </div>
      <div id="home-arm-container">
        <ArmModel></ArmModel>
      </div>
      <div id="home-bottom">
        <div class="home-bottom-header">
          <h1>MOVE YOUR ROBOT EASIER</h1>
        </div>
        <div class="home-bottom-body">
          <p>
            Our app was developed with the idea of make in easy the fact of move
            your robot arm
          </p>
          <span>More info</span>
        </div>
      </div>
      <div id="home-info"></div>
    </div>
    <!-- DESKTOP -->
    <div id="home-desktop" v-if="this.desktop==true">
      <header>
        <span class="headerPart1">
          <img
            class="logoMobot"
            src="src/assets/logo_mobot_horizontal_white.png"
            alt="logo"/>
        </span>
        <span class="headerPart2">
          <ul class="nav-menu">
            <li class="signInBtn">Sign In</li>
            <li>Login</li>
          </ul>
        </span>
      </header>
      <div class="content">
        <span class="info">
          <div class="txtBlock cool-link">
            <h1>
              Move your <br />
              robot easier
            </h1>
            <h2>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h2>
            <span class=""
              ><a href="">More info</a><span class="lnr lnr-arrow-right"></span
            ></span>
          </div>
        </span>
        <ArmModel></ArmModel>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
import axios from "../helpers/axios_import";
import ArmModel from "./ArmModel.vue";

export default {
  components: { ArmModel },
  name: "Home",
  data: function () {
    return {
      a: window.innerHeight,
      mobile: false,
      desktop: false,
    };
  },
  methods: {},

  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 400 && window.innerHeight >= 700) {
        this.mobile = true;
        this.desktop = false;
        console.log("A");
      } else {
        this.desktop = true;
        this.mobile = false;
        console.log("B");
      }
    });
  },
};
</script>
