// eslint-disable-next-line no-unused-vars
import React from 'react'
import SearchBox from './SearchBox'
import ProductBox from './ProductBox'
import PropTypes from 'prop-types'
import './Mainbox.css'


function MainBox({Product}) {
    return (
      <div id='Main'>
      <SearchBox />
      <ProductBox product={Product} />
    </div>
  )
}

export default MainBox

MainBox.propTypes = {

    Product : PropTypes.object,
}





