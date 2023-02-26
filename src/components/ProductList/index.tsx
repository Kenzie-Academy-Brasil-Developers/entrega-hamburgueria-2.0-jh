import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { productsContext } from '../../providers/Products/ProductsContext';
import { IProcucts } from '../../providers/User/@typesUser';



const ProductList = () => {


  const { products } = useContext(productsContext)


  return(

    <StyledProductList>
      


      {products?.map((product : IProcucts ) => <ProductCard 
        
        key={product.id}
        name={product.name} 
        category={product.category} 
        price={product.price}
        img={product.img} 
        id={product.id}
        
      />)}

    </StyledProductList>

);}

export default ProductList;
