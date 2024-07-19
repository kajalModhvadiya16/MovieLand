 import React from 'react';
 import {createRoot} from 'react-dom/client';
 
 import App from './App';

 //ReactDOM.createRoot(<App />,document.getElementById('root'));

 const root = createRoot(document.getElementById('root'));////this is going to trigger our div with an id of root and it's going to inject our entire application right inside of it
root.render(<App />);