import React from 'react';

let data = {
    hotels: [
        {
          name: 'Hotel des Vosges',
          description: 'Located in the 20th district of Paris, just 700 metres from Père Lachaise Cemetery, Hotel des Vosges offers a 24-hour reception and free Wi-Fi access.',
          imageURL: 'https://s-ec.bstatic.com/xdata/images/hotel/square600/13072445.webp?k=9c12bda1f8c02f76fa0ea4a6ea00e6f7074753025bc0c187f7b6fc3076343401&o='
        }
    ]
}
const style = {
    width : '700px',
}
const out = {
  width:'1000px',
  height:'250px',
  border:'1px solid #000000',
}

const inside = {
  height:'80%',
  width:'94%',
  margin: 'auto',
}

const title = {
  width:'94%',
  margin: '5px auto',
  fontSize:'20px',
  fontWeight: '1000',
}

const left = {
  width:'200px',
  float: 'left',
}

const leftImg = {
  width:'200px',
  height:'200px',
}


const right = {
  width:'75%',
  float: 'left',
  paddingLeft: '5px',
  fontWeight: '900',
}



class hotel1 extends React.Component{
  render(){
    return(
      <div style={style}>
      <div style={out}>
        <div style={title}>
          <span>{data.hotels[0].name}</span>
        </div>
      <div style={inside}>
        <div style={left}>
        <img style={leftImg} src={data.hotels[0].imageURL}/>
      </div>
        <div style={right}>
            <p>{data.hotels[0].description}</p>
            <button>Book Now!</button>
        </div>
      </div>
    </div>
  </div>
    )
  }
}

export default hotel1