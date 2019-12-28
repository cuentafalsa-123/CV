import React from 'react';
import Skills from '../components/Skills';

  
class SkillsPage extends React.Component {

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
        <Skills className='skills'> </Skills>          
      </div>
    );
  }
}

export default SkillsPage;
