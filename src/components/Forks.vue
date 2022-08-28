<template>
  <div v-if="forks && forks.length > 0" class="forks">
    <div class="forks__items">
      <div>
        <h3>Forked by:</h3>
      </div>
      <div class="forked_by">
        <div v-for="(fork, index) in forks.slice(0, displayForks)" :key="index">
          <img :src="fork.owner.avatar_url" alt="" />
          <p>{{ fork.owner.login }}</p>
        </div>
      </div>
    </div>
    <div v-if="plusForks !== 0" class="plus-icon">
      <div v-if="displayForks === 3" @click.prevent="showForks">
        <img src="../assets/images/plus.svg" alt="" />
      </div>
      <div v-else @click.prevent="hideForks">
        <img src="../assets/images/minus.svg" alt="" />
      </div>
      <p class="tooltip">{{ plusForks }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    forks: {
      type: Object,
      default: () => {},
      require: true,
    },
  },
  data() {
    return {
      displayForks: 3,
    };
  },
  computed: {
    plusForks() {
      if (this.forks.length > 3) {
        return this.forks.length - 3;
      }
      return 0;
    },
  },
  methods: {
    showForks() {
      this.displayForks = this.forks.length;
    },
    hideForks() {
      this.displayForks = 3;
    },
  },
};
</script>