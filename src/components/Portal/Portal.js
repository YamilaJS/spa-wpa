import ovHeader from "@/components/shared/ovHeader";
export default {
  name: 'portal',
  components: {ovHeader},
  props: ['articles'],

  methods:{
    createLink(date ,title){
      var tituloFormatiado = title.replace(/ /g,'_');
      return `article/${date}/${tituloFormatiado}`
    }
  }
}
