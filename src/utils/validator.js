const validator = {
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

export default validator