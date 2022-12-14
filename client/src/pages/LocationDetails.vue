<template>
    <div class="location-details">
        <h5 class="text-center q-pb-md">{{ thisLocation.name }}</h5>
        <p class="text-center q-pb-sm">{{ thisLocation.address }}</p>
        <div class="quick-access">
            <q-btn
            round
            size="md"
            @click="openURL('https://google.com')"
            class="quick-btn"
            color="info"
            icon="language"
            />
            <q-btn
            round
            size="md"
            class="quick-btn"
            color="info"
            icon="call"
            />
            <q-btn
            round
            size="md"
            class="quick-btn"
            color="info"
            icon="directions"
            />
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import axios from "axios"

export default defineComponent({
    data() {
        return {
            thisLocation: []
        }
    },
    methods: {
        openURL(event) {
            window.open(event)
        }
    },
    async mounted() {
        let locationID = this.$route.query.id.toString();
        const response = await axios.get("api/locationItem/" + locationID);
        this.thisLocation = response.data;
    },
})
</script>
<style scoped lang="scss">
.location-details {
    padding: 20px;

    .quick-access {
        display: flex;
        justify-content: center;

        .quick-btn {
            margin: 0 10px;
        }
    }
}

</style>
