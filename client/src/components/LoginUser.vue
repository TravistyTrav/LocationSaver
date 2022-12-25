<template>
  <div class="login-prompt q-pa-lg text-center">
    <h4 class="q-mb-md">Welcome to TryTime</h4>
    <p>We've noticed that you're not logged in!<br/>you should probably fuckin fix that ey'</p>
    <q-btn icon="login" color="info" label="Login" @click="loginClick" class="q-mt-sm"/>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { login } from '../utils/auth/auth';


export default defineComponent({
  name: 'LoginUser',
  methods: {
    loginClick() {
      login();
    }
  }
})
</script>
