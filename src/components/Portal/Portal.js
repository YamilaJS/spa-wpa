import ovHeader from "@/components/shared/ovHeader";
import ovGoshButtom from "@/components/shared/ovGoshButtom";
export default {
  name: 'portal',
  components: {ovHeader,ovGoshButtom },
  props: ['articles'],

  methods:{
    createLink(date ,title){
      var tituloFormatiado = title.replace(/ /g,'_');
      return `article/${date}/${tituloFormatiado}`
    }
  }
}
