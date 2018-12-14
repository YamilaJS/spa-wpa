import Vue from 'vue'
import Vuex from 'vuex'
import services from './services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles:[],
    articleDetail:{}
  },
  getters:{
    
  },
  actions: {
    async getHomeArticles({commit}){
      const articlesFecheds = await services.fetchArticles()
      commit('addArticles', articlesFecheds)
      return
    },
    async getArticleDetail({commmit}, articleIdentification){
      console.log(articleIdentification.date,articleIdentification.title)


    }
  },
  mutations: {
    addArticles (state, payload) {
      state.articles = payload
    }
  }
})
