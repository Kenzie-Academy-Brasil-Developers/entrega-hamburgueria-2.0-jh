import { MdShoppingCart, MdLogout } from 'react-icons/md';

import { useContext } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';

import { StyledContainer } from '../../styles/grid';
import { UserContext } from '../../providers/User/UserContext';
import { productsContext } from '../../providers/Products/ProductsContext';

const Header = () => {

  const { setModalOpen } = useContext(productsContext)
  const { userLogout } = useContext(UserContext)

  return (

    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <h1>Hungria Burguer</h1>

          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button
                type='button'
                onClick={() => {

                  setModalOpen(true)
                }}
              >
                <MdShoppingCart size={28} />
              </button>
              <button type='button' onClick={() => userLogout()}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
