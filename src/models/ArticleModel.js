function ArticleModel(param = {

    date : '',
    title : '',
    subTitle : '',
    description : '',
    banner : '',
    content : [],
    firm : ''

}){
    

    this.date = ''
    this.title = ''
    this.subTitle = ''
    this.description = ''
    this.banner = ''
    this.content = []
    this.firm = ''
    

    if( validator.str(param.date)(date => date) ) this.date = param.date
    else throw ''

    if( validator.str(param.title)(title => title) ) this.title = param.title
    else throw ''

        
    this.subTitle = param.subTitle
    this.description = param.description
    this.banner = param.banner
    this.content = param.content
    this.firm = param.firm
    
}

let validator = {
    range(v){
        return function(c){
            return c(v) ? true : false
        }
    },
    num(n){
        return typeof n === 'number' ? this.range(n) : false
    },
    str(s){
        return typeof s === 'string' ? this.range(s) : false
    },
    bool(b){
        return typeof b === 'boolean' ? this.range(b) : false
    }
}

validator.num(8)(v => v >= 8)


export default ArticleModel