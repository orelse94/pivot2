import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import style from './style.css'

export default class Pager extends Component {
  static propTypes = {
    currentPage: PropTypes.number,
    pageCount: PropTypes.number,
    pivotFullyCached: PropTypes.bool,
  }
  static defaultProps = {
    currentPage:1,
  }

  render(){
    const {currentPage, pageCount, pivotFullyCached} = this.props
    return (
      <div className={classnames(style.container)}>
        <div>&lt;&lt;</div>
        <div>&lt;</div>
        <div>{currentPage} from {pageCount}{pivotFullyCached?'':'loading...'}</div>
        <div>&gt;</div>
        {
          pivotFullyCached ?
          <div>&gt;&gt;</div>
          : null
        }
      </div>
    )
  }
}
