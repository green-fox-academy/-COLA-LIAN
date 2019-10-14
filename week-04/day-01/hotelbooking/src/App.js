import React from 'react';
// import logo from './logo.svg';
import StarRating from './components/starRating'
import PropType from './components/propType'
import Hotel1 from './components/hotel1'
import Hotel2 from './components/hotel2'
import Hotel3 from './components/hotel3'

const sideBar={
  height: '100vh',
  width: '19vw',
  float: 'left',
  marginLeft: '10vw',
}

const hotelList={
  height: '100vh',
  width: '60vw',
  float: 'left',
  marginTop: '6vh',
}

const title={
  marginBottom:"7vh",
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div style={sideBar}>
          <h1 style={title}>Hotel Booking</h1>
          <StarRating/>
          <p></p>
          <PropType/>
        </div>
        
        <div style={hotelList}>
          <h2>Hotel List</h2>
          <Hotel1/>
          <p></p>
          <Hotel2/>
          <p></p>
          <Hotel3/>
        </div>
      </div>
    )
  }
}

export default App;
