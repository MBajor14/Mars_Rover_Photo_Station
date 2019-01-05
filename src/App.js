import React, {Component} from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Gallery from './components/Gallery';

const API_KEY = 'jgK3mGLNeRRwtX4Ml9VWaaWvzigyZo3PZ3FUTr0s';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  };
//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=jgK3mGLNeRRwtX4Ml9VWaaWvzigyZo3PZ3FUTr0s
  handleSubmit = async (event) => {
    event.preventDefault();
    const rover_name = 'curiosity';//event.target.elements.rover.value;
    const date = event.target.elements.date.value;
    const api_call = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover_name}/photos?earth_date=2018-9-3&api_key=${API_KEY}`);
    const data = await api_call.json();
    this.setState({data: data});
  };

  render(){
    return(
      <div className="app bg_mars">
          <div className="main-container">
            <div className="title-container">
              <Title />
              <Form handleSubmit={this.handleSubmit} />
            </div>
            <Gallery data={this.state.data} />
          </div>
      </div>
    );
  };
}

export default App;