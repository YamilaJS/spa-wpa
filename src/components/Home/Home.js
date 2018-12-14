export default {
  name: 'home',
  components: {},
  props: ['articles'],

  methods:{
    createLink(date ,title){
      var tituloFormatiado = title.replace(/ /g,'_');
      return `article/${date}/${tituloFormatiado}`
    }
  }
}
