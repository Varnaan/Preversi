import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const black = <span className = "dotB"></span>;
const white = <span className = "dotW"></span>;

class Square extends React.Component {
    componentWillMount(){
        console.log('mounted')
    }
    render() {
        return (
            <button className="square"
                onClick={() => { this.props.onClick() }}>
                {this.props.value}
            </button>
        );
    }
    componentDidMount(){
        console.log('all 64 components mounted')
    }
}       

class Board extends React.Component {
    componentWillUpdate(){
        console.log('updated')
    }
    constructor(props) {
        super(props);

        const grid = Array(64).fill(null);
        grid[27] = black;
        grid[28] = white;
        grid[35] = white;
        grid[36] = black;

        this.state = {
            squares: grid,
            wIsNext: true,
        };
    }

    handleClick(i){

        const squares = this.state.squares.slice();
        
        if (!squares[i]){
            squares[i] = this.state.wIsNext ? white : black;
        } else {
            return alert('HONK !');
        };
        this.setState({
            squares: squares,
            wIsNext: !this.state.wIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
            
        )
        
    }


    render() {
        const status = 'Next Player: ' + (this.state.wIsNext ? 'white' : 'black');

        return (
            <div>
                <div className="status">
                    {status}
                </div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                </div>
                <div className="board-row">
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                    {this.renderSquare(20)}
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                </div>
                <div className="board-row">
                    {this.renderSquare(24)}
                    {this.renderSquare(25)}
                    {this.renderSquare(26)}
                    {this.renderSquare(27)}
                    {this.renderSquare(28)}
                    {this.renderSquare(29)}
                    {this.renderSquare(30)}
                    {this.renderSquare(31)}
                </div>
                <div className="board-row">
                    {this.renderSquare(32)}
                    {this.renderSquare(33)}
                    {this.renderSquare(34)}
                    {this.renderSquare(35)}
                    {this.renderSquare(36)}
                    {this.renderSquare(37)}
                    {this.renderSquare(38)}
                    {this.renderSquare(39)}
                </div>
                <div className="board-row">
                    {this.renderSquare(40)}
                    {this.renderSquare(41)}
                    {this.renderSquare(42)}
                    {this.renderSquare(43)}
                    {this.renderSquare(44)}
                    {this.renderSquare(45)}
                    {this.renderSquare(46)}
                    {this.renderSquare(47)}
                </div>
                <div className="board-row">
                    {this.renderSquare(48)}
                    {this.renderSquare(49)}
                    {this.renderSquare(50)}
                    {this.renderSquare(51)}
                    {this.renderSquare(52)}
                    {this.renderSquare(53)}
                    {this.renderSquare(54)}
                    {this.renderSquare(55)}
                </div>
                <div className="board-row">
                    {this.renderSquare(56)}
                    {this.renderSquare(57)}
                    {this.renderSquare(58)}
                    {this.renderSquare(59)}
                    {this.renderSquare(60)}
                    {this.renderSquare(61)}
                    {this.renderSquare(62)}
                    {this.renderSquare(63)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    componentWillReceiveProps(){
        console.log('receiving')
    }
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div> {} </div>
                    <ol> {} </ol>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <Game />,
    document.getElementById('root')
)