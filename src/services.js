import fakeData from './fakeData'

export default {
    fetchArticleList: async () => fakeData.fakeFetchArticles,
    async fetchFullArticle(date, title) {
        return fakeData.fakeFetchContent.find(article => article.date === date && article.title === title)
    }
}