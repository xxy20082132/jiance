import React, { Component } from 'react';
import { Modal, Form, Button, Input, notification } from 'antd';

const FormItem = Form.Item

class ModifyPwdModal extends Component {
  constructor(props){
    super(props);
    this.state = {'newPwd':'', 'confirmPwd':''};
  }
  
  openNotificationWithIcon = (type) => {
    notification[type]({
      message: '密码修改成功',
    });
  };

  handleSubmit = ()=>{
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.hideModal();
        this.openNotificationWithIcon('success');
      }
    });
  }

  getPwdValue = (event) => {
    this.setState({
      'newPwd':event.target.value
    });
  }

  getConfirmPwd = (event) => {
    this.setState({
      'confirmPwd':event.target.value
    })
  }

  validFunction = (rule, value, callback) => {
    if(value){
      if(this.state.newPwd != value){
        callback('确认密码与新密码不同');
      }
    }
    callback();
  }

  render(){
    const { form } = this.props
    const { getFieldDecorator } = form
    return (
      <Modal 
        title="修改密码"
        visible={this.props.visible}
        onCancel={this.props.hideModal}
        onOk={this.handleSubmit}
        okText="确认"
        cancelText="取消"
      >
      <Form>
        <FormItem
          label="用户名"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="旧密码"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('oldPwd', {
            rules: [{ required: true, message: '请输入旧密码' }],
          })(
            <Input type="password"/>
          )}
        </FormItem>
        <FormItem
          label="新密码"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('newPwd', {
            rules: [{ required: true, message: '请输入新密码' }],
          })(
            <Input type="password" onChange={this.getPwdValue}/>
          )}
        </FormItem>
        <FormItem
          label="确认密码"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('confirmPwd', {
            rules: [{ required: true, message: '请输入确认密码' },{
              validator:this.validFunction
            }],
          })(
            <Input type="password" onChange={this.getConfirmPwd}/>
          )}
        </FormItem>
      </Form>
      </Modal>
    )
  }
}

const PwdModal = Form.create()(ModifyPwdModal);
export default PwdModal;