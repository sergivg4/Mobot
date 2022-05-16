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

</style>
<template>
  <div id="info">
    <div class="info-box">
      <label class="welcomeLabel">INFORMACION SOBRE MOBOT</label>
      <h2>Tu esclavo robótico personal</h2>
      <p class="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat faucibus luctus. Sed varius fringilla odio. Integer volutpat porta nunc nec iaculis. Nullam a neque in nibh gravida tincidunt in a metus. Donec ut pellentesque nibh. Proin scelerisque, leo vitae dignissim blandit, justo elit tempor libero, non placerat mauris nulla sit amet magna. Fusce ornare tellus non euismod blandit.</p>
    </div>
    <div class="info-box2">
      <p class="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat faucibus luctus. Sed varius fringilla odio. Integer volutpat porta nunc nec iaculis. Nullam a neque in nibh gravida tincidunt in a metus. Donec ut pellentesque nibh. Proin scelerisque, leo vitae dignissim blandit, justo elit tempor libero, non placerat mauris nulla sit amet magna. Fusce ornare tellus non euismod blandit.</p>
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
