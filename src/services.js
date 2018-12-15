import fakeData from './fakeData'

export default {
    fetchArticleList() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(fakeData.fakeFetchArticles)
            }, 2000)
        })
    },
    fetchFullArticle(date, title) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const findedFullArticle = fakeData.fakeFetchContent.find(article => article.date === date && article.title === title)
                resolve(findedFullArticle)
            }, 1500)
        })

    }
}