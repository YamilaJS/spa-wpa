import Vue from 'vue'
import Vuex from 'vuex'
import services from './services'
import ArticleModel from './models/ArticleModel'

Vue.use(Vuex)

const store = {}
store.state = {
  articles: [],
  findParams: {
    date: '',
    title: ''
  }
};
store.getters = {
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
      content: articleFinded.content ? articleFinded.content : [],
      firm: articleFinded.firm ? articleFinded.firm : ''
    }
    else return {
      title: '',
      subTitle: '',
      description: '',
      banner: '',
      date: '',
      content: [],
      firm: ''
    }
  }
};

store.actions = {
  async loadArticleList({ commit }) {
    const articlesFecheds = await services.fetchArticleHeaderList()
    commit('addArticleList', articlesFecheds)
    return
  },
  async seeArticle({ commit, getters }, findParams = {
    date: '',
    title: ''
  }) {
    commit('setFindParam', findParams)
    if (!getters.getArticle.title) {
      const fullArticleFetched = await services.fetchFullArticle(findParams.date, findParams.title)
      commit('addFullArticle', fullArticleFetched)
    } else if (getters.getArticle.title && !getters.getArticle.content.lenght) {
      // realmente aca se deberia ir a buscar solo el contenido del articulo
      const contentFetched = await services.fetchContentArticle(findParams.date, findParams.title)
      commit('addContentArticle', {
        date: findParams.date,
        title: findParams.title,
        content: contentFetched.content
      })
    }
    return
  },
}

store.mutations = {
  addArticleList(state, articles = []) {
    state.articles = articles
    return
  },
  addFullArticle(state, fullArticle = new ArticleModel()) {
    fullArticle instanceof ArticleModel && state.articles.push(fullArticle)
    return
  },
  setFindParam(state, findParams = {
    date: '',
    title: ''
  }) {
    state.findParams = {
      date: findParams.date,
      title: findParams.title
    }
    return
  },
  addContentArticle(state, content = {
    date: '',
    title: '',
    content: [],
    firm: ''
  }) {
    const indexFinded = state.articles.findIndex(
      article => article.title === content.title && article.date === content.date
    )
    const newArticles = [...state.articles]
    newArticles[indexFinded].content = content.content
    state.articles = newArticles
    return
  }
}

export default new Vuex.Store(store)
