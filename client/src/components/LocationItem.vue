<template>
  <q-item>
    <div @click="sendID(location._id, $event)" class="location-item text-center" v-for="(location, i) in locations" :key="location._id" >
      <div class="item-wrapper">
        <div class="delete-bar text-right">
          <q-btn
          round
          dense
          color="negative"
          size="sm"
          icon="close"
          class="delete-btn"
          @click="removeLocation(location, i)"
          />
        </div>
        <div class="item-header q-pb-sm">
          <h5 class="q-pb-sm">{{ location.name }}</h5>
          <p>{{ location.address }}</p>
        </div>
        <hr />
        <div class="item-footer q-pt-sm">
          <span class="details-icon">
            <q-icon
            name="restaurant"
            />
          </span>
          <span class="details-icon">
            <q-icon
            name="attach_money"
            class="price"
            />
            <q-icon
            name="attach_money"
            class="price"
            />
          </span>
          <span class="details-icon">
            <q-icon
            name="star"
            />{{ location.rating }}
          </span>
        </div>
      </div>
    </div>
  </q-item>
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      locations: [],
    }
  },
  async mounted() {
    const response = await axios.get("api/locationList/");
    this.locations = response.data;
  },
  methods: {
    async removeLocation(item, i) {
      await axios.delete("api/locationList/" + item._id);
      this.locations.splice(i, 1);
    },
    sendID(locationid, event) {
      if(!event.target.parentNode.parentNode.classList.contains('delete-btn')){
        this.$router.push({
          path: '/location-details',
          query: { id: locationid }
        })
      } else {
        console.log('you deleted an item')
      }
    }
  },
});
</script>
<style lang="scss" scoped>
h5 {
  font-size: 18px;
  margin: 0;
  line-height: 1.1em;
  font-weight: 600;
}
p {
  margin: 0;
}

.q-item {
  display: block;
}
.location-item {
  background-image: linear-gradient(
    to right bottom,
    #475c7a,
    #505c7b,
    #595c7b,
    #615d7a,
    #685d79
  );
  margin: 10px;
  border-radius: 20px;

  .item-wrapper {
    padding: 20px;
    font-size: 16px;
    position: relative;
    .delete-bar {
      position: absolute;
      width: 100%;
      right: -5px;
      top: -5px;
    }
    .item-header {
      color: white;
      margin-top: 10px;
    }
    .item-footer {
      color: white;
      margin-top: 5px;
      .details-icon {
        border-radius: 20px;
        color: rgb(255, 255, 255);
        margin: 10px;
      }
      .price {
        margin-right: -3px;
      }
      .q-icon {
        font-size: 22px;
        margin-top: -5px;
      }
    }
  }
  .inline {
    display: inline-block;
  }
}
</style>
