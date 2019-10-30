import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store/index";

import TestC from './components/test'

function App() {
    return (
        <Provider store={store}>
            <div>
                你好，世界
                <div>
                    <TestC/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
