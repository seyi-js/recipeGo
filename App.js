/* eslint-disable prettier/prettier */
import React from 'react'
import Navigation from './src/Navigation/Navigation'
import { Provider } from 'react-redux'
import store from './src/react-redux/store/store'
export  const App =() =>{
  return (
    
    <Provider store={store}>
      <Navigation/>
    </Provider>
    
  )
}

export default App