


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


    var validator = {
        range(v) {
            return function (c) {
                return c(v) ? true : false
            }
        },
        num(n) {
            return typeof n === 'number' ? this.range(n) : false
        },
        str(s) {
            return typeof s === 'string' ? this.range(s) : false
        },
        bool(b) {
            return typeof b === 'boolean' ? this.range(b) : false
        }
    }


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