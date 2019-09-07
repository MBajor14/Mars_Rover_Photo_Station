import React, {Component} from 'react';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import Gallery from './components/Gallery/Gallery';

const API_KEY = 'jgK3mGLNeRRwtX4Ml9VWaaWvzigyZo3PZ3FUTr0s';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  };
//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=jgK3mGLNeRRwtX4Ml9VWaaWvzigyZo3PZ3FUTr0s
  handleSubmit = async event => {
    event.preventDefault();
    let temp = Date.now();
    const
        // rover_name = 'curiosity',//event.target.elements.rover.value;
        rover_name = event.target.elements.rover.value,
        // 2018-9-3
        date = event.target.elements.date.value,
        api_call = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover_name}/photos?earth_date=${date}&api_key=${API_KEY}`),
        data = await api_call.json()
      ;
    this.setState({data: data});
  };

  render(){
    return(
      <div className="app bg_mars d-flex justify-content-center align-items-center">
          <div className="main-container d-flex flex-column text-white">
            <Title />
            <Form handleSubmit={this.handleSubmit} />
            <Gallery data={this.state.data} />
          </div>
      </div>
    );
  };
}

export default App;
