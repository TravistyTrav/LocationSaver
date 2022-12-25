<template>
<h5>Callback Loading...</h5>
</template>
<script>
import { defineComponent } from 'vue'
import { currentUser, handleAuth } from '../utils/auth/auth'

export default defineComponent({
  name: 'CallbackPage',
  beforeMount() {
    handleAuth( error => {
      if(error) {
        console.log(error);
        return;
      }

      console.log('Login successful');
      currentUser();
      this.$router.push('/');
    })
  }
})
</script>
