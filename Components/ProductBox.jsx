import React from 'react';
import PropTypes from 'prop-types';
import './Productbox.css';

function ProductBox({ Product }) {
  const rows = [];
  let lastCategory = null;

  Product.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <th id='cat' colSpan="2" key={product.category}>{product.category}</th>
      );
    }
    rows.push(
      <tr key={product.name}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
    lastCategory = product.category;
  });

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th className='head'>Name</th>
          <th className='head'>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  </div>
  );
}

ProductBox.propTypes = {
  Product: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.string,
    })
  ),
};

export default ProductBox;
