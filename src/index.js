import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import App from '../src/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { persistor, store } from '../src/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider  store={store}> 
    <PersistGate loading={null}
        persistor={persistor}>
    <BrowserRouter basename="food_delivery">
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider> 
</React.StrictMode>
);


