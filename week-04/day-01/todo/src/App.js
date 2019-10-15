import React from 'react';
const style={
  width: '50vw',
  height: '50vh',
  marginLeft:'20vw',
  marginTop: '20vh',
  backgroundColor: 'pink',
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      todo:[{item:'Buy milk', priority:1},{item:'Feed the monkey', priority:2}],
      todoDone:[{item:'Mentoring others', priority:1},{item:'Sleep 8 hours', priority:2}]
    }
    this.done = this.done.bind(this);
    this.delete =  this.delete.bind(this);
  }

done(item){
  this.state.todoDone.push(this.state.todo.splice(item,1));
  this.setState(this.state);
}

delete(item){
  this.state.todoDone.splice(item,1);
  this.setState(this.state);
}

// compare(property){
//   return function(a,b){
//       var value1 = a[property];
//       var value2 = b[property];
//       return value1 - value2;
//   }
// }

todo(){
  // let arr =  this.state.todo.sort(this.compare('priority'));
  // console.log(this.state);
  return(
    <>
    {this.state.todo.sort((a, b) => a.priority - b.priority).map((element,index) =>{
      return <li key={index}>{element.item} <button onClick={this.done}>done</button></li>
    })
    }
    </>   
  )
}

todoDone(){
  return(
    <>
    {this.state.todoDone.sort((a, b) => a.priority - b.priority).map((element,index) =>{
      return <li key={index}>{element.item} <button onClick={this.delete}>delete</button></li>
    })
    }
    </>   
  )
}
  
render(){
  return (
    <div style={style}>
      <ul>
        <p >TODOS:</p>
         {this.todo()}     
      </ul>
      <ul>
        <p>DONE TODOS:</p>
        {this.todoDone()}  
      </ul>
    </div>
    );
  }
}

export default App;
