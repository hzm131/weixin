import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss'
import './app.scss'
import {View} from "@tarojs/components";
import {AtTabBar} from "taro-ui";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  config = {
    pages: [
      'pages/index/index',
      'pages/login/index',
      'pages/manage/index',
      'pages/mine/index'

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
         "color": "#999",
         "selectedColor": "#13a0ff",
         "borderStyle": "black" ,
         "list": [{
          "selectedIconPath": "images/selectedindex.png",
          "iconPath": "images/index.png",
           "pagePath": "pages/index/index",
           "text": "首页"
        }, {
          "selectedIconPath": "images/selectedmanage.png",
          "iconPath": "images/manage.png",
          "pagePath": "pages/manage/index",
          "text": "管理"
        },{
          "selectedIconPath": "images/selectedmine.png",
         "iconPath": "images/mine.png",
          "pagePath": "pages/mine/index",
         "text": "我的"
        }
      ]
   }
}

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
