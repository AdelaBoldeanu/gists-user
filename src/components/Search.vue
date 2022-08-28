<template>
  <div>
    <div class="search-container">
      <form @submit.prevent="searchGists()">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          v-model="searchValue"
        />
        <button type="submit">
          <img src="../assets/images/search.svg" alt="" />
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: "",
    };
  },

  methods: {
    searchGists() {
      this.$emit("searchGists", this.searchValue);
    },
  },
};
</script>