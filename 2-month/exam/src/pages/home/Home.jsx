import Books from '@/components/books/Books'
import Form from '@/components/form/Form'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Form/>
      <Books/>
    </div>
  )
}

export default React.memo(Home)