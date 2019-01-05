import fakeData from './fakeData'
import ArticleModel from './models/ArticleModel'
const ArticleServices = {
    fetchArticleList() {
        return new Promise((resolve) => {
            const articleHeaders = fakeData.fakeFetchArticles.map(article => {
                return {
                    banner: article.banner,
                    date: article.date,
                    title: article.title,
                    subTitle: article.subTitle,
                    description: article.description
                }
            })

            console.log(articleHeaders)

            setTimeout(() => {
                resolve(articleHeaders)
            }, 2000)
        })
    },
    async fetchFullArticle(date, title) {
        const findedFullArticle = fakeData.fakeFetchArticles.find(article => article.date === date && article.title === title)
        const fullArticleModeled = new ArticleModel(findedFullArticle)
        return fullArticleModeled
    }
}

export default ArticleServices