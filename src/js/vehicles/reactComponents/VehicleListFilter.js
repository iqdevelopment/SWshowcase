import React, { useState } from 'react';
import './VehicleListFilter.scss'



const VehicleListFilter = (props) => {

    const [sortState, setSortState] = useState({ type: null, asc: true })
    /*  const [nameState,setNameState] = useState('')
     const [passengersState,setPassengersState] = useState('')
     const [manufacturerState,setManufacturerState] = useState('') */


    /**
     * sort for strings
     */
    const dynamicSort = (array) => {
        var sortOrder = 1;
        if (array[0] === "-") {
            sortOrder = -1;
            array = array.substr(1);
        }
        return function (a, b) {
            var result = (a[array] < b[array]) ? -1 : (a[array] > b[array]) ? 1 : 0;
            return result * sortOrder;
        }

    }
    /**
     * to sort by string asc and desc
     */
    const sortByString = (typeOfSort) => {
        var newState = {}
        props.state((prev) => {
            if (sortState.type == typeOfSort && sortState.asc == true) {
                var newSort = prev.sort(dynamicSort(`-${typeOfSort}`))
                newState = { type: typeOfSort, asc: false }
            } else {
                var newSort = prev.sort(dynamicSort(typeOfSort))
                newState = { type: typeOfSort, asc: true }
            }
            return [...newSort]
        })
        setSortState(prevstate => {
            return newState
        })
    }

    /**
 * to sort by string asc and desc
 */
    const sortByNum = (typeOfSort) => {

        var newState = {}
        props.state((prev) => {
            if (sortState.type == typeOfSort && sortState.asc == true) {
                var newSort = prev.sort(({ [typeOfSort]: a }, { [typeOfSort]: b }) => b - a);

                newState = { type: typeOfSort, asc: false }
            } else {
                var newSort = prev.sort(({ [typeOfSort]: a }, { [typeOfSort]: b }) => a - b);
                newState = { type: typeOfSort, asc: true }
            }
            return [...newSort]

        })
        setSortState(prevstate => {
            return newState
        })

    }

    /**
     * changes the button style on filtering
     */
    const filterStyleChange = (ev) => {
        console.log(ev.target)
        const element = ev.target
        console.log(element.className)
        if (element.className != 'asc-filter') {
            const parent = document.querySelector('.vehicle-list-header')
            const children = parent.querySelectorAll('td')
            for (let index = 0; index < children.length; index++) {
                const el = children[index];
                el.classList =''

            }
            element.className = 'asc-filter'
        } else {
            element.className = 'desc-filter'
        }
    }



    const sortByName = () => {
        sortByString('name')
    }

    const sortByCapacity = () => {
        sortByNum('passengers')
    }

    const sortByCost = () => {
        sortByString('manufacturer')

    }




    return (<tr className="vehicle-list-header">
        <td onClick={(ev) => { sortByName(), filterStyleChange(ev) }}>Name</td>
        <td onClick={(ev) => { sortByCapacity(), filterStyleChange(ev) }}>Passengers</td>
        <td onClick={(ev) => { sortByCost(), filterStyleChange(ev) }}>manufacturer</td>
    </tr>)


};

export default VehicleListFilter;
