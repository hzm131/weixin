import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton,AtForm,AtInput,AtMessage,AtCard,AtList,AtListItem } from 'taro-ui'
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
      <View className='index' style={{backgroundColor:'#ECECEC'}}>
        {/*<AtButton onClick={this.onPath.bind(this)}>登录</AtButton>*/}
        <View style={{display:'flex',flexWrap:'wrap',paddingBottom:'12px'}}>
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

        <View style={{backgroundColor:"#fff",paddingBottom:"12px"}}>
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

        <View style={{marginTop:"12px",padding:'0 0 12px 0',backgroundColor:"#fff"}}>
          <View style={{padding:'12px'}}>
            <Text>
              个人任务信息提醒
            </Text>
          </View>
          <View>
            <AtList>
              <AtListItem
                title='标题文字'
                arrow='right'
                thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                arrow='right'
                thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
              />
            </AtList>
          </View>
        </View>
      </View>

    )
  }
}
