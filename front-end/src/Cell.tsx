import React from 'react';
import { Cell } from './game';

interface Props {
  cell: Cell
}

class BoardCell extends React.Component<Props> {
  render(): React.ReactNode {
    const playable = this.props.cell.playable ? 'playable' : '';
    const markClass = this.props.cell.text === 'X' ? 'mark-x' : this.props.cell.text === 'O' ? 'mark-o' : '';
    return (
      <div className={`cell ${playable} ${markClass}`}>{this.props.cell.text}</div>
    )
  }
}

export default BoardCell;