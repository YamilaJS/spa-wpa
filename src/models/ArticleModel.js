import validator from '../utils/validator';
import { throws } from 'assert';

const defaultParam = {
    date: '',
    title: '',
    subTitle: '',
    description: '',
    banner: '',
    content: [],
    firm: ''
}

function ArticleModel(param = defaultParam) {
    this.buildWithDefaultValues()
    this.validateParam(param)
    this.setProps(param)
}

ArticleModel.prototype.buildWithDefaultValues = function () {
    this.date = ''
    this.title = ''
    this.subTitle = ''
    this.banner = ''
    this.description = ''
    this.content = []
    this.firm = ''
}

ArticleModel.prototype.validateParam = (param) => {
    if (!validator.str(param.date)(date => date)) {
        throw 'ArticleModel: date param is not valid'
    }
    if (!validator.str(param.title)(title => title)) {
        throw 'ArticleModel: title param is not valid'
    }
    if (!validator.str(param.subTitle)(subTitle => subTitle)) {
        throw 'ArticleModel: subTitle param is not valid'
    }
    if (!validator.str(param.description)(description => description)) {
        throw 'ArticleModel: description param is not valid'
    }
    if (!validator.str(param.banner)(banner => banner)) {
        throw 'ArticleModel: banner param is not valid'
    }
    if (!param.content.length) {
        throw 'ArticleModel: content param is not valid'
    }

    param.content.map((item, index) => {
        if(typeof item !== 'object' ) throw `ArticleModel: content[${index}] param is not valid`
    })

    if (!validator.str(param.firm)(firm => firm)) {
        throw 'ArticleModel: firm param is not valid'
    }
}

ArticleModel.prototype.setProps = function (param = defaultParam) {
    this.date = param.date
    this.title = param.title
    this.subTitle = param.subTitle
    this.banner = param.banner
    this.description = param.description
    this.content = param.content
    this.firm = param.firm
}

export default ArticleModel