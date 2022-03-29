
import { Link, useParams } from 'react-router-dom';

import products from '../data';

const SingleProduct = () => {

  const { productId } = useParams();
  const product = products.find((_product) => _product.id === productId);
  const {image, name} = product;

  return (
    <section className='section product'>
      <h2>single product page</h2>
      <hr />
      <h5>ID: {productId}</h5>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <Link to='/products' className='btn'>back to products page</Link> 
    </section>
  );
};

export default SingleProduct;
