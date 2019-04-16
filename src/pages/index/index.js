import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
<<<<<<< HEAD
import { AtButton,AtForm,AtInput,AtMessage ,AtCard } from 'taro-ui'
=======
import { AtButton,AtForm,AtInput,AtMessage,AtCard } from 'taro-ui'
>>>>>>> 4a449b999ae6f7fdfe8e671ee092ca8505fe5983
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
<<<<<<< HEAD
=======
        {/*<AtButton onClick={this.onPath.bind(this)}>登录</AtButton>*/}
        <View style={{display:'flex',flexWrap:'wrap',paddingBottom:'12px',backgroundColor:'#ECECEC'}}>
          <View style={{width:'50%',marginTop:'12px'}}>
            <AtCard
              extra='额外信息'
              title='这是个标题'
              thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
              123
            </AtCard>
          </View>
          <View style={{width:'50%',marginTop:'12px'}}>
            <AtCard
              extra='额外信息'
              title='这是个标题'
              thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
              456
            </AtCard>
          </View>
          <View style={{width:'50%',marginTop:'12px'}}>
            <AtCard
              extra='额外信息'
              title='这是个标题'
              thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
              789
            </AtCard>
          </View>
          <View style={{width:'50%',marginTop:'12px'}}>
            <AtCard
              extra='额外信息'
              title='这是个标题'
              thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
              012
            </AtCard>
          </View>
        </View>

        <View>
          <View style={{padding:"12px"}}>
            <Text>
              进行中的项目
            </Text>
          </View>
          <View>
            <AtCard
              note='小Tipsssss'
              extra='额外信息'
              title='这是个标题'
              thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
              这也是内容区 可以随意定义功能
            </AtCard>
          </View>
          <View style={{marginTop:'12px'}}>
            <AtCard
              note='小wws'
              extra='额外信息'
              title='这是个标题'
              thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
              这也是内容区 可以随意定义功能
            </AtCard>
          </View>
        </View>

        <View>

        </View>

>>>>>>> 4a449b999ae6f7fdfe8e671ee092ca8505fe5983
      </View>

    )
  }
}
