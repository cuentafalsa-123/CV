import React from 'react';
import Imagen from '../components/Imagen.js';
import Presentacion from '../components/Presentacion';


class FormacionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mostrado: false
        }
    }

    componentDidMount() {
        setTimeout(() => {            
            this.setState({mostrado: true})
        }, 0)
    } 

  render() {
    return (
      <div style={this.state.mostrado ? {transition: '.31s ease all', visibility: 'visible', transform: 'scale(10, 2)'} : {visibility: 'visible'}} className='children' >           
        <section className='App__yo' >
            <Imagen />
            <Presentacion />
        </section>
            
      </div>
    );
  }
}

export default FormacionPage;
