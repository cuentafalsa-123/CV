import React from 'react';
import './Presentacion.css';

const texto = 'Lorem ipsum dolor sit amet consectetur adipiscing elit eget platea, ridiculus cum nunc dignissim suspendisse taciti himenaeos sem ut, commodo tempus erat augue urna penatibus sapien mauris. Vivamus tempor quis elementum aenean venenatis molestie litora vehicula, natoque cras lacinia ac phasellus dictum commodo, vel nunc purus facilisi posuere senectus enim. Condimentum felis pulvinar augue dignissim nullam cursus imperdiet sollicitudin tempus id lacinia lobortis hendrerit venenatis aptent, hac posuere consequat duis potenti mattis mi tortor rutrum blandit magna class commodo.'

const Presentacion = () => {
    return (
        <div>
            <p tabindex='0' className='texto' id='presentacion'>{texto}</p>
        </div>
    )
}

export default Presentacion;