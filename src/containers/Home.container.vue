<template>
  <Home :articles="articles"/>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Home from "@/components/Home";

export default {
  components: {
    Home
  },
  methods: {
    ...mapActions(["getHomeArticles"])
  },
  computed: mapState({
    articles: 'articles'
  }),
  created() {
    this.getHomeArticles();
  }
};
</script>