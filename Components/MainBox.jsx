// eslint-disable-next-line no-unused-vars
import React from 'react'
import SearchBox from './SearchBox'
import ProductBox from './ProductBox'
import PropTypes from 'prop-types'


function MainBox({Product}) {
    return (
        <div>
      <SearchBox />
      <ProductBox product={Product} />
    </div>
  )
}

export default MainBox

MainBox.propTypes = {

    Product : PropTypes.object,
}





