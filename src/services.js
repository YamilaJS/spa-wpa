import fakeData from './fakeData'
import ArticleModel from './models/ArticleModel'
import HeaderArticleModel from './models/HeaderArticleModel'
import ContentArticleModel from './models/ContentArticleModel'

const articleServices = {}

articleServices.fetchArticleHeaderList = async () => {
    let articleHeaders = [HeaderArticleModel]
    articleHeaders = fakeData.fakeFetchArticles.map((article = new HeaderArticleModel()) => {
        return new HeaderArticleModel({
            banner: article.banner,
            date: article.date,
            title: article.title,
            subTitle: article.subTitle,
            description: article.description
        })
    })
    return articleHeaders
}

articleServices.fetchContentArticle = async (date = '', title = '') => {
    const findedArticle = fakeData.fakeFetchArticles.find(article => article.date === date && article.title === title)
    const contentArticleModeled = new ContentArticleModel(findedArticle) // Esto lo tengo que cambiar xD
    return contentArticleModeled
}

articleServices.fetchFullArticle = async (date, title) => {
    const findedFullArticle = fakeData.fakeFetchArticles.find(article => article.date === date && article.title === title)
    const fullArticleModeled = new ArticleModel(findedFullArticle)
    return fullArticleModeled
}

export default articleServices