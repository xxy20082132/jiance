import React from 'react'
import { Menu, Icon, Layout } from 'antd'
import { Link } from 'react-router-dom'
import * as screenfull from 'screenfull'
import './header.less'

const { SubMenu } = Menu
const { Header } = Layout

export default class Top extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
  }

  componentDidMount() {
    this.getUser()
  }

  getUser = () => {
    this.setState({
      username: 'admin',
    })
  }

  screenFull = () => {
    if (screenfull.enabled) {
      screenfull.request()
    }
  }
  render() {
    return (
      <Header style={{ background: '#404040' }}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
        <Menu mode="horizontal" className="logOut" style={{background:'#404040', color:'#fff', borderBottom:'none'}}>
          <SubMenu title={<span><Icon type="user" />{this.state.username}</span>} >
            <Menu.Item key="logOut" className="logOutItem"><Link to="/login">退出</Link></Menu.Item>
          </SubMenu>
        </Menu>
        <Icon
          className="screenFull"
          type="arrows-alt"
          onClick={this.screenFull}
        />
      </Header>
    )
  }
}
