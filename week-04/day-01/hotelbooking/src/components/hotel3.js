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

const style={
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'black',
    width : '700px',
}



class hotel3 extends React.Component{
  render(){
    return(
      <div style={style}>
        <h3>{data.hotels[0].name}</h3>
        {/* <img> src={data.hotels[0].imageURL}</img> */}
        <p>{data.hotels[0].description}</p>
        <button>Book Now!</button>
      </div>
    )
  }
}

export default hotel3