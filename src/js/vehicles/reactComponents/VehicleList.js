import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import 'regenerator-runtime/runtime'
import VehicleListFilter from './VehicleListFilter'

//import getNextItems from '../handlers/handlers';


const VehicleList = (props) => {
    console.log(props)
    const [vehicleList, setvehicleList] = useState(props.vehicles)


    return (

        <table>
            <thead>
            <VehicleListFilter state={setvehicleList}/>
            </thead>
            <tbody>
                {vehicleList.map(function (vehicle, index) {
                    return (

                        <tr key={`dw-${index}`}>
                            <td>
                                <a href={`/vehicles/${vehicle.url.replace('https://swapi.dev/api/vehicles/','').replace('/','')}`}> {vehicle.name}</a>
                            </td>
                            <td>
                                {vehicle.passengers}
                            </td>
                            <td>
                                {vehicle.manufacturer}
                            </td>
                        </tr>);
                })}
            </tbody>
        </table>
    );
};

export default VehicleList;
