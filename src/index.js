import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from './components/Navigation-bar.js';
import AutoSlideshow from './components/Auto-slideshow.js';

import './CSS/index.css';

export default function Main()  
{
    return (    
        <div>   
            <NavigationBar />
            <AutoSlideshow />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
