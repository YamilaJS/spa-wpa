import Vue from 'vue'
import Vuex from 'vuex'
import services from './services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    findParams: {
      date: '',
      title: ''
    }
  },
  getters: {
    getArticle: state => {  
      const articleFinded = state.articles.find(article => {
        return article.title === state.findParams.title && article.date === state.findParams.date
      })
      if (articleFinded) return {
        title: articleFinded.title,
        subTitle: articleFinded.subTitle,
        description: articleFinded.description,
        banner: articleFinded.banner,
        date: articleFinded.date,
        text: '',
        firm: ''
      }
      else return {
        title: '',
        subTitle: '',
        description: '',
        banner: '',
        date: '',
        text: '',
        firm: ''
      }
    }
  },
  actions: {
    async loadArticleList({ commit }) {
      const articlesFecheds = await services.fetchArticleList()
      commit('addArticleList', articlesFecheds)
      return
    },
    async seeArticle({ commit, dispatch, getters, state }, findParams) {
      commit('setFindParam', findParams)
      if (!state.articles.length) {
        await dispatch('loadFullArticle', findParams)
      } else {
          
      }
      return
    },
    async loadFullArticle({ commit }, findParams) {
      const fullArticleFetched = await services.fetchFullArticle(findParams.date, findParams.title)
      commit('addFullArticle', fullArticleFetched)
      return
    },
  },
  mutations: {
    addArticleList(state, articles) {
      state.articles = articles
    },
    addFullArticle(state, fullArticle) {
      state.articles.push(fullArticle)
    },
    setFindParam(state, findParams) {
      state.findParams = {
        date: findParams.date,
        title: findParams.title
      };
    },
    addContentArticle() {

    }
  }
})
