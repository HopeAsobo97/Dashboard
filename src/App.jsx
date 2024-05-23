import React from 'react'
import Side from './Side'
import Head from './Head'
import Summary from './Summary'
import './App.css'
import Students from './Students/Students'
import StudentsContinued from './Students/StudentsContinued'


const App = () => {
  return (
    <div className='flex w-full'>
      <Side />
      <div className='bg-[#F0F1F3] h-full w-full'>
        <Head /> 
        <StudentsContinued />
      </div>
    </div>
  )
}

export default App
