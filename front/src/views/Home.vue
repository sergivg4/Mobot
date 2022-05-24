<style>

#home{width: 100%;height: 100%;}

/* MOBILE HOME CSS */
#home-mobile {background: #191a1f;background: linear-gradient(#191a1f 57%,rgba(7, 6, 93, 1) 104%,rgba(16, 16, 185, 1) 81%);display: flex;height: 100%;width: 100%;flex-flow: column; /* background: linear-gradient(#191A1F, #0754F1 175%); */}
#home-header {height: 15vh;width: 100%;display: flex;flex-flow: row;align-items: center;}
#home-arm-container-mobile {height: 24rem;width: 100%;display: flex;
    justify-content: center;}
#home-bottom {width: 100%;height: 18rem;display: flex;align-items: center;flex-flow: column;}
.home-bottom-header {padding-bottom: 15px;padding-top: 5px;font-size: 9px;color: white;letter-spacing: 2px;width: 19rem;}
.home-bottom-body {padding-left: 15px;padding-right: 15px;position: relative;width: 19rem;}
.home-bottom-body p {font-size: 15px;color: #cbcbcb;letter-spacing: 2px;}
.home-bottom-body span {cursor: pointer;border-bottom: 1px solid rgb(255, 255, 255);padding-bottom: 0.2px;font-size: 15px;color: #cbcbcb;letter-spacing: 2px;margin-top: 15px;position: absolute;}
.home-title {padding-left: 30px;padding-top: 5px;color: rgb(255, 255, 255, 1.5);}
#home-arm-container-mobile #arm_canvas canvas {display: block;    width: 100% !important;height: 46rem !important;touch-action: none;}

/* HOME DESKTOP */
#home-desktop{
  width: 100%;
  height: 100%;
}
body {background: linear-gradient(180deg, #000001, #011439) !important;font-family: 'Inter', sans-serif;color: white;height: 100%;}
#vue_app, #app, .content{height: 100%;}
header{top: 0px;height: 10%;display: flex;align-items: center;margin: 0px 50px;}
.headerPart1{width: 300px;}
.headerPart2{width: 100%;display: flex;justify-content: flex-end;}
.logoMobot{width: 230px;}
.nav-menu{display: flex;align-items: end;list-style:none;}
.info span{display: flex;align-items: center;cursor: pointer;}
.nav-menu li{padding: 10px 30px;margin: 0px 15px;cursor: pointer;font-size: 16px;border: solid 1px transparent;font-weight: 600;}
.signInBtn{border: solid 1px white !important;}
.content{display: flex;}
.info a, .info .lnr{text-decoration: none;color: white;font-size: 24px;line-height: 40px;font-weight: 400;}
.info .lnr{padding: 2px 0px 0px 10px;}
#model{display: flex;}
#model canvas{max-width: 100%;max-height: 50%;}
.cool-link::after {content: '';display: block;width: 0;height: 2px;background: rgb(255, 255, 255);transition: width .3s;}
.cool-link:hover::after {width: 50%;transition: width .3s;}

#arm_canvas {width: 52rem;height:45rem;}
#home-arm-container-desktop {height: 100%;width: 50%;display: flex;justify-content: center;display: flex;
    justify-content: center;}
#home-arm-container-desktop #arm_canvas canvas {display: block;width: 90rem !important;height: 70rem !important;;touch-action: none;}
.txtBlock {margin: 0px 0px 0px 90px;display: flex;flex-flow: column;gap: 1rem;}
.info, #model {width: 100%; margin-top: 12rem;}
.info h1 {font-size: 70px;font-weight: 900;text-transform: uppercase;}
.info h2 {color: #97979D;font-size: 30px;font-weight: 600;}
/* MEDIA QUERYS */
/* @media only screen and (min-width: 750px) {
#home-arm-container {height: 28rem;width: 100%;}
.home-bottom-body {padding-left: 15px;padding-right: 15px;position: relative;width: 39rem;}
.home-bottom-body p {font-size: 30px;color: #cbcbcb;letter-spacing: 2px;}
.home-bottom-body {padding-left: 15px;padding-right: 15px;position: relative;width: 39rem;}
#home-arm-container {height: 28rem;width: 100%;}
.home-bottom-header {padding-bottom: 1.5rem;padding-top: 4rem;font-size: 21px;color: white;letter-spacing: 2px;width: 39rem;}
#arm_canvas canvas{display: block;width: 60rem !important;height: 70rem !important;touch-action: none;}
#home-bottom {width: 100%;height: 23rem;display: flex;align-items: center;flex-flow: column;}
} */
@media only screen and (min-height: 750px) and (max-height:890px) {
#arm_canvas {width: 85%;height: 23rem;display: flex;align-items: center;justify-content: center;}
#home-arm-container {height: 27rem;width: 100%;display: flex;justify-content: center;}
#home-bottom {width: 100%;height: 19rem;display: flex;align-items: center;flex-flow: column;}
.home-bottom-header {padding-bottom: 15px;padding-top: 5px;font-size: 18px;color: white;letter-spacing: 2px;width: 20rem;}
.home-bottom-body {padding-left: 15px;padding-right: 15px;position: relative;width: 20rem;}
.home-bottom-body p {font-size: 19px;color: #cbcbcb;letter-spacing: 2px;}
.home-bottom-body span {cursor: pointer;border-bottom: 1px solid rgb(255, 255, 255);padding-bottom: 0.2px;font-size: 19px;color: #cbcbcb;letter-spacing: 2px;margin-top: 15px;position: absolute;}
}
@media only screen and (min-width: 1400px) { 
#home-arm-container-desktop #arm_canvas canvas {display: block; width: 100rem !important; height:60rem !important;touch-action: none;}
#arm_canvas {width: 90rem;height: 52rem;}
}
@media only screen and (min-width: 740px)and (min-width: 840px)  and (max-height: 500px) {
  .home-desktop-header {top: 0px;height: 15%;display: flex;align-items: center;width: 100%;justify-content: center;margin-right: 50px !important;}
  div#home-desktop {height: 100%;}
  .logoMobot {width: 200px;}
  .content {display: flex;}
  .info, #model {width: 55%;height: 90%;display: block;margin-top: 3rem;}
  .txtBlock {margin: 0px 0px 0px 39px;width: 100%;}
  .info h1 {font-size: 31px;font-weight: 900;text-transform: uppercase;}
  .info h2 {color: #97979D;font-size: 22px;font-weight: 600;width: 25rem;}
  .info span {display: flex;align-items: center;cursor: pointer;}
  #arm_canvas canvas{display: block;width: 60rem !important;touch-action: none;}
}
.goMovement {cursor: pointer;width: 100px;height: 100px;position: absolute;top: 45%;z-index: 2;display: flex;align-items: center;justify-content: center;}
.goMovement-mobile{cursor: pointer;width: 100px;height: 100px;position: absolute;top: 30%;z-index: 2;display: flex;align-items: center;justify-content: center;}
.goMovement a{width: 100%;height: 100%; position: absolute; z-index: 10;}
.goMovement-mobile a{width: 100%;height: 100%; position: absolute; z-index: 10;}
.spring-spinner, .spring-spinner *{visibility: hidden;opacity: 0;transition: visibility 0s, opacity 0.5s linear;box-sizing:border-box;}
.goMovement:hover .spring-spinner, .spring-spinner *{visibility: visible;opacity: 1;box-sizing:border-box;display: block;}
.spring-spinner{height: 60px;width: 60px;}
.spring-spinner .spring-spinner-part{overflow: hidden;height: calc(60px / 2);width:60px;}
.spring-spinner .spring-spinner-part.bottom{width: 60px;height: 60px;border: calc(60px / 7) solid transparent;border-right-color: hsl(192, 100%, 50%);border-top-color: hsl(192, 100%, 50%);border-radius: 50%;box-sizing: border-box;animation: spring-spinner-animation 3s ease-in-out infinite;transform: rotate(-200deg);}
  @keyframes spring-spinner-animation {
    0%{
      border-width: calc(60px / 7);
    }
    25%{
      border-width: calc(60px / 23.33);
    }
    50%{
      transform: rotate(115deg);
      border-width: calc(60px / 7);
    }
    750%{
      border-width: calc(60px / 23.33);
    }
    100%{
      border-width: calc(60px / 7);
    }
  }


</style>
<template>
  <div id="home">
      <!--  -->
    <div id="home-mobile"  v-if="this.mobile==true">
      <div id="home-header">
        <div class="home-title">
          <img
            class="logoMobot"
            src="src/assets/logo_mobot_horizontal_white.png"
            alt="logo"/>
        </div>
        <div class="mobile-nav-trigger">
          <!-- ICON TO DROP DOWN THE THE MENU -->
        </div>
      </div>
      <div id="home-arm-container-mobile">
        <div class="goMovement-mobile">
            <router-link to="/App"></router-link>
          <div class="spring-spinner">
            <div class="spring-spinner-part top">
              <div class="spring-spinner-rotator"></div>
            </div>

            <div class="spring-spinner-part bottom">
              <div class="spring-spinner-rotator"></div>
            </div>
          </div>
        </div>
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
      <header class="home-desktop-header">
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
        <div  id="home-arm-container-desktop">
          
          <div class="goMovement">
             <router-link to="/App"></router-link>
            <div class="spring-spinner">
              <div class="spring-spinner-part top">
                <div class="spring-spinner-rotator"></div>
              </div>

              <div class="spring-spinner-part bottom">
                <div class="spring-spinner-rotator"></div>
              </div>
            </div>
          </div>
          <ArmModel></ArmModel>
        </div>
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
  methods: {
  },

  mounted() {
    if (window.innerWidth <= 900) {
        this.mobile = true;
        this.desktop = false;
      } else {
        this.desktop = true;
        this.mobile = false;
      }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 900) {
        this.mobile = true;
        this.desktop = false;
      } else {
        this.desktop = true;
        this.mobile = false;
      }
    });
  },
};
</script>
