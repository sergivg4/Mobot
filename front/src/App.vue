<template>
  <div id="app">
<router-view />
  </div>
</template>
<style>
  body{
    background: linear-gradient(#191A1F 50%, rgba(7,6,93,1) 73%, rgba(16,16,185,1) 104%) !important;
  }
</style>
<script>
  import axios from "./helpers/axios_import";
  import 'vue-loading-overlay/dist/vue-loading.css';

  export default {
    data: function () {
      return {
        auth: false,
        userData: {},
        hiddenView: false
      }
    },
    sockets:{
    },
    methods:{
    },
    watch: {
      /* '$route': {
        immediate: true,
        handler(newValue) {
          this.hiddenView = false
          if (newValue['name'] == 'Login' || newValue['name'] == 'Register' || newValue['name'] == 'RecoveryEmail' ||
            newValue['name'] == 'ResetPassword' || newValue['name'] == 'NotFound') {
            this.auth = false
          } else {
            this.auth = true
          }
        } 
      },*/
    },
    /* mounted() {
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
    }*/
  }

</script>
