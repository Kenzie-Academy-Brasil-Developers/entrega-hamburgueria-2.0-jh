import { createContext, useContext, useState } from "react";
import { Icarrinho, IProductsContext } from "./@typesProduct";
import { IDefaltProviderProps } from "../User/@typesUser";
import { UserContext } from "../User/UserContext";





export const productsContext = createContext({} as IProductsContext)

export const ProductsProvider = ({children} : IDefaltProviderProps) => {

    const { products } = useContext(UserContext)
    const [ modalOpen , setModalOpen] = useState(false)
    const [carrinho , setCarrinho] = useState<Icarrinho[] | false>(false)

    return(

        <productsContext.Provider value={{products, modalOpen , setModalOpen , carrinho , setCarrinho}}>

            {children}

        </productsContext.Provider>

    )

}