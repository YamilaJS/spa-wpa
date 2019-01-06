import fakeData from './fakeData'
import ArticleModel from './models/ArticleModel'
import HeaderModel from './models/HeaderModel'

const ArticleServices = {
    async fetchArticleList() {
        let articleHeaders = [HeaderModel]
        articleHeaders = fakeData.fakeFetchArticles.map((article = new HeaderModel()) => {
            return new HeaderModel({
                banner: article.banner,
                date: article.date,
                title: article.title,
                subTitle: article.subTitle,
                description: article.description
            })
        })
        return articleHeaders
    },
    async fetchFullArticle(date, title) {
        const findedFullArticle = fakeData.fakeFetchArticles.find(article => article.date === date && article.title === title)
        const fullArticleModeled = new ArticleModel(findedFullArticle)
        return fullArticleModeled
    }
}

export default ArticleServices