<style>
.mobotTitle {
  font-size: 35px;
  margin-left: 10%;
  margin-top: 1%;
  color: #ffffff;
}

body {
  display: flex;
  margin: 0px;
  font-family: sans-serif;
}

.welcome-box {
  display: flex;
  flex-flow: column;
  gap: 30px;
  position: absolute;
  top: 50%;
  left: 30%;
  width: 900px;
  padding: 40px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  justify-content: space-around;
}

.welcomeLabel {
  color: #ffffff;
  font-size: 70px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.descripcion {
  color: #ffffff;
  font-size: 28px;
}

.textoregistro {
  color: #ffffff;
  font-size: 22px;
  text-align: center;
  margin-top: 80px;
}

.textoOlvidaContrasenya{
  color: #ffffff;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  margin-right: 40px;
}

.login-box {
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  gap: 50px;
  gap: 50px;
  top: 47%;
  left: 80%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 20px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -22px;
  left: 0;
  color: #05e2e2;
  font-size: 14px;
}

.login-box form .botonEnviar {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #05e2e2;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
  cursor: pointer;
}

.login-box .botonEnviar:hover {
  background: #05e2e2;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 2px #05e2e2, 0 0 10px #05e2e2, 0 0 20px #05e2e2,
    0 0 40px #05e2e2;
}

.login-box .botonEnviar span {
  position: absolute;
  display: block;
}

.login-box .botonEnviar span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #05e2e2);
  animation: btn-anim1 5s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box .botonEnviar span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #05e2e2);
  animation: btn-anim2 5s linear infinite;
  animation-delay: 1.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box .botonEnviar span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #05e2e2);
  animation: btn-anim3 5s linear infinite;
  animation-delay: 2.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box .botonEnviar span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #05e2e2);
  animation: btn-anim4 5s linear infinite;
  animation-delay: 3.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

.button2 {
  position: relative;
  display: flex;
  border-radius: 4px;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  margin: 25px;
  margin-top: 0%;
  font-family: "Roboto", sans-serif;
  filter: hue-rotate(0deg);
  border: 2px solid #ffffff;
  transition: all 0.1s linear;
  width: 20%;
  height: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
  left: 35%;
  cursor: pointer;
}
.button2:hover {
  border: 2px solid transparent;
}
.button2:hover span {
  position: absolute;
  display: block;
}
.button2:hover span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, #05e2e2);
  animation: animate1 5s linear infinite;
}
@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
.button2:hover span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #05e2e2);
  animation: animate2 5s linear infinite;
  animation-delay: 1.25s;
}
@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
.button2:hover span:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 100%;
  background: linear-gradient(270deg, transparent, #05e2e2);
  animation: animate3 5s linear infinite;
  animation-delay: 2.5s;
}
@keyframes animate3 {
  0% {
    right: -100%;
    height: 3px;
  }
  50%,
  100% {
    height: 2px;
    right: 100%;
  }
}
.button2:hover span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #05e2e2);
  animation: animate4 5s linear infinite;
  animation-delay: 3.75s;
}
@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
<template>
  <div id="Login">
    <div class="mobotTitle">MOBOT</div>
    <div class="welcome-box">
      <label class="welcomeLabel">BIENVENIDO A MOBOT</label>
      <p class="descripcion">Tu esclavo robótico personal</p>
      <p class="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat faucibus luctus. Sed varius fringilla odio. Integer volutpat porta nunc nec iaculis. Nullam a neque in nibh gravida tincidunt in a metus. Donec ut pellentesque nibh. Proin scelerisque, leo vitae dignissim blandit, justo elit tempor libero, non placerat mauris nulla sit amet magna. Fusce ornare tellus non euismod blandit.</p>
      <p class="textoregistro">¿No te has registrado aún?</p>
      <div class="button2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Registrate
      </div>
    </div>
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Usuario</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label>Contraseña</label>
        </div>
        <a href="/register" class="textoOlvidaContrasenya">¿Has olvidado la contraseña?</a>
        <a href="#" class="botonEnviar">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Enviar
        </a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "../helpers/axios_import";

export default {
  data: function () {
    return {};
  },
  methods: {},
};
</script>
