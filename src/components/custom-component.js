import message from './message/index'

const customComponent = {}

customComponent.install = function(Vue) {
    Vue.prototype.$message = message
}

export default customComponent