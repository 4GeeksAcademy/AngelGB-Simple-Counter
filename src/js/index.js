import React from 'react';
import ReactDOM from 'react-dom/client';
import "/src/styles/index.css"
import Home from './component/home.jsx';


const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(<Home />)
export default root