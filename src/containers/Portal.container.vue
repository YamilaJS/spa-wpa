<template>
  <Portal :articles="articles"/>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Portal from "@/components/Portal";

export default {
  components: {
    Portal
  },
  methods: {
    ...mapActions(["loadArticleList"])
  },
  computed: mapState({
    articles: 'articles'
  }),
  created() {
    this.loadArticleList();
  }
};
</script>