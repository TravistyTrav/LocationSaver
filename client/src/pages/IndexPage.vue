<template>
  <q-page>
    <location-item></location-item>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn to="/add-location" fab icon="add" color="info" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LocationItem from "components/LocationItem.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    LocationItem,
  },
});
</script>
