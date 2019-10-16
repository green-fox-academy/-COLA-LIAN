import React from 'react';
import Item from './components/Item';

// const style ={
  const background={
    height:'100vh',
    width:'100vw',
    backgroundColor: 'rgb(123,223,195)',
  }
  const frame = {
    height:'80%',
    width:'80%',
    float:'left',
    margin:'10% 10%',
    backgroundColor:'rgb(247,247,247)',
  }

  const heading = {
    fontFamily: 'Lato, sans-serif',
    fontSize: '64px',
    fontWeight: '300',
    color: '#b8b8b8',
    height: '25%',
    textAlign: 'center',
    lineHeight: '200%',
  },
  
  todoItem = {
    fontFamily: 'Lato, sans-serif',
    fontSize: '26px',
    lineHeight: '2.2',
    color: '#b8b8b8',
    width:'80%',
    margin: 'auto',
    height:'17%',
    fontSize: '26px',
    lineHeight: '2.2',
    color: '#b8b8b8',
  },

  btn = {
    fontSize: '26px',
    color: '#ffffff',
    backgroundColor:'rgb(208,116,226)',
    width:'19%',
    height:'100%',
    float: 'left',
  }
  
  const buttonText = {
    width:'80%',
    height:'85%',
    float: 'left',
    // type: 'text',
  }

 let inputFrame = {
  height:'15%',
  width:'100%',
}
const inputFrame2 = {
  height: '50%',
  width:'80%',
  margin: 'auto',
}

const btnFrame = {
  width:'100%',
  height:'60%',
}

function App() {
  return (
    <div style={background}>
    <div style={frame}>
      <div style={heading}>
        TODOS
      </div>
      <div style={inputFrame}>
        <div style={inputFrame2}>
          <input style={buttonText}  /><button style={btn}>Add</button>
        </div>
      </div>
      <Item />
      {/* <div style={btnFrame}> 
        <div style={todoItem}>
          Wake up
          <div style="width:45px;height:20px;float: right;margin-top:20px;">
            <img style="width:20px;height:20px;float: left;" src="img/trush.png" />
            <img style="width:20px;height:20px;float: left;margin-left:5px;" src="img/check.png" />
           </div> 
        </div>

      </div> */}


    </div>
  </div>
  );
}

export default App;
