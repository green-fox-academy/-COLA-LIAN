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

const style={
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'black',
    width : '700px',
}



class hotel1 extends React.Component{
  render(){
    return(
      <div style={style}>
        <h3>{data.hotels[0].name}</h3>
        {/* <img src={data.hotels[0].imageURL}> </img> */}
        <p>{data.hotels[0].description}</p>
        <button>Book Now!</button>
      </div>
    )
  }
}

export default hotel1