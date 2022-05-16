<style>
 /* MOBILE HOME CSS */
#home {background: #191A1F;background: linear-gradient(#191A1F 50%, rgba(7,6,93,1) 73%, rgba(16,16,185,1) 104%);
  display: flex;height: 100%;width: 100%;flex-flow: column;/* background: linear-gradient(#191A1F, #0754F1 175%); */}
#home-header {height: 15vh;width: 100%; }
#home-arm-container {height: 30rem;width: 100%;}
#home-bottom {width: 100%;border-top: 4px solid white;height: 18rem;}
.bot-title {color: #cdb04e;text-shadow: 0px 0px 2px #493902;font-weight: 600;}
.mo-title {color: #d0d0d0;}
.home-title {display: flex;padding: 25px;font-size: 1.5rem;}
.mo-title,.bot-title{line-height: 50px; letter-spacing: 1px;text-decoration: 2px underline;}

</style>
<template>
  <div id="home">
    <div id="home-header">
      <div class="home-title">
        <h1 class="mo-title">MO</h1>
        <h1 class="bot-title">BOT</h1>
      </div>
    </div>
    <div id="home-arm-container">
      <ArmModel></ArmModel>
    </div>
    <div id="home-bottom">

    </div>
    <div id="home-info">

    </div>

        <h1>Home Page</h1>
  </div>
</template>

<script>
  import axios from "../helpers/axios_import";
  import ArmModel from './ArmModel.vue';

export default {
  components: { ArmModel },
    name:"Home",
    data: function () {
      return {

      }
    },
    methods:{
    },
  }

</script>
