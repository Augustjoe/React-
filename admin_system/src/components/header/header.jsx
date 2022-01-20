import React, { Component } from 'react'
import "./header.less"

export default class Layoutheader extends Component {
  render() {
    return (
        <div className='layoutHeader'>
          <div className='headerTop'>
            <span> 欢迎用户：{this.props.user.username} </span>
            <a href="javascript:;">退出</a>
          </div>
            <div className='headerBottom'>
              <div className='headerBottomLeft'>首页</div>
              <div className='headerBottomRight'>
                <span> 2019-5-16 10：12：36 </span>
                <img src="" alt="" />
                <span>晴</span>
              </div>
            </div>
        </div>  
    )
  } 
}
