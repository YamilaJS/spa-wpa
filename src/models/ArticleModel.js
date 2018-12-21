import validator from '../utils/validator';

function ArticleModel(
    
    param = {
        date: '',
        title: '',
        subTitle: '',
        description: '',
        banner: '',
        content: [],
        firm: ''
    }

) {

    if (validator.str(param.date)(date => date)) this.date = param.date
    else throw ''

    if (validator.str(param.title)(title => title)) this.title = param.title
    else throw ''

    if (validator.str(param.subTitle)(subTitle => subTitle)) this.subTitle = param.subTitle
    else throw ''

    if (validator.str(param.description)(description => description)) this.description = param.description
    else throw ''
    
    if (validator.str(param.banner)(banner => banner)) this.banner = param.banner
    else throw ''
    
    if (param.content.length) this.content = param.content
    else throw ''
    
    if (validator.str(param.firm)(firm => firm)) this.firm = param.firm
    else throw ''

}


export default ArticleModel