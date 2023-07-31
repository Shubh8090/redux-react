// App.js
import React from 'react';
import { Provider } from 'react-redux';


import Cart from './components/Cart';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <h1>My Shopping Cart</h1> */}
        <Cart/>
      </div>
    </Provider>
  );
}

export default App;