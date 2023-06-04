import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import App from '../src/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { persistor, store } from '../src/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       {/* <ThemeProvider theme={theme}> */}

    <Provider  store={store}> 
    <PersistGate loading={null}
        persistor={persistor}>
    <BrowserRouter basename="/">
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider> 
    {/* </ThemeProvider> */}
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
