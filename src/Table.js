import React, { Component } from 'react';

export default class Table extends Component {
  state = {
    activeIndex: 0
  }

  render() {
    let {list, columns} = this.props
    let activeColumn = columns[this.state.activeIndex]
    let sortedList = [...list].sort(activeColumn.sorter)

    return (
      <table>
        <thead>
          <tr>
            {columns.map((col, i) =>
              <th onClick={() => this.setState({activeIndex: i})} key={i}>
                {col.head} {i === this.state.activeIndex ? '*' : ''}
              </th>)}
          </tr>
        </thead>
        <tbody>
        {sortedList.map((elem, elemInd) =>
          <tr key={elemInd}>
            {columns.map((col, i) => <td key={i}>
                 {col.cell(elem)}
              </td>)}
          </tr>
        )}
        </tbody>
      </table>
    );
  }
}