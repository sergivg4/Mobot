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
#home{
  width: 100%;
  height: 100%;
}
header{
  top: 0px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
}
.headerPart1{
  width: 300px;
}
.headerPart2{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.logoMobot{
  width: 230px;
}
.nav-menu{
    display: flex;
    align-items: end;
    list-style:none;
}
.nav-menu li{
  padding: 15px 35px;
  margin: 0px 10px;
  font-size: 22px;
  font-weight: 600;
}
.signInBtn{
  border: solid;
}
.content{
  display: flex;
}
.info, .model{
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: -100px;
  z-index: -1;
}
.info h1{
  font-size: 60px;
  font-weight: 900;
  text-transform: uppercase;
}
.info h2{
  color: #97979D;
}
.info a{
  text-decoration: none;
  color: white;
  font-size: 26px;
  font-weight: 600;
}
.txtBlock{
  margin: 0px 0px 0px 200px;
}
.model{
  z-index: 100;
}

</style>
<template>
  <div id="home">
    <header>
      <span class="headerPart1">
          <img class="logoMobot" src="https://www.kevinbeerse.com/wp-content/uploads/2020/10/logo_12.png" alt="logo">
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
        <div class="txtBlock">
          <h1>Move your <br> robot easier</h1>
          <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
          <a href="">More info ></a>
        </div>
      </span>
      <span class="model">
        <div id="blue_sphere"></div>
      </span>
    </div>
  </div>
</template>
<script>
  import axios from "../helpers/axios_import";
export default {
    name:"Home",
    data: function () {
      return {

      }
    },
    methods:{
    },
  }

</script>
