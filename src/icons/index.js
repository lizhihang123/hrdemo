import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
// 创建一个svg-icon组件 使用所有的svg文件
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
// 把项目中所有的svg格式的文件导入进来 从svg文件夹里面导入
