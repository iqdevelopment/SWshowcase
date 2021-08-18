import './people/peopleBaseStyle.scss'
import React from 'react'
import ReactDOM from 'react-dom';
import ListOfUsers from './people/reactComponents/ListOfUsers'


    ReactDOM.render(<ListOfUsers users={people} />, document.getElementById('root'));

