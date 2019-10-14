import React from 'react';

let data = {
    hotels: [
        {
            name: 'We Loft',
            description: 'We Loft is a property set in Paris near Opéra Bastille. This bed and breakfast also has free WiFi.',
            imageURL: 'https://t-ec.bstatic.com/xdata/images/hotel/square600/96299078.webp?k=1ab1cd2966b00e21df37c28b1fed925f86da5a8834bacf06509397d26ffa8f26&o='
        },
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



class hotel2 extends React.Component{
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

export default hotel2