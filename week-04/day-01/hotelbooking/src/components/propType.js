import React from 'react';


let data ={filters: {
    'Star rating': [
      { name: '1 star', checked: false },
      { name: '2 stars', checked: false },
      { name: '3 stars', checked: false },
      { name: '4 stars', checked: false },
      { name: '5 stars', checked: true }
    ],
    'Property type': [
      { name: 'Apartments', checked: false },
      { name: 'Hotels', checked: false },
      { name: 'Hostels', checked: false }
    ]
  }
} 

const style={
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'black',
  width : '250px',
}

class CheckBoxClass extends React.Component {
  render(){
    return (
      <div>
        <p>
          <input type="checkbox" /> {this.props.item.name}
        </p>
      </div>
    )
  }
}

const props = [];
data.filters['Property type'].forEach((item) =>{
  props.push(
    <CheckBoxClass key={item.name} item={item}/>
  )
})


class propType extends React.Component {
    render() {
      return (
        <div style={style}>
        <h3>Property type</h3>
        {props}
        </div>
      )
    }
  }
  
export default propType;