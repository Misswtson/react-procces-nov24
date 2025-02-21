import React from 'react';
import ReactDOM from 'react-dom/client';
//import { App } from './App';
//import {NewApp} from './NewApp';
import './style.css';
import { CounterApp } from './CounterApp';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value = { 0 }/>
        {/*<NewApp title='Hi, Im Emma'/>*/}
    </React.StrictMode>
)