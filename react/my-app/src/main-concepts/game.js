import React from 'react';
import './game.css';
function Square(props) {
  return <button onClick={() => props.onClick()}>{props.value}</button>;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isNext: true,
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.isNext ? 'X' : 'O';
    this.setState({ squares: squares, isNext: !this.state.isNext });
  }
  handleRestart() {
    this.setState({
      squares: Array(9).fill(null),
      isNext: true,
    });
  }
  renderBorder(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  getStatus(winner) {
    return (
      <div className='player'>
        {winner ? (
          <div>
            游戏结束，Winner：<span className='player-name'>{winner}</span>
          </div>
        ) : (
          <div>
            轮到玩家
            <span className='player-name'>{this.state.isNext ? 'X' : 'O'}</span>
            出手
          </div>
        )}
      </div>
    );
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    return (
      <div className='border-box'>
        {this.getStatus(winner)}
        <div className='border-item'>
          {this.renderBorder(0)}
          {this.renderBorder(1)}
          {this.renderBorder(2)}
        </div>
        <div className='border-item'>
          {this.renderBorder(3)}
          {this.renderBorder(4)}
          {this.renderBorder(5)}
        </div>
        <div className='border-item'>
          {this.renderBorder(6)}
          {this.renderBorder(7)}
          {this.renderBorder(8)}
        </div>
        <button className='restart' onClick={() => this.handleRestart()}>
          重新开始
        </button>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <Board />
      </div>
    );
  }
}

export default Game;
