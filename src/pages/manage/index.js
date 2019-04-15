import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton,AtForm,AtInput,AtMessage,AtTabBar } from 'taro-ui'
import './index.scss'
export default class Index extends Component {

  config = {
    navigationBarTitleText: '管理页'
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
        管理页面
      </View>
    )
  }
}
