import React from 'react';
import './App.scss';
import { Provider } from "react-redux";
import { store } from "./store";

import Header from './components/Header/Header'
import { Sidebar } from './components/Sidebar/index'
import { ListCocktail } from './components/ListCocktail/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <main className='main'>
          <Sidebar />
          <ListCocktail />
        </main>
      </Provider>
    </div>
  );
}

export default App;
