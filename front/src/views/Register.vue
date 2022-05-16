<style>

.user-box-register {
    width: 130%;
}

.textoregistro2{
    color: #ffffff;
    font-size: 22px;
    text-align: center;
    margin-top: 80px;
}

.register-box {
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

.register-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.register-box .user-box {
  position: relative;
}

.register-box .user-box input {
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
.register-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.register-box .user-box input:focus ~ label,
.register-box .user-box input:valid ~ label {
  top: -22px;
  left: 0;
  color: #05e2e2;
  font-size: 14px;
}

.register-box form .botonEnviar {
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

.register-box .botonEnviar:hover {
  background: #05e2e2;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 2px #05e2e2, 0 0 10px #05e2e2, 0 0 20px #05e2e2,
    0 0 40px #05e2e2;
}

.register-box .botonEnviar span {
  position: absolute;
  display: block;
}

.register-box .botonEnviar span:nth-child(1) {
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

.register-box .botonEnviar span:nth-child(2) {
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

.register-box .botonEnviar span:nth-child(3) {
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

.register-box .botonEnviar span:nth-child(4) {
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

@media only screen and (max-width: 500px){
  .register-box {
    background: none;
    box-shadow: none;
    top: 70%;
    left: 50%;
    gap: 10px;
  }

  .textoregistro2{
    margin-top: 660px !important;
    color: #ffffff;
    font-size: 16px;
    text-align: center;
    margin-top: 80px;
  }
}

@media only screen and (max-width: 350px){
  .register-box {
    left: 58%;
  }
}

</style>
<template>
  <div id="register">
      <div class="mobotTitle">MOBOT</div>
    <div class="welcome-box">
      <label class="welcomeLabel">BIENVENIDO A MOBOT</label>
      <p class="descripcion">Tu esclavo robótico personal</p>
      <p class="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat faucibus luctus. Sed varius fringilla odio. Integer volutpat porta nunc nec iaculis. Nullam a neque in nibh gravida tincidunt in a metus. Donec ut pellentesque nibh. Proin scelerisque, leo vitae dignissim blandit, justo elit tempor libero, non placerat mauris nulla sit amet magna. Fusce ornare tellus non euismod blandit.</p>
      <p class="textoregistro2">¿Ya estás registrado?</p>
      <div class="button2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Logeate
      </div>
    </div>
    <div class="register-box">
      <h2>Registrate</h2>
      <form>
        <div class="user-box user-box-register">
          <input type="text" name="" required="" />
          <label>Nombre</label>
        </div>
        <div class="user-box user-box-register">
          <input type="text" name="" required="" />
          <label>Apellidos</label>
        </div>
        <div class="user-box user-box-register">
          <input type="text" name="" required="" />
          <label>Email o Usuario</label>
        </div>
        <div class="user-box user-box-register">
          <input type="text" name="" required="" />
          <label>Telefono</label>
        </div>
        <div class="user-box user-box-register">
          <input type="password" name="" required="" />
          <label>Contraseña</label>
        </div>
        <div class="user-box user-box-register">
          <input type="password" name="" required="" />
          <label>Repite la contraseña</label>
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
