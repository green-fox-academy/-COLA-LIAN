import React from 'react';
// import ChinaNews from './chinaNews';

// let host = 'lofty-partner.glitch.me';
let news_url = 'https://newsapi.org/v2/top-headlines?country=cn&apiKey=de3889e30428458f8cfa1d2c00bd144d';
let slow_url = `https://lofty-partner.glitch.me//delay/3000/url/${news_url}`;

class App extends React.Component{
  constructor(props){
    super(props);
    // this.getData.bind(this);
    this.state = {articleTitle:[]};
}

  async componentDidMount(){
    const res = await fetch(slow_url);
    const resJson =  await res.json();
    // console.log(resJson);
    console.log(resJson.articles);
    
    // this.setState({articleTitle:[resJson.articles]});
    resJson.articles.forEach(item => this.setState({articleTitle:[...this.state.articleTitle, item.title]})
      );
    // console.log('===='+this.state.articleTitle);
  }


  render(){
    return (
    <div>
      <ul>
        <h1>China News</h1>
        {this.state.articleTitle.map(item => {
          return(
            <li>
              {item}
            </li>
            
            )
        })}
      </ul>
    </div>
  );
  }
  
}

export default App;
