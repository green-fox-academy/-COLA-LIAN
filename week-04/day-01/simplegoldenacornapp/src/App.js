import React from 'react';
// import logo from './logo.svg';
import './App.css';

const style={
  width: '50vw',
  height: '50vh',
  marginLeft:'20vw',
  marginTop: '20vh',
  backgroundColor: 'pink',
}


const btn1={
  width: '100px',
  height: '30px',
  // margin: '50px',
}
const btn2={
  width: '100px',
  height: '30px',
}
const text={
  marginLeft:'45px',
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.buy = this.buy.bind(this);
    this.eat = this.eat.bind(this);
    this.state = {total: 0}
  }
  buy(){
    this.setState({total: this.state.total + 1});
  }
  eat(){
    if(this.state.total > 0){
      this.setState({total: this.state.total - 1});
    }
  }


Arrow = (event) => {
  switch (event.key) {
      case 'ArrowUp':
          this.buy();
          break;
               
      case 'ArrowDown':
          this.eat();
          break;
          
      default:
          break;
  }
}



  render(){
    return (
    <div style={style}>
      <p>
        <button onClick={this.buy} style={btn1}>Buy one</button>
      </p>
      <p style={text}>{this.state.total}</p>
      <p>
        <button onClick={this.eat} style={btn2}>Eat one</button>
      </p>
      {document.addEventListener('keydown', this.Arrow)}
    </div>
  )};
}

export default App;
