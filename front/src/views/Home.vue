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
.content{
  /* height: 100%; */
}
#home{
  width: 100%;
  height: 100%;
}
header{
  top: 0px;
  height: 10%;
  display: flex;
  align-items: center;
  margin: 0px 50px;
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
.info span{
  display: flex;
  align-items: center;
  cursor: pointer;
}
.nav-menu li{
    padding: 10px 30px;
    margin: 0px 15px;
    cursor: pointer;
    font-size: 16px;
    border: solid 1px transparent;
    font-weight: 600;
}
.signInBtn{
  border: solid 1px white !important;
}
.content{
  display: flex;
}
.info, #model{
  width: 50%;
  height: 90%;
  display: flex;
  align-items: center;
}
.info h1{
  font-size: 60px;
  font-weight: 900;
  text-transform: uppercase;
}
.info h2{
    color: #97979D;
    font-size: 22px;
    font-weight: 600;
}
.info a, .info .lnr{
  text-decoration: none;
  color: white;
  font-size: 24px;
  line-height: 40px;
  font-weight: 400;
}
.info .lnr{
  padding: 2px 0px 0px 10px;
}
.txtBlock{
  margin: 0px 0px 0px 200px;
}
#model{
  display: flex;
}
#model canvas{
  max-width: 100%;
  max-height: 50%;
}

.cool-link::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: rgb(255, 255, 255);
    transition: width .3s;
}

.cool-link:hover::after {
    width: 50%;
    transition: width .3s;
}

</style>
<template>
  <div id="home">
    <header>
      <span class="headerPart1">
          <img class="logoMobot" src="src/assets/logo_mobot_horizontal_white.png" alt="logo">
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
          <h1>Move your <br> robot easier</h1>
          <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
          <span class=""><a href="">More info</a><span class="lnr lnr-arrow-right"></span></span>
        </div>
      </span>
      <span id="model">
        
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
