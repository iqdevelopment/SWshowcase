




import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import 'regenerator-runtime/runtime'
import './ListOfUsers.scss';

import Loader from "react-loader-spinner";


const CustomLoader = () => {
 



    return (
       <div>
           <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={350}
        width={350}
      />
       </div>

    );
};

export default CustomLoader;
