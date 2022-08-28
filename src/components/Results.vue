<template>
  <div class="gist-results">
    <div class="gist-results__margin">
      <div @click.prevent="openGist(firstFile.raw_url)">
        <div class="gist-results__details">
          <div class="gist-results__info">
            <img :src="item.owner.avatar_url" alt="" />
            <div>
              <h3>{{ item.owner.login }}/{{ firstFile.filename }}</h3>
              <p>
                {{ convertDate(item.created_at) }}
              </p>
            </div>
          </div>
          <div class="gist-results__flex">
            <div v-for="(language, index) in languages" :key="index">
              <div
                v-if="language"
                class="gist-results__language"
                :class="{ bg_blue: language === 'Python' }"
              >
                <p>
                  {{ language }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <forks :forks="forks.data"></forks>

      <div v-if="isActive" class="gist-content">
        <figure class="highlight">
          <pre
            class="language-html"
          ><code class=" language-html" data-lang="html"> {{ content.data}}
          </code></pre>
        </figure>
      </div>
    </div>
  </div>
</template>
<script>
import Forks from "../components/Forks.vue";
import moment from "moment";
import axios from "axios";
import _ from "lodash";
export default {
  components: {
    Forks,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
      require: true,
    },
  },
  data() {
    return {
      content: "",
      isActive: false,
      forks: [],
    };
  },

  computed: {
    firstFile() {
      return this.item.files[Object.keys(this.item.files)[0]];
    },
    languages() {
      return Object.values(this.item.files)
        .map((x) => x.language)
        .filter((v, i, s) => s.indexOf(v) === i);
    },
  },

  async mounted() {
    this.forks = await axios.get(this.item.forks_url);
  },
  methods: {
    async openGist(fileUrl) {
      this.isActive = !this.isActive;
      this.content = await axios.get(fileUrl);
    },
    convertDate(value) {
      return moment(String(value)).format("YYYY-MM-DD hh:mm:ss");
    },
  },
};
</script>