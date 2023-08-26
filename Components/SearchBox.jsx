// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Searchbox.css'

function SearchBox() {
  return (
    <form>
        <input id='inputbox' type="text" placeholder='Enter Your Text Here' /><br />
      <label>
        <input type="checkbox" id='box' />
        {' '}
        Only show products in stock
      </label>
      </form>
      
      

  )
}

export default SearchBox
