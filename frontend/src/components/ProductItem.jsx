import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  // Fallback image in case `image` is empty or undefined
  const productImage = image && image.length > 0 ? image[0] : 'path/to/fallback/image.jpg';

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img
          className='hover:scale-110 transition ease-in-out'
          src={productImage}
          alt={name} // Added meaningful alt text
        />
      </div>
      <p className='pt-3 pb-1 text-sm px-2'>{name}</p>
      <p className='text-sm font-medium px-2'>{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;