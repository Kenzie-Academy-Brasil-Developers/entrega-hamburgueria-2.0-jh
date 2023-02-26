import { MdDelete } from 'react-icons/md';

import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { IProcucts } from '../../../../providers/User/@typesUser';
import { productsContext } from '../../../../providers/Products/ProductsContext';
import { Icarrinho } from '../../../../providers/Products/@typesProduct';



const CartProductCard = ({img , name , id} : IProcucts) => { 

  const { carrinho ,setCarrinho } = useContext(productsContext)
  
  const remuveToCarrinho = () => {

    // eslint-disable-next-line eqeqeq
    const newCarrinho = carrinho.filter((item : Icarrinho) => item.id != id)

      if(newCarrinho.length !== 0){
        setCarrinho(newCarrinho)
      }else{
        setCarrinho(false)
      }
     
  }
  return(
  <StyledCartProductCard>
    <div className='imageBox'>
      <img src={img} alt={name} />
    </div>
    <div className='contentBox'>
      <StyledTitle tag='h3' $fontSize='three'>
        {name}
      </StyledTitle>
      <button onClick={remuveToCarrinho} type='button' aria-label='Remover'>
        <MdDelete size={24} />
      </button>
    </div>
  </StyledCartProductCard>
)}

export default CartProductCard;
