import React, { useState } from 'react';
import './VehicleList.scss'


//import getNextItems from '../handlers/handlers';


const ErrorDiv = (props) => {
    

    return (

        <div>
            {props.message}
        </div>
    );
};

export default ErrorDiv;
