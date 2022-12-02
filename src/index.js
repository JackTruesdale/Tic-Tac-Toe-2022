import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css';
import ShoppingList from "./ShoppingList";

class Game extends React.Component{
    render() {
        return(
            <div className = "game">
                <div>
                    <Board />
                </div>
            </div>
        );
    }


}

class Board extends React.Component{
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
        };
      }
    
      renderSquare(i) {
        return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
        );
      }
    render() {
        const status = 'X'
        return(
            <div className = "board">
                <div>Next Player: {status}</div>
                <div className="first-row">
                   {this.renderSquare(0)}
                   {this.renderSquare(1)}
                   {this.renderSquare(2)}
                </div>
                <div className="second-row">
                   {this.renderSquare(3)}
                   {this.renderSquare(4)}
                   {this.renderSquare(5)}
                </div>
                <div className="third-row">
                   {this.renderSquare(6)}
                   {this.renderSquare(7)}
                   {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}



class Square extends React.Component {
    render() {
      return (
        <button
          className="square"
          onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
