import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import {HelmetProvider} from 'react-helmet-async'



const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
            <HelmetProvider>
                <App />
            </HelmetProvider>
    </Provider>);

