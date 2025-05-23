import React from 'react'
// import Header from './components/header/Header'
import Book from './components/book/Book'

const App = () => {
  return (
    <div>
      {/* <Header/> */}
      <h2>App</h2>
      <Book/>
    </div>
  )
}

export default React.memo(App)