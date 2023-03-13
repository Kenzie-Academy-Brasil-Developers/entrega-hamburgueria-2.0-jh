import { useContext } from 'react';
import { toast } from 'react-toastify';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { productsContext } from '../../../providers/Products/ProductsContext';

interface Iproduct {

  name: string;
  category: string;
  price: number;
  img: string;
  id?: number;

}

const ProductCard = ({ name, category, price, img, id }: Iproduct) => {


  const { products, carrinho, setCarrinho } = useContext(productsContext)

  const addCarrinho = () => {


    // eslint-disable-next-line array-callback-return
    products?.map((product: any) => {

      // eslint-disable-next-line eqeqeq
      if (product.id == id) {

        // eslint-disable-next-line no-unused-expressions
        carrinho.length > 0 ? setCarrinho([...carrinho, product]) : setCarrinho([product])

        toast.success('Adicionado ao carrinho', {
          autoClose: 2000,
        });

      }

    })
  }

  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={img} alt={name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <StyledParagraph className='category'>{category}</StyledParagraph>
        <StyledParagraph className='price'>R$ {price.toFixed(2)}</StyledParagraph>
        <StyledButton onClick={addCarrinho} $buttonSize='medium' $buttonStyle='green'>
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  )
}

export default ProductCard;
