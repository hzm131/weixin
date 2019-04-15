import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton,AtForm,AtInput,AtMessage } from 'taro-ui'
import './index.scss'
export default class Login extends Component {

  config = {
    navigationBarTitleText: '登陆'
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

  onChangeUserName = (value)=>{
    this.setState({
      username:value
    })
  };
  onChangePassWord = (value)=>{
    this.setState({
      password:value
    })
  };
  onSubmit = ()=>{
    const { username, password } = this.state;
    if(!username){
      Taro.atMessage({
        'message': '用户名有误',
        'type': 'error',
      });
      return
    }
    if(!password){
      Taro.atMessage({
        'message': '密码有误',
        'type': 'error',
      });
      return
    }
    console.log(this.state.username)
    console.log(this.state.password)
  }
  render () {
    return (
      <View className='index'>
        <AtMessage />
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
        >
          <AtInput
            name='username'
            title='用户名'
            type='text'
            placeholder='请输入用户名'
            value={this.state.username}
            onChange={this.onChangeUserName.bind(this)}
          />
          <AtInput
            name='password'
            title='密码'
            type='password'
            placeholder='请输入密码'
            value={this.state.password}
            onChange={this.onChangePassWord.bind(this)}

          />
          <View style={{marginTop:"20px",padding:'12px',boxSizing:'border-box'}}>
            <AtButton formType='submit' type='primary'>登陆</AtButton>
          </View>

        </AtForm>
      </View>
    )
  }
}
