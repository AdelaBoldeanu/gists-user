<template>
  <div>
    <search @searchGists="searchGists"></search>
    <div class="container">
      <div v-if="items.data" class="d-flex">
        <div class="profile">
          <profile :items="items"></profile>
        </div>
        <div class="results">
          <div v-for="item in items.data" :key="item.id">
            <results :item="item"></results>
          </div>
        </div>
      </div>
      <div v-else-if="noResults" class="no_results">
        We don't have results for your search!
      </div>
      <div v-else class="no_results">Search gists for a user!</div>
    </div>
  </div>
</template>
<script>
import Search from "../components/Search.vue";
import Profile from "../components/Profile.vue";
import Results from "../components/Results.vue";
import axios from "axios";
export default {
  components: {
    Search,
    Profile,
    Results,
  },
  data() {
    return {
      items: [],
      noResults: false,
    };
  },
  methods: {
    async searchGists(username) {
      this.items = await axios.get(
        "https://api.github.com/users/" + username + "/gists"
      );
      if (!this.items) {
        this.noResults = true;
      }
    },
  },
};
</script>
