import React from 'react';

let data = {
    hotels: [
        {
            name: 'Hipotel Paris Gambetta République',
            description: 'Located 500 metres from Père Lachaise Cemetery and 300 metres from Place Gambetta, Hipotel Gambetta offers en suite rooms with a flat-screen TV and a private bathroom.',
            imageURL: 'https://t-ec.bstatic.com/xdata/images/hotel/square600/45324268.webp?k=deb5c9732389dbe8e7411602b3b83cbb32d4c57b8c7842621d7d085fb2a4c9db&o='
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

class hotel3 extends React.Component{
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

export default hotel3