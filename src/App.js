import React from 'react';
import './App.scss';
import { Provider } from "react-redux";
import { store } from "./store";
import ScrollUpButton from 'react-scroll-up-button';

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
        <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={200}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
        style={{
          width: "36px",
          height: "36px",
          backgroundColor: "#59BD5A",
          outline: "none",
          borderRadius: "18px",
          boxShadow: "0 2px 4px 0 #9b9b9b"
        }}
      />
      </Provider>
    </div>
  );
}

export default App;
