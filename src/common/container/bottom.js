import React from 'react'
import { Layout } from 'antd'
import './bottom.less'

const { Footer } = Layout

export default class Bottom extends React.Component {
  render() {
    return (
      <Footer className="bottom animated bounceInLeft">
        <div className="text">
          <div>
            <span>湘 ICP 备 ********** 号</span>
          </div>
        </div>
      </Footer>
    )
  }
}
