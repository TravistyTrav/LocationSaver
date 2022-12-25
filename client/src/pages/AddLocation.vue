<template>
  <q-page class="q-pa-lg">
    <p>Find Your Venue Location</p>
    <input type="text" ref="streetRef" label="Find Location" />
    <q-btn
      color="info"
      label="Add Location"
      class="q-mt-md"
      @click="saveLocationData"
    />
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
import { onMounted, onUnmounted, ref } from "vue";
import axios from "axios";

let locationData;

export default defineComponent({
  name: "AddLocation",
  methods: {
    async saveLocationData(e) {
      e.preventDefault();
      const response = await axios.post("api/locationList/", {
        // push location data to the database
        name: locationData.name,
        address: locationData.formatted_address,
        phone: locationData.formatted_phone_number,
        hours: locationData.opening_hours.weekday_text,
        price: locationData.price_level,
        rating: locationData.rating,
        reviews: locationData.reviews,
        place_id: locationData.place_id,
        website: locationData.website

        //inform the user on success location added
      });
      console.log(locationData);
      //this.todos.push(response.data);
      //this.title = "";
      //this.description = "";
      this.$router.push('/')
    }
  },
  setup() {
    const streetRef = ref();
    let autocomplete;

    onMounted(() => {
      autocomplete = new google.maps.places.Autocomplete(streetRef.value, {
        types: ["establishment"],
        fields: [
          "name",
          "formatted_address",
          "formatted_phone_number",
          "opening_hours",
          "price_level",
          "rating",
          "reviews",
          "place_id",
          "website"
        ],
      });

      google.maps.event.addListener(autocomplete, "place_changed", () => {
        locationData = autocomplete.getPlace();
      });
    });

    onUnmounted(() => {
      if (autocomplete) {
        google.maps.event.clearInstanceListeners(autocomplete);
      }
    });
    return { streetRef };
  },
});
</script>
<style scoped lang="scss">
input {
  width: 100%;
  padding: 10px;
}
.pac-container {
  z-index: 9999 !important;
}
</style>
