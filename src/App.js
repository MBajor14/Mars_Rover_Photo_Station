import React, {Component} from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Gallery from './components/Gallery';
import UI_Mount_Pair from './components/ui_decorations/UI_Mount_Pair';
import UI_Bracket_Pair from './components/ui_decorations/UI_Bracket_Pair';

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
    const
        rover_name = 'curiosity',//event.target.elements.rover.value;
        date = event.target.elements.date.value,
        api_call = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover_name}/photos?earth_date=2018-9-3&api_key=${API_KEY}`),
        data = await api_call.json()
      ;
    this.setState({data: data});
  };

  render(){
    return(
      <div className="app bg_mars">
          <UI_Bracket_Pair />
          <div className="main-container">
            <UI_Mount_Pair />
            <div className="title-container">
              <Title />
              <Form handleSubmit={this.handleSubmit} />
            </div>
            <Gallery data={this.state.data} />
            <UI_Mount_Pair />
          </div>
      </div>
    );
  };
}

export default App;