import { useState } from 'react'
import {Provider} from 'react-redux'
import './App.css'
import CounterApp from './components/CounterApp'
import {store } from './app/store'
function App() {

  return (
    <Provider store={store}>
      <CounterApp/>
    </Provider>
  )
}

export default App
