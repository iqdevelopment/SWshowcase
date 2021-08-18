import React, { useState } from 'react';



const VehicleListFilter = (props) => {

    const [sortState, setSortState] = useState({ type: null, asc: true })


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
                var newSort = prev.sort(({ [typeOfSort]: a }, { [typeOfSort]: b }) => b + a);
                newState = { type: typeOfSort, asc: true }
            }
            return [...newSort]

        })
        setSortState(prevstate => {
            return newState
        })


       /*  props.state((prev) => {
            const newSort = prev.sort(({ cargo_capacity: a }, { cargo_capacity: b }) => b - a);
            return [...newSort]
        }) */
    }



    const sortByName = () => {
        sortByString('name')
    }

    const sortByCapacity = () => {
        sortByNum('passengers')
        /* props.state((prev) => {
            const newSort = prev.sort(({ cargo_capacity: a }, { cargo_capacity: b }) => b - a);
            return [...newSort]
        }) */

    }

    const sortByCost = () => {
        sortByString('manufacturer')

    }




    return (<tr>
        <td onClick={sortByName}>Name</td>
        <td onClick={sortByCapacity}>Cargo Capacity</td>
        <td onClick={sortByCost}>manufacturer</td>
    </tr>)


};

export default VehicleListFilter;
