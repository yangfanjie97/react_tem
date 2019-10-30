import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./store/index";
import { renderRoutes } from "react-router-config";
import Routers from '@/routers'
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            <div>
                <BrowserRouter>
                    {renderRoutes(Routers)}
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
