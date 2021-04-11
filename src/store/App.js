import React from 'react';
import Store from './Store'


const App = ({children}) => {
    return (
        <Store>
            {children}
        </Store>
    );
};

export default App;
