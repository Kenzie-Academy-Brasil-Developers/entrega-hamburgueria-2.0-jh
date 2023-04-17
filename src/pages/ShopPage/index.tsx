import { useContext, useEffect, useState } from 'react';
import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { UserContext } from '../../providers/User/UserContext';
import { productsContext } from '../../providers/Products/ProductsContext';

const ShopPage = () => {

  const { buscaProdutos } = useContext(UserContext)
  const { modalOpen } = useContext(productsContext)

  useEffect(() => {

    if (!localStorage.getItem("@TOKEN")) {

      buscaProdutos()

    }

  }, [])

  return (
    <StyledShopPage>
      {modalOpen && <CartModal />}
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>


    </StyledShopPage>
  )
}

export default ShopPage
