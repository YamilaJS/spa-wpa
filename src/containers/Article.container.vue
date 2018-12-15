<template>
 <div>

  <label>title:</label>{{article.title}}<br>
  <label>text:</label>{{article.text}}<br>

 </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { setTimeout } from 'timers';

export default {
  components: {
    
  },
  methods: {
   ...mapActions(['seeArticle']),
   disFormartLink(titleUrl){
     return titleUrl.replace(/_/g,' ');
   }
  },
  computed: mapGetters({article:'getArticle'}),
  mounted(){
    this.seeArticle({
      date: this.$route.params.date,
      title: this.disFormartLink(this.$route.params.title)
    })
  },
};
</script>