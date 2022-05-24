<style>
 /* MOBILE HOME CSS */
#home {background: #191A1F;background:linear-gradient(#191A1F 57%, rgba(7,6,93,1) 104%, rgba(16,16,185,1) 81%);display: flex;height: 100%;width: 100%;flex-flow: column;/* background: linear-gradient(#191A1F, #0754F1 175%); */}
#home-header {height: 15vh;width: 100%; display: flex; flex-flow: row; align-items: center;}
#home-arm-container {height: 24rem;width: 100%;}
#home-bottom {width: 100%;height: 18rem;display: flex;align-items: center;flex-flow: column;}
.home-bottom-header {padding-bottom: 15px;padding-top: 5px;font-size: 9px;color: white;letter-spacing: 2px;width: 19rem;}
.home-bottom-body {padding-left: 15px;padding-right: 15px;position: relative;width: 19rem;}
.home-bottom-body p{font-size: 15px;color: #cbcbcb;letter-spacing: 2px;}
.home-bottom-body span{cursor:pointer; border-bottom: 1px solid rgb(255, 255, 255); padding-bottom:0.2px;font-size: 15px;color: #cbcbcb;letter-spacing: 2px;margin-top: 15px;position: absolute;}
.home-title {padding-left: 30px;padding-top: 5px;color: rgb(255,255,255,1.5);}
</style>
<template>
  <div id="home">
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
        <p>Our app was developed with the idea of make in 
        easy the fact of move your robot arm</p>
        <span>More info</span>
      </div>
    </div>
    <div id="home-info">
      
    </div>
  </div>
</template>

<script>
import axios from "../helpers/axios_import";
import ArmModel from "./ArmModel.vue";

export default {
  components: { ArmModel },
  name: "Home",
  data: function () {
    return {};
  },
  methods: {},
};
</script>
