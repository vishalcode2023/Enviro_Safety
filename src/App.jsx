import React from 'react'
import MainRouter from './Routers/MainRouter'
import { Toaster } from 'react-hot-toast';

function App(){
  return (
    <div>
      <Toaster position="top-right" />
      <MainRouter/>
        <div>
      
    </div>
    </div>
  )
}

export default App