import React, { Component, PropTypes } from 'react'
import PivotView from '../../components/PivotView'
import Pager from '../../components/Pager'

export default class Pivot extends Component {
  static propTypes = {
    bodyData: PropTypes.array,
    currentPage: PropTypes.number,
    loadNextPage: PropTypes.func,
    pageCount: PropTypes.number,
    pivotFullyCached: PropTypes.bool,
    headersData: PropTypes.object,
    rowsPanelHeaders: PropTypes.array,
    totalRowsNumber: PropTypes.number,
  }

  constructor(props){
    super(props)
    this.state = props
  }

  componentWillReceiveProps(props){
    this.setState(props)
  }

  render() {
    const {
      headersData,
      rowsPanelHeaders,
      bodyData,
      loadNextPage,
      pageCount,
      currentPage,
      totalRowsNumber,
      pivotFullyCached,
    } = this.state

    return (
      <div>
        <PivotView
            bodyData={bodyData}
            headersData={headersData}
            loadNextPage ={loadNextPage}
            pivotFullyCached={pivotFullyCached}
            rowsPanelHeaders={rowsPanelHeaders}
            totalRowsNumber={totalRowsNumber}
        />
        <Pager
            currentPage={currentPage}
            pageCount={pageCount}
            pivotFullyCached={pivotFullyCached}
        />
      </div>
    )
  }
}
