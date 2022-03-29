import { Link } from 'react-router-dom';

import products from '../data';

const Products = () => {
  return (
    <>
      {/* <h2>Products Page</h2> */}
      {/* <hr /> */}
      <div className='products'>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Products;
