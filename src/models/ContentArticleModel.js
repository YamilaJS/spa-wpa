import validator from '../utils/validator';
import { throws } from 'assert';

const defaultParam = {
    content: []
}

function ContentArticleModel(param = defaultParam) {
    this.buildWithDefaultValues()
    this.validateParam(param)
    this.setProps(param)
}

ContentArticleModel.defaultParam = {
    content: [],
}

ContentArticleModel.prototype.buildWithDefaultValues = function () {
    this.content = []
}

ContentArticleModel.prototype.validateParam = (param = defaultParam) => {
    param.content.map((item, index) => {
        if (typeof item !== 'object') throw `ContentArticleModel: content[${index}] param is not valid`
    })
}

ContentArticleModel.prototype.setProps = function (param = defaultParam) {
    this.content = param.content
}

export default ContentArticleModel
