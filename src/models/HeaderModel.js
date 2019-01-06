import validator from '../utils/validator';
import { throws } from 'assert';

const defaultParam = {
    date: '',
    title: '',
    subTitle: '',
    description: '',
    banner: ''
}

function HeaderModel(param = defaultParam) {
    this.buildWithDefaultValues()
    this.validateParam(param)
    this.setProps(param)
}

HeaderModel.prototype.buildWithDefaultValues = function () {
    this.date = ''
    this.title = ''
    this.subTitle = ''
    this.banner = ''
    this.description = ''
}

HeaderModel.prototype.validateParam = (param = defaultParam) => {
    if (!validator.str(param.date)(date => date)) {
        throw 'HeaderModel: date param is not valid'
    }
    if (!validator.str(param.title)(title => title)) {
        throw 'HeaderModel: title param is not valid'
    }
    if (!validator.str(param.subTitle)(subTitle => subTitle)) {
        throw 'HeaderModel: subTitle param is not valid'
    }
    if (!validator.str(param.description)(description => description)) {
        throw 'HeaderModel: description param is not valid'
    }
    if (!validator.str(param.banner)(banner => banner)) {
        throw 'HeaderModel: banner param is not valid'
    }
}

HeaderModel.prototype.setProps = function (param = defaultParam) {
    this.date = param.date
    this.title = param.title
    this.subTitle = param.subTitle
    this.banner = param.banner
    this.description = param.description
}

export default HeaderModel