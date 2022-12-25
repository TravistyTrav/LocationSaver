<template>
  <q-page>
    <login-user v-if="!this.isLogged"></login-user>
    <location-item v-else></location-item>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn to="/add-location" fab icon="add" color="info" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LocationItem from "components/LocationItem.vue";
import LoginUser from "components/LoginUser.vue";
import { isLogged } from "../utils/auth/auth.js";

export default defineComponent({
  name: "IndexPage",
  components: {
    LocationItem,
    LoginUser
  },
  data: () => {
    return {
      isLogged: isLogged()
    }
  }
});
</script>
