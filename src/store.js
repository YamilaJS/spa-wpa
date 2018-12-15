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
        text: articleFinded.text ? articleFinded.text : '',
        firm: articleFinded.firm ? articleFinded.firm : ''
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
    async seeArticle({ commit, dispatch, getters, state }, findParams = {
      date: '',
      title: ''
    }) {
      commit('setFindParam', findParams)
      if (!getters.getArticle.title) {
        const fullArticleFetched = await services.fetchFullArticle(findParams.date, findParams.title)
        commit('addFullArticle', fullArticleFetched)
      } else if (getters.getArticle.title && !getters.getArticle.text) {
        const fullArticleFetched = await services.fetchFullArticle(findParams.date, findParams.title)
        commit('addContentArticle', {
          date: findParams.date,
          title: findParams.title,
          text: fullArticleFetched.text,
          firm: fullArticleFetched.firm
        })
      }
      return
    },
  },
  mutations: {
    addArticleList(state, articles) {
      state.articles = articles
    },
    addFullArticle(state, fullArticle) {
      console.log("leo")
      console.log(fullArticle)
      state.articles.push(fullArticle)
    },
    setFindParam(state, findParams) {
      state.findParams = {
        date: findParams.date,
        title: findParams.title
      }
    },
    addContentArticle(state, payload = {
      date: '',
      title: '',
      text: '',
      firm: ''
    }) {
      const indexFinded = state.articles.findIndex(
        article => article.title === payload.title && article.date === payload.date
      )
      const newArticles = [...state.articles]
      newArticles[indexFinded].text = payload.text
      newArticles[indexFinded].firm = payload.firm
      state.articles = newArticles
    }
  }
})
