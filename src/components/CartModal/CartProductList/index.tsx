import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { productsContext } from '../../../providers/Products/ProductsContext';
import { IProcucts } from '../../../providers/User/@typesUser';


const CartProductList = () => {

  const { carrinho, setCarrinho } = useContext(productsContext)
  const [precoTotal, setPrecoTotal] = useState<number>()

  const remuveAllCarrinho = () => {

    setCarrinho([])

    if (carrinho) {
      toast.success('itens removidos com sucesso!', { autoClose: 2000 })
    }
  }

  useEffect(() => {

    if (carrinho.length > 0) {

      const total = [...carrinho].reduce((acumulador, atual) => acumulador + atual.price, 0)

      setPrecoTotal(total)

    } else {

      setPrecoTotal(0)

    }

  }, [carrinho])


  return (
    <StyledCartProductList>
      <ul>
        {carrinho && carrinho.map((item: IProcucts) =>
          <CartProductCard
            key={item.id}
            img={item.img}
            category={item.category}
            id={item.id}
            name={item.name}
            price={item.price} />
        )}

      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>{precoTotal ? precoTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : "RS: 0,00"}</StyledParagraph>
      </div>
      <StyledButton onClick={remuveAllCarrinho} $buttonSize='default' $buttonStyle='gray'>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  )
}

export default CartProductList;
