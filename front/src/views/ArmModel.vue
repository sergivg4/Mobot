<template>
  <div id="ArmModel">
      ArmModel
  </div>
</template>
<style>
  @import '../styles/app.css';
</style>
<script>
  import axios from "../helpers/axios_import";
/*   import 'vue-loading-overlay/dist/vue-loading.css';
 */  
export default {
  
    data: function () {
      return {
        name:"Home",

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
