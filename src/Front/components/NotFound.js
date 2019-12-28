import React from 'react';
import './styles/NotFound.css';


  class NotFound extends React.Component {

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
        <div style={this.state.mostrado ? {visibility: 'visible', transform: 'scale(10, 2)'} : {visibility: 'visible', transform: 'scale(1)'}} className='children'  className='not-found children'>
            <h1 className='error'>ERROR 404</h1>
            <p className='error-mensaje'>La pagina que buscas aun no existe, papu</p>
        </div>    
    )
  }
}

export default NotFound;