import './people/peopleBaseStyle.scss'
import React from 'react'
import ReactDOM from 'react-dom';
import CustomLoader from "./vehicles/reactComponents/CustomLoader";
import VehicleList from './vehicles/reactComponents/VehicleList'
import axios from 'axios';
import ErrorDiv from './vehicles/reactComponents/ErrorDiv'



ReactDOM.render(< CustomLoader />, document.getElementById('root'));

const renderVehicleList = async () => {

    const vehicles = []
    try {
        for (let index = 1; index < 5; index++) {
            const res = await axios.get(`https://swapi.dev/api/vehicles/?page=${index}`)
            vehicles.push(...res.data.results)

        }
        console.log(vehicles)
        ReactDOM.render(< VehicleList vehicles={vehicles} />, document.getElementById('root'));
    } catch (error) {
        ReactDOM.render(< ErrorDiv message={error.message} />, document.getElementById('root'));
    }


}

renderVehicleList()

