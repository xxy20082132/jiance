import React from 'react'
import {
  Form, Input, Button, notification, Icon, Checkbox 
} from 'antd'
import createHistory from 'history/createHashHistory'
import PwdModal from './pwd'
import './index.less'

const FormItem = Form.Item
const history = createHistory()

class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {visible:false};
  }
  componentDidMount() {
    //this.openNotificationWithIcon('info')
  }

  handleSubmit = (e) => {
    const { form } = this.props
    const { getFieldsValue } = form
    e.preventDefault()
    let n = getFieldsValue().username
    let p = getFieldsValue().password
    if (n === 'admin' && p === 'admin') {
      // 表单的路由处理
      history.push('/home')
    } else {
      this.openNotificationWithIcon('info')
    }
  }
  //显示修改密码弹框
  handleModifyPwd = () =>{
    this.setState({
      visible:true
    });
  }
  //隐藏修改密码弹框
  hideModal(){
    this.setState({
      visible:false
    })
  }
  // 返回一个弹框对象，提示用户名和密码
  openNotificationWithIcon = (type) => {
    notification[type]({
      message: '用户名&密码',
      description: '都是：admin',
      duration: 6,
      icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
    })
  }

  render() {
    const { form } = this.props
    const { getFieldDecorator } = form
    return (
      <div className="loginpagewrap">
        <div className="box">
          <p>登录系统</p>
          <div className="loginWrap">
            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入用户名' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />,
                )}
              </FormItem>
              <FormItem className="loginFooter">
                <Checkbox>记住密码</Checkbox>
                <Button type="primary" htmlType="submit" className="loginBtn">登录</Button>
                <a href="javascript:void(0)" className="modifyPwdBtn" onClick={this.handleModifyPwd}>修改密码</a>
              </FormItem>
            </Form>
          </div>
        </div>
        <PwdModal visible={this.state.visible} hideModal={this.hideModal.bind(this)}></PwdModal>
      </div>
    )
  }
}

const Login = Form.create()(LoginPage)
export default Login
