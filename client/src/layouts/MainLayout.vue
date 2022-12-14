<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="heading-thing">
      <q-toolbar>
        <q-toolbar-title><b>Location Saver</b></q-toolbar-title>
        <q-btn color="info" rounded dense icon="home" to="/" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
});
</script>
<style scoped lang="scss">
.heading-thing {
  background-image: linear-gradient(
    to right bottom,
    #475c7a,
    #505c7b,
    #595c7b,
    #615d7a,
    #685d79
  );
  padding-left: 15px;
  padding-right: 15px;
}
</style>
