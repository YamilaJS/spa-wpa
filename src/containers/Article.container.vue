<template>
  <Article :article="article"/>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Article from "@/components/Article";

export default {
  components: {Article},
  methods: {
    ...mapActions(["seeArticle"]),
    disFormartLink(titleUrl) {
      return titleUrl.replace(/_/g, " ");
    }
  },
  computed: mapGetters({ article: "getArticle" }),
  mounted() {
    this.seeArticle({
      date: this.$route.params.date,
      title: this.disFormartLink(this.$route.params.title)
    });
  }
};
</script>