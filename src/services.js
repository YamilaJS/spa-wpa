import fakeData from './fakeData'

export default{
    fetchArticles: async () => fakeData.fakeFetchArticles,
    async fetchDetail (date,title){
        return fakeData.fakeFetchDetail.find(article => article.date === date && article.title === title)
    }
}