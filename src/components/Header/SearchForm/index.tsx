import { MdSearch } from 'react-icons/md';
import React,  {useContext} from 'react';
import { AnyObject } from 'yup';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { productsContext } from '../../../providers/Products/ProductsContext';
import { IProcucts } from '../../../providers/User/@typesUser';





const SearchForm = () => {
  
  const { products , setfiltrados } = useContext(productsContext)
  

  

  const filterProducts = (e : React.ChangeEvent<HTMLInputElement> ) => { 

    e.preventDefault()
   
    

    const filtreds = products?.filter((product:IProcucts) =>  

      product.category.toLowerCase().startsWith(e.target.value.toLowerCase())
      || 
      product.name.toLowerCase().startsWith(e.target.value.toLowerCase())

    
    )

    if(filtreds){

      setfiltrados(filtreds)
      
    }
    
  }

  return(
    <StyledSearchForm >
      <input onChange={filterProducts} id='teste' type='text' placeholder='Digitar pesquisa' />
      <StyledButton disabled type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  )} 

export default SearchForm;
