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

const style={
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'black',
    width : '700px',
}



class hotel2 extends React.Component{
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

export default hotel2