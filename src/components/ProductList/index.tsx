import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { productsContext } from '../../providers/Products/ProductsContext';

const ProductList = () => {

  const { products, filtrados } = useContext(productsContext)


  return (

    <StyledProductList>

      {!filtrados ? products?.map((product) => <ProductCard

        key={product.id}
        name={product.name}
        category={product.category}
        price={product.price}
        img={product.img}
        id={product.id}

      />)
        :
        filtrados.map((product) => <ProductCard

          key={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          img={product.img}
          id={product.id}

        />)

      }

    </StyledProductList>

  );
}

export default ProductList;
