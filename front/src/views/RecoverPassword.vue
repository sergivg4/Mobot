<style>

.textoVolverLogin{
  color: #ffffff;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  margin-right: 122px;
}

.recoverp-box {
  position: absolute;
  display: flex;
  flex-flow: row wrap;
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

.recoverp-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.recoverp-box .user-box {
  position: relative;
}

.recoverp-box .user-box input {
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
.recoverp-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.recoverp-box .user-box input:focus ~ label,
.recoverp-box .user-box input:valid ~ label {
  top: -22px;
  left: 0;
  color: #05e2e2;
  font-size: 14px;
}

.recoverp-box form .botonEnviar {
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

.recoverp-box .botonEnviar:hover {
  background: #05e2e2;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 2px #05e2e2, 0 0 10px #05e2e2, 0 0 20px #05e2e2,
    0 0 40px #05e2e2;
}

.recoverp-box .botonEnviar span {
  position: absolute;
  display: block;
}

.recoverp-box .botonEnviar span:nth-child(1) {
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

.recoverp-box .botonEnviar span:nth-child(2) {
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

.recoverp-box .botonEnviar span:nth-child(3) {
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

.recoverp-box .botonEnviar span:nth-child(4) {
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

.button3 {
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
  margin-left: 39.5%;
  cursor: pointer;
}
.button3:hover {
  border: 2px solid transparent;
}
.button3:hover span {
  position: absolute;
  display: block;
}
.button3:hover span:nth-child(1) {
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
.button3:hover span:nth-child(2) {
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
.button3:hover span:nth-child(3) {
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
.button3:hover span:nth-child(4) {
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

@media only screen and (max-width: 500px){

  .recoverp-box {
    background: none;
    box-shadow: none;
    top: 55%;
    left: 50%;
    gap: 10px;
  }

  .button3{
    top: 370px;
    width: 50%;
    left: -17%;
  }
}

@media only screen and (max-width: 350px){

  .recoverp-box{
    left: 55%;
  }

  .button3{
    top: 420px;
    width: 65%;
    left: -15%;
  }
}

</style>
<template>
  <div id="recover-password">
    <div class="mobotTitle">MOBOT</div>
    <div class="welcome-box">
      <label class="welcomeLabel">BIENVENIDO A MOBOT</label>
      <h2>Tu esclavo robótico personal</h2>
      <p class="descripcion">Siéntete libre de mandar órdenes a MOBOT. Él te escuchará y te obedecerá sin rechistar. Registrate en MOBOT si quieres disfrutar del 100% de la experiéncia y si quieres recibir todas las noticias y notificaciones para no perderte ninguna actualización futura.</p>
      <br>
      <div class="button3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Volver al login
      </div>
    </div>
    <div class="recoverp-box">
      <h2>Cambia tu contraseña</h2>
      <form>
        <div class="user-box user-box-register">
          <input type="password" name="" required="" />
          <label>Nueva contraseña</label>
        </div>
        <div class="user-box user-box-register">
          <input type="password" name="" required="" />
          <label>Repite la nueva contraseña</label>
        </div>
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
<style>
</style>
<script>
  import axios from "../helpers/axios_import";
/*   import 'vue-loading-overlay/dist/vue-loading.css';
 */  
export default {
    data: function () {
      return {

      }
    },
    methods:{
    },
    mounted() {
      axios.interceptors.response.use((response) => {
          return response;
      }, (error) => {
          if(error.response.status === 401) {
              localStorage.clear();
              this.$router.push('/')
          }
          return error;
      });
      if (localStorage.getItem('userData')) {
        this.userData = JSON.parse(localStorage.getItem('userData'));
      }
    }
  }

</script>
