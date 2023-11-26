import React from 'react';
import UserContextType from './../types/UserContextType';



const UserContext = React.createContext<UserContextType | null>(null);

export default UserContext;
