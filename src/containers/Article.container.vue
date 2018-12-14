<template>
 <div>
{{$route.params.date}}
{{$route.params.title}}
 </div>
</template>

<script>
import { mapActions, mapState } from "vuex";


export default {
  components: {
    
  },
  methods: {
   ...mapActions(['getArticleDetail']),
   disFormartLink(titleUrl){
     var tituloOriginal = titleUrl.replace(/_/g,' ');
     return `article/${tituloOriginal}`
   }
  },
  computed: {
  },
  mounted(){
    this.getArticleDetail({
      date:this.$route.params.date, 
      title:this.$route.params.title
    })
  },
  created() {
    console.log(this.disFormartLink('leo_es_un_gato'))
  }
};
</script>