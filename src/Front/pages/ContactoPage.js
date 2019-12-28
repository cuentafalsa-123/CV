import React from 'react';
import Contacto from '../components/Contacto';


class ContactoPage extends React.Component {

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
        <Contacto className='contacto'/>          
      </div>
    );
  }
}

export default ContactoPage;
