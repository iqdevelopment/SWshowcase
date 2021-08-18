import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import 'regenerator-runtime/runtime'
import './ListOfUsers.scss';
import getNextItems from '../handlers/handlers';


const ListOfUsers = (props) => {
    console.log(props)
    const [personList, setPersonList] = useState(props.users)
    const [personListPage, setPersonListPage] = useState(1)
    const [hasMoreState, setHasMoreState] = useState(true)


    const fetchData = async () => {
        try {
            const result = await getNextItems(personListPage)
            setPersonList((prevstate) => {
                return [...prevstate, ...result]
            })
            setPersonListPage(personListPage + 1)

        } catch (error) {
            setHasMoreState(false)
        }

    }



    return (
        <ul className="person-list">

            <InfiniteScroll
                dataLength={personList.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasMoreState}
                loader={<h4>Loading...</h4>}
                style={{overflow: 'visible'}}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }

            >

                {personList.map(function (person, index) {
                    return (

                        <li key={`dw-${index}`}>
                            <a href={`/people/${person.url.replace('https://swapi.dev/api/people/', '').replace('/', '')}`} >

                                <div>
                                    <img src={person.image} alt="" />
                                    {person.name}
                                </div>
                            </a>
                        </li>);
                })}
            </InfiniteScroll>

        </ul>

    );
};

export default ListOfUsers;
