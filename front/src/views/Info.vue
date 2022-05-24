<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap%27');

body{
font-family: 'Inter', sans-serif;
}

.info-box {
  display: flex;
  flex-flow: column;
  gap: 30px;
  position: absolute;
  top: 40%;
  left: 30%;
  width: 900px;
  padding: 40px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  justify-content: space-around;
}

.info-box2 {
  display: flex;
  flex-flow: column;
  gap: 30px;
  position: absolute;
  top: 55%;
  left: 75%;
  width: 900px;
  padding: 40px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  justify-content: space-around;
}

.imgrobotinfo{
  width: 60%;
  height: 60%;
  margin-left: 15%;
}

.descripcionInfo{
  color: #ffffff;
  font-size: 28px;
}

@media only screen and (max-width: 500px){
  .imgrobotinfo{
    margin-left: 30%;
  }

  .descripcionInfo{
    font-size: 14px;
  }

  .info-box{
    top: 25%;
    left: 44%;
    width: 100%;
  }

  .info-box2{
    width: 100%;
    top: 75%;
    left: 44%;
  }
}

@media only screen and (max-width: 350px){
  .info-box{
    left: 42%;
  }

  .info-box2{
    left: 42%;
    top: 80%;
  }
}

</style>
<template>
  <div id="info">
    <div class="info-box">
      <label class="welcomeLabel">INFORMACION SOBRE MOBOT</label>
      <h2>Tu esclavo robótico personal</h2>
      <p class="descripcionInfo">MOBOT es un brazo robótico virtual al que puedes mover usando tu voz. Pulsa en el botón de interacción y reproduce los comandos de voz que MOBOT entiende por defecto o, si te registras, personaliza tu propio movimiento y guárdalo asignándolo a un comando propio. MOBOT tiene cinco ejes independientes y está completamente modulado con three.js. Para customizar un movimiento, solo tienes que pulsar sobre los ejes y moverlos hasta la posición que desees.  </p>
    </div>
    <div class="info-box2">
      <p class="descripcionInfo">Éste proyecto ha sido realizado por el segundo grupo de 2º de DAW del instituto IES Badia del Vallès, formado por Manuel Quesada Ruiz, Sergi Valenzuela Garcia y Roger Reyes Iso.</p>
      <img class="imgrobotinfo" src="../assets/450_1000.png">
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
