import React from 'react';
import MainScreen from './components/mainScreen';
import BottomFrame from './components/bottomFrame';
import Img from './components/img';
import './App.css';

const background = {
//     height:'100vh',
//     width:'100vw',
    // backgroundImage: 'url(./otterImg/otter7.jpeg)',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'column',
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {index: 0};
  }

  // clickOnThumbnail(imgIndex){
  //   this.setState({ index: imgIndex });
  //   console.log(imgIndex);
  // }

  clickOnThumbnail = imgIndex => {
    this.setState({ index: imgIndex })
  }

  ClickOnLeft(){
    if(this.state.index === 0){
      this.setState({index: Img.length - 1});
    }else{
      this.setState({index: this.state.index - 1});
    }
  }

  ClickOnRight(){
    if(this.state.index === (Img.length - 1)){
      this.setState({index: 0});
    }else{
      this.setState({index: this.state.index + 1});
    }
  }

  render(){
    return (
      <div className = "background" style = {background} >
        <div className = "frame" >
          <div className = "bar"  >
            <div id = "arrowLeft" onClick = {() => this.ClickOnLeft()}></div>
          </div>
          <MainScreen  index = {this.state.index}  images = {Img} />
          <div className = "bar" onClick = {() => this.ClickOnRight()} >
          <div id = "arrowRight" ></div>
          </div>
        </div>
        <BottomFrame  clickOnThumbnail = {this.clickOnThumbnail} />
      </div>
    );
  }
}

export default App;
