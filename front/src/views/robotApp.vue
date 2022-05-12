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
  max-height: 100%;
}
.hablar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 0 5px rgb(0 89 255 / 90%), 0 0 0 10px rgb(0 89 255 / 70%), 0 0 0 15px rgb(0 89 255 / 50%), 0 0 0 20px rgb(0 89 255 / 30%), 0 0 0 25px rgb(0 89 255 / 10%);
}

</style>
<template>
  <div id="robotApp">
    <header>
      <img class="logoMobot" src="https://www.kevinbeerse.com/wp-content/uploads/2020/10/logo_12.png" alt="logo">
    </header>
    <div id="modelApp"></div>
    <div id="buttons">
      <span class="hablar"></span>
    </div>
  </div>
</template>
<script>
  import axios from "../helpers/axios_import";
export default {
    name:"robotApp",
    data: function () {
      return {

      }
    },
    methods:{
    },
  }

</script>
