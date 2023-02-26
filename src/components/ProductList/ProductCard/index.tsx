import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';

interface Iproduct{

  name: string ;
  category: string;
  price: number;
  img: string;
  id?: number;

}

const ProductCard = ({name,category,price,img,id} : Iproduct ) => {

 
  const teste = () => {

    alert(`ADICIONOU PRODUTO ID ${id}`)

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
      <StyledButton onClick={teste} $buttonSize='medium' $buttonStyle='green'>
        Adicionar
      </StyledButton>
    </div>
  </StyledProductCard>
)}

export default ProductCard;
