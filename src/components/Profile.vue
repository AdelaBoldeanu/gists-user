<template>
  <div class="user-profile" v-if="user.data">
    <img :src="user.data.avatar_url" alt="" />
    <h3 class="user-profile__name">{{ user.data.name }}</h3>
    <p class="user-profile__username">{{ user.data.login }}</p>
    <p class="user-profile__description">{{ user.data.bio }}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    items: {
      type: Object,
      default: () => {},
      require: true,
    },
  },
  data() {
    return {
      user: [],
    };
  },
  async mounted() {
    if (this.items && this.items.data) {
      this.user = await axios.get(this.items.data[1].owner.url);
    }
  },
};
</script>