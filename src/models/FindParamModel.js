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

function FindParamModel(param = defaultParam) {
    this.buildWithDefaultValues()
    this.validateParam(param)
    this.setProps(param)
}

FindParamModel.defaultParam = {
    date: '',
    title: '',
    subTitle: '',
    description: '',
    banner: '',
    content: [],
    firm: ''
}

FindParamModel.prototype.buildWithDefaultValues = function () {
    this.date = ''
    this.title = ''
    this.subTitle = ''
    this.banner = ''
    this.description = ''
    this.content = []
    this.firm = ''
}

FindParamModel.prototype.validateParam = (param = defaultParam) => {
    if (!validator.str(param.date)(date => date)) {
        throw 'FindParamModel: date param is not valid'
    }
    if (!validator.str(param.title)(title => title)) {
        throw 'FindParamModel: title param is not valid'
    }
    if (!validator.str(param.subTitle)(subTitle => subTitle)) {
        throw 'FindParamModel: subTitle param is not valid'
    }
    if (!validator.str(param.description)(description => description)) {
        throw 'FindParamModel: description param is not valid'
    }
    if (!validator.str(param.banner)(banner => banner)) {
        throw 'FindParamModel: banner param is not valid'
    }
    if (!param.content.length) {
        throw 'FindParamModel: content param is not valid'
    }

    param.content.map((item, index) => {
        if (typeof item !== 'object') throw `FindParamModel: content[${index}] param is not valid`
    })

    if (!validator.str(param.firm)(firm => firm)) {
        throw 'FindParamModel: firm param is not valid'
    }
}

FindParamModel.prototype.setProps = function (param = defaultParam) {
    this.date = param.date
    this.title = param.title
    this.subTitle = param.subTitle
    this.banner = param.banner
    this.description = param.description
    this.content = param.content
    this.firm = param.firm
}

export default FindParamModel
