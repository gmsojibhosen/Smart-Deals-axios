import React, {  useContext,  } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';


const UseAuth = () => {
    return useContext(AuthContext);
};

export default UseAuth;