import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { UIContextProvider } from './context/todoContext/Context.jsx'
import store from './redux/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    
    
      <Provider store={store}>
      {/* <UIContextProvider > */}
        <App />
      {/* </ UIContextProvider > */}
        </Provider>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);
