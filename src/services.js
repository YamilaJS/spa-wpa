import fakeData from './fakeData'
import ArticleModel from './models/ArticleModel'
const ArticleServices = {
    fetchArticleList() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(fakeData.fakeFetchArticles)
            }, 2000)
        })
    },
    async fetchFullArticle(date, title) {

        const findedFullArticle = fakeData.fakeFetchContent.find(article => article.date === date && article.title === title)
        const fullArticleModeled = new ArticleModel(findedFullArticle)
        return fullArticleModeled

    }
}

export default ArticleServices