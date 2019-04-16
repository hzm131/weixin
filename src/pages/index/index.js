import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton,AtForm,AtInput,AtMessage ,AtCard } from 'taro-ui'
import './index.scss'
import 'taro-ui/dist/style/components/card.scss';
export default class Index extends Component {

  config = {
    navigationBarTitleText: 'NGC基金业务管理系统',
    navigationBarBackgroundColor: '#273954',
    navigationBarTextStyle: 'white',
    backgroundColor: "#eeeeee",
    backgroundTextStyle: "light"
  }

  state = {
    username:'',
    password:''
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onPath = ()=>{
    Taro.navigateTo({
      url: '/pages/login/index'
    })
  }
  render () {
    return (
      <View className='index'>
      </View>

    )
  }
}
